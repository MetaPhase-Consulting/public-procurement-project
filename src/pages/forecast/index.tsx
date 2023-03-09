import React, { FormEvent } from 'react';
import { type NextPage } from 'next';

import { CardGroup, Grid, GridContainer, Pagination, Search } from '@trussworks/react-uswds';

import { Forecast } from '../../utils/types';
import { api } from '../../utils/api';
import Layout from '../../components/Layout/Layout';
import Filters from '../../components/Forecast/Filters/Filters';
import ListingCard from '../../components/Forecast/ForecastInfo/ForecastCard';
import SubNavigation from '../../components/Layout/SubNavigation';
import PageHeader from '../../components/Layout/PageHeader';
import FilterChip from '../../components/Forecast/Filters/FilterChip';
import { SearchResult } from '../../components/Search/Facet';

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
    const updateFilters = (field: string, value: string, event?: React.ChangeEvent<HTMLInputElement>, remove?: boolean) => {
        let newFilters = filters;
        if (filters.hasOwnProperty(field)) {
            const f: any = filters;
            const arr = f[field];
            const index = arr.indexOf(value);

            // Add filter value
            if (index == -1) {
                if (event && event.target.checked) {
                    arr.push(value)
                }
            }

            // Remove filter value
            if (index > -1) {
                if ((event && !event.target.checked) || remove) {
                    arr.splice(index, 1);
                }
            }

            newFilters = { ...newFilters }
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

    /**
     * Generates FilterChip components of all selected filters in the filter state.
     * A FilterChip is a data pill listing the name of the filter and an 'X' button
     * to remove the respective filter.
     * 
     * @returns React Node of all filter chips
     */
    const renderChips = () => {
        const chips = []
        for (const [key, value] of Object.entries(filters)) {
            for (const v of value) {
                chips.push(
                    <FilterChip
                        text={v.toString()}
                        handleDelete={() => updateFilters(key, v, undefined, true)}
                    />
                )
            }
        }

        return chips.length > 0 && (
            <div className='flex flex-row justify-between'>
                <div className='flex flex-row  items-center '>
                    <span className='chips-heading'>Filtering By</span>
                    <div className='flex flex-row  py-2 flex-wrap'>
                        {chips}
                    </div>
                </div>
                <button
                    className="underline text-sm clear-button"
                    onClick={() => { clearFilters() }}
                >
                    Clear All
                </button>
            </div>
        );
    }

    // =================== QUERY FUNCTIONS ===================

    const input = {
        search: searchQuery,
        filter: convert(filters),
        sort: { number: -1 },
        page: page
    }

    const aggregate = api.forecast.getForecastsAggregate.useQuery(input);
    const aggregateData =  aggregate.data as SearchResult || {};
    const data = aggregateData.documents;
    const total = aggregateData.record_count;
    const facetCategories = aggregateData.facet_categories || [];

    console.log(JSON.stringify(aggregate));

    React.useEffect(() => {
        if (total) {
            const lastPage = Math.ceil(total / 3);
            // If current page is greater than the total number of pages available
            // navigate to last most available page
            if (page > lastPage) {
                setPage(lastPage);
            }
        }
    }, [page, total])

    return (
        <Layout>
            <SubNavigation selected='Browse Opportunities' addMargin />
            <PageHeader
                title="Browse Forecast Opportunities"
                breadcrumbs={[{ label: 'Home', link: '/' }, { label: 'Browse Opportunities' }]}
            />
            <div className="row mb-24">
                <GridContainer className="max-w-none p-1 w-full">
                    <Grid row gap="lg">
                        <Grid tablet={{ col: 6 }} desktop={{ col: 3 }}>
                            <div className='pr-8'>
                                <Filters
                                    facetCategories={facetCategories}
                                    updateFilters={updateFilters}
                                    getFilterIndex={getFilterIndex}
                                    clearFilters={clearFilters}
                                />
                            </div>
                        </Grid>
                        <Grid tablet={{ col: 6 }} desktop={{ col: 9 }}>
                            <div className="flex justify-end">
                                <Search
                                    size="small"
                                    placeholder="Search..."
                                    onSubmit={(event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSearchQuery((event.currentTarget.elements.namedItem('search') as HTMLInputElement).value); }}
                                />
                            </div>
                            <div className="py-3 border-b border-gray-400 mb-1">
                                <span className='font-semibold'>{total}</span>
                                <span> Results</span>
                            </div>
                            {renderChips()}
                            {(total && total > 0) ?
                                <>
                                    <CardGroup className="flex flex-col w-full m-0 mt-6">
                                        {data && data.map((forecast: Forecast) => {
                                            return (
                                                <ListingCard key={forecast.number} data={forecast} />
                                            )
                                        })}
                                    </CardGroup>
                                    <Pagination
                                        pathname=''
                                        totalPages={Math.ceil(total / 3)}
                                        currentPage={page}
                                        onClickPageNumber={(_event, page: number) => setPage(page)}
                                        onClickNext={() => setPage(page + 1)}
                                        onClickPrevious={() => setPage(page - 1)}
                                    />
                                </> : undefined
                            }
                        </Grid>
                    </Grid>
                </GridContainer>
            </div>
        </Layout>
    );
};

export default ForecastList;
