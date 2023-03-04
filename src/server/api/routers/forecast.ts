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

            /*
            let mf: any;

            enabledFilters.forEach(enabledFilter => {
                if (!!!mf) mf = { $match: {} };
                mf.$match = input.filter[enabledFilter as keyof typeof input.filter]
            })
            */

            const filters = enabledFilters.map(filter => {
                const filterValues = (<any[]>input.filter[filter as keyof typeof input.filter]);
                const mongoFilter = filterValues.map(fv => {
                    return { $eq: [`$${filter}`, fv] }
                });
                return { $expr: { $or: filterValues } };
            });

            const match = filters.length > 0 ? { $and: filters } : {};

            console.log(JSON.stringify(match));

            const retVal = ctx.prisma.forecast.aggregateRaw({
                pipeline: [
                        {
                            $match: match
                        },
                        {
                            $facet: {
                                places_of_performance: [
                                    {
                                        $group: {
                                            _id: "$place_of_performance",
                                            count: {
                                                $sum: 1,
                                            },
                                        },
                                    },
                                    {
                                        $sort: {
                                            _id: 1,
                                        },
                                    },
                                ],
                                new_requirements: [
                                    {
                                        $group: {
                                            _id: "$new_requirement",
                                            count: {
                                                $sum: 1,
                                            },
                                        },
                                    },
                                    {
                                        $sort: {
                                            _id: 1,
                                        },
                                    },
                                ],
                                resultData: [
                                    {
                                        $limit: 3,
                                    },
                                    {
                                        $skip: 0,
                                    },
                                    {
                                        $sort: {
                                            number: 1,
                                        },
                                    },
                                ],
                                pageInfo: [
                                    {
                                        $count: "totalRecords",
                                    },
                                ],
                            },
                        }
                ]
            });
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

