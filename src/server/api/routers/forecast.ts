// import { Prisma } from '@prisma/client';
import { Prisma } from '@prisma/client';
import { z } from 'zod';
import { Facet, FacetCategory, FACET_SEARCH_CATEGORIES, SearchResult } from '../../../components/Search/Facet';
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


// ============= ROUTER FUNCTION =============

export const forecastRouter = createTRPCRouter({
    getForecastsAggregate: publicProcedure
        .input(listInput)
        .query(({ input, ctx }) => {

            const facetCategoryNames = FACET_SEARCH_CATEGORIES.map(f => f.name);
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

            // console.log('match: ' + JSON.stringify(match));

            const facets: any = {};
            FACET_SEARCH_CATEGORIES.forEach(facetCategory => {
                facets[facetCategory.name as keyof typeof facets] = [{
                    $group: {
                        _id: `$${facetCategory.name}`,
                        count: { $sum: 1 },
                    },
                }]
                facetCategory.sort ? facetCategory.sort(facets[facetCategory.name]) : facets[facetCategory.name].push({ $sort: { _id: 1 } });
            });

            const skip = (input.page - 1) * 3;

            facets.documents = [ {
                $skip: skip,
            }, {
                $limit: 3,
            }, {
                $sort: input.sort
            }];

            facets.metadata = [{
                $count: 'total_records',
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

            // console.log(JSON.stringify(pipeline));

            const aggregate = { pipeline: pipeline };

            const retVal = ctx.prisma.forecast.aggregateRaw(aggregate);

            const searchResult = retVal.then((rec: Prisma.JsonObject) => {
                const r = rec[0] as any;
                const documents = r.documents;
                const record_count = (<any[]>r.metadata)[0].total_records;
                const facet_categories: FacetCategory[] = FACET_SEARCH_CATEGORIES.map(facetCategory => {
                    const fc: FacetCategory = {
                        name: facetCategory.name,
                        label: facetCategory.label,
                        facets: (<any[]>r[facetCategory.name]).map(facet => {
                            return {
                                label: facet._id,
                                doc_count: facet.count
                            };
                        })
                    };
                    return fc;
                });
                return {
                    documents: documents as any[],
                    record_count: record_count as number,
                    facet_categories: facet_categories
                } as SearchResult;
            });
            return searchResult;

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

