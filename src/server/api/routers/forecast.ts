// import { Prisma } from '@prisma/client';
import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';


// ============= SUPPORTING FUNCTIONS/TYPES =============

/**
 * This is the zod type for the input required on the browse forecast feature.
 * It accepts values necessary for searching, sorting, filtering, and pagination.
 */
const listInput = z.object({
    search: z.string(),
    sort: z.any(),
    filter: z.object({
        new_requirement: z.array(z.any()),
        estimated_value: z.array(z.any()),
        past_set_aside: z.array(z.any()),
    }),
    page: z.number(),
})


// const searchForecasts = (search: string) => {
//     const forecastModel = Prisma.dmmf.datamodel.models.find(model => model.name === 'Forecast')
//     if (forecastModel) {
//         const fields = forecastModel.fields
//         const fieldNames = fields.map(f => f.name)
//         const query: any = {};
//         fieldNames.forEach(field => {
//             query[field] = { contains: search }
//         })
//     }
//     return [];
// }


// ============= ROUTER FUNCTION =============

export const forecastRouter = createTRPCRouter({
    getForecastsAggregate: publicProcedure
        .input(listInput)
        .query(({ input, ctx }) => {

            const props = Object.getOwnPropertyNames(input.filter);
            const enabledFilters = props.filter(prop => (<any[]>input.filter[prop as keyof typeof input.filter]).length > 0)

            const filters = enabledFilters.map(filter => {
                const filterValues = (<any[]>input.filter[filter as keyof typeof input.filter]);
                const literalFilters = filterValues.map(fv => {
                    return { $eq: [`$${filter}`, { $literal: fv[filter].equals }] }
                });
                return { $expr: { $or: literalFilters } };
            });

            const match = filters.length > 0 ? { $and: filters } : {};

            console.log('match: ' + JSON.stringify(match));

            const facets: any = {};
            props.forEach(filterName => {
                facets[filterName as keyof typeof facets] = [{
                    $group: {
                        _id: `$${filterName}`,
                        count: { $sum: 1 },
                    }
                }, {
                    $sort: { _id: 1 }
                }]
            });

            facets.resultData = [{
                $limit: 3,
            }, {
                $skip: (input.page - 1) * 3,
            }, {
                $sort: input.sort
            }];

            facets.pageInfo = [{
                $count: 'totalRecords',
            }];

            const pipeline = [];

            const searchText = (input.search || '').trim();

            if (searchText.length > 0) {
                const search = {
                    index: 'search_index',
                    text: {
                      query: searchText,
                      path: {
                        wildcard: '*'
                      }
                    }
                  };
                pipeline.push({ $search: search });
            }

            pipeline.push({ $match: match });
            pipeline.push({ $facet: facets });

            console.log(JSON.stringify(pipeline));

            const aggregate = { pipeline: pipeline };

            const retVal = ctx.prisma.forecast.aggregateRaw(aggregate);
            return retVal;

        }),
    getForecasts: publicProcedure
        .input(listInput)
        .query(({ input, ctx }) => {
            return ctx.prisma.forecast.findMany({
                skip: (input.page - 1) * 3,
                take: 3,
                orderBy: input.sort,
                where: {
                    AND: [
                        { OR: input.filter.new_requirement },
                        { OR: input.filter.estimated_value },
                        { OR: input.filter.past_set_aside },
                    ]
                    // OR: input.search ? [
                    //     {number: {search: input.search}},
                    //     {contract_vehicle: {search: input.search}},
                    //     {incumbent_contractor: {search: input.search}},
                    //     {length_of_performance: {search: input.search}},
                    //     {long_description: {search: input.search}},
                    // ] : undefined
                },
            });
        }),
    getTotalResults: publicProcedure
        .input(listInput)
        .query(({ input, ctx }) => {
            return ctx.prisma.forecast.count({
                where: {
                    AND: [
                        { OR: input.filter.new_requirement },
                        { OR: input.filter.estimated_value },
                        { OR: input.filter.past_set_aside },
                    ]
                },
            });
        }),
    getById: publicProcedure
        .input(z.object({ id: z.string() }))
        .query(({ input, ctx }) => {
            return ctx.prisma.forecast.findUnique({
                where: {
                    id: input.id
                },
            });
        }),
    getByNumber: publicProcedure
        .input(z.object({ number: z.string() }))
        .query(({ input, ctx }) => {
            return ctx.prisma.forecast.findUnique({
                where: {
                    number: input.number
                },
            });
        }),
    getAll: publicProcedure
        .query(({ ctx }) => {
            return ctx.prisma.forecast.findMany();
        }),
});

