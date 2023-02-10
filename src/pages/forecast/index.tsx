import React from 'react';
import { type NextPage } from 'next';
import {
    Breadcrumb, BreadcrumbBar, BreadcrumbLink, CardGroup,
    Grid, GridContainer, Pagination
} from '@trussworks/react-uswds';

import { api } from '../../utils/api';
import Layout from '../../components/Layout/Layout';
import Filters from '../../components/ForecastList/Filters/Filters';
import ListingCard from '../../components/ForecastList/Card/ListingCard/ListingCard';

type FilterState = {
    new_requirement: string[],
    estimated_value: string[],
    past_set_aside: string[],
}

/**
 * **ForecastList**
 * 
 * This is the procurement forecast browsing page.
 * - Public users can filter, search, and page through a list of opportunities
 * - Public users can view a card summary for each opportunity and click for more details
 * - Public users can also export the results as XLSX or CSV files
 */
const ForecastList: NextPage = () => {

    // =================== INPUT STATES ===================

    const [page, setPage] = React.useState(1);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [filters, setFilters] = React.useState<FilterState>({
        new_requirement: [],
        estimated_value: [],
        past_set_aside: [],
    })


    // =================== HELPER FUNCTIONS ===================

    /**
     * Helper function that converts the filter state in this component
     * to a definition for the tRPC query filter specifications.
     * 
     * @returns tRPC useQuery() readable filter constraints
     */
    const convert = (filters: FilterState) => {
        return {
            new_requirement: filters.new_requirement.map(f => {
                return { new_requirement: { equals: f } };
            }),
            estimated_value: filters.estimated_value.map(f => {
                return { estimated_value: { equals: f } };
            }),
            past_set_aside: filters.past_set_aside.map(f => {
                return { past_set_aside: { equals: f } };
            }),
        }
    }

    /**
     * Helper function that locates where in the complex array the inputted
     * filter value is located.
     * 
     * Since the filter state contains keys for each section, this function
     * checks of the inputted field exists, then returns the index of the value
     * in that field's array (if it exists).
     * 
     * @returns index of value in field's array in filter state
     */
    const getFilterIndex = (field: string, value: string) => {
        if (filters.hasOwnProperty(field)) {
            const arr = (filters as any)[field];
            return arr.indexOf(value);
        }
        return -1;
    }

    /**
     * Helper function that updates the filter state with the inputted
     * field and value. Since the filter state is a complex object containing
     * the filter fields as keys and value set as an array, this function
     * helps make sure filters are being removed or added in the proper location.
     */
    const updateFilters = (event: React.ChangeEvent<HTMLInputElement>, field: string, value: string) => {
        let newFilters = filters;
        if (filters.hasOwnProperty(field)) {
            const f: any = filters;
            const arr = f[field];
            const index = arr.indexOf(value);

            if (event.target.checked && index == -1) {
                arr.push(value)
            } else if (!event.target.checked && index > -1) {
                arr.splice(index, 1);
            }
            newFilters = { ...newFilters, ...arr }
        }
        setFilters(newFilters);
    }

    /**
     * Helper function that clears the filters for a specified field or
     * all filters in the filter state.
     */
    const clearFilters = (field?: string) => {
        if (!field) {
            setFilters({
                new_requirement: [],
                estimated_value: [],
                past_set_aside: [],
            })
        }
        if (field && filters.hasOwnProperty(field)) {
            const f: any = filters;
            f[field] = [];
            setFilters({ f } as unknown as FilterState)
        }
    }


    // =================== QUERY FUNCTIONS ===================

    const input = {
        search: searchQuery,
        filter: convert(filters),
        sort: { number: 'asc' },
        page: page
    }
    const total = api.forecast.getTotalResults.useQuery(input).data;
    const { data } = api.forecast.getForecasts.useQuery(input);

    return (
        <Layout>
            <div className="container m-auto px-3 py-6">
                <BreadcrumbBar className="py-2 text-sm">
                    <Breadcrumb>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </Breadcrumb>
                    <Breadcrumb>Browse Opportunities</Breadcrumb>
                </BreadcrumbBar>
                <h1 className="sm:text-[2rem] pb-8">
                    Browse Forecast Opportunities
                </h1>
                <GridContainer className="max-w-none p-1">
                    <Grid row gap="lg">
                        <Grid tablet={{ col: 6 }} desktop={{ col: 3 }}>
                            <div className='pr-8'>
                                <Filters
                                    updateFilters={updateFilters}
                                    getFilterIndex={getFilterIndex}
                                    clearFilters={clearFilters}
                                />
                            </div>
                        </Grid>
                        <Grid tablet={{ col: 6 }} desktop={{ col: 9 }}>
                            {/* <div className="flex justify-end">
                                <Search
                                    size="small"
                                    placeholder="Search..."
                                    onSubmit={(event) => { setSearchQuery(event.toString()) }}
                                />
                            </div> */}
                            <div className="py-3 border-b border-gray-400 mb-8">
                                <span className='font-semibold'>{total}</span>
                                <span> Results</span>
                            </div>
                            <CardGroup className="flex flex-col w-full m-0">
                                {data && data.map(forecast => {
                                    return (
                                        <ListingCard key={forecast.number} data={forecast} />
                                    )
                                })}
                            </CardGroup>
                            {(total && total > 0) ?
                                <Pagination
                                    pathname=''
                                    totalPages={Math.ceil(total / 3)}
                                    currentPage={page}
                                    onClickPageNumber={(_event, page: number) => setPage(page)}
                                    onClickNext={() => setPage(page + 1)}
                                    onClickPrevious={() => setPage(page - 1)}
                                /> : undefined
                            }
                        </Grid>
                    </Grid>
                </GridContainer>
            </div>
        </Layout>
    );
};

export default ForecastList;
