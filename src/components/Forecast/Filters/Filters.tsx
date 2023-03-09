import * as React from 'react';
import { Accordion, Checkbox } from '@trussworks/react-uswds';
import type { FilterSection } from './FilterSections';
import { newRequirement, estimatedValue, pastSetAside } from './FilterSections';
import { Facet, FacetCategory } from '../../Search/Facet';

interface Props {
    facetCategories: FacetCategory[];
    updateFilters: (field: string, value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
    getFilterIndex: (field: string, value: string) => any;
    clearFilters: (field?: string) => void;
}

/**
 * **Filters**
 * 
 * Contains all filter sections for browsing procurement forecasts.
 * Each filter section has the title of the field being filtered and
 * various input options to specificy the constraints (e.g., checkbox).
 */
const Filters: React.FC<Props> = (props) => {
    const { facetCategories, updateFilters, getFilterIndex, clearFilters } = props;

    const createCheckboxes = (facets: Facet[]) => {
        return (
            <div className='-mx-2'>
                {facets.map((o, i) => {
                    return (
                        <Checkbox
                            key={o.label}
                            id={o.label}
                            name={o.label}
                            label={`${o.label} (${o.doc_count})`}
                            className={i == 0 ? '-mt-4 checkbox-label' : 'checkbox-label'}
                            onChange={(event) => updateFilters(o.label, o.label, event)}
                            checked={getFilterIndex(o.label, o.label) > -1}
                        />
                    )
                })}
            </div>
        )
    }

    return (
        <div data-testid='filters-column' className="flex flex-col filter-section">
            <div className="flex flex-row justify-between items-center pb-3">
                <p className="uppercase font-bold text-xl">
                    Filters
                </p>
                <button
                    className="underline text-sm clear-button"
                    onClick={() => { clearFilters() }}
                >
                    Clear All
                </button>
            </div>
            <div className="flex flex-col bg-gray-200 w-full p-3">
                <Accordion
                    className='filter-accordion'
                    multiselectable={true}
                    items={ facetCategories.map(fc => {
                        return {
                            id: fc.name,
                            title: fc.label,
                            content: createCheckboxes(fc.facets || []),
                            expanded: true,
                            headingLevel: 'h6'
                        }
                      }) }
                    />
            </div>
        </div>
    );
}

export default Filters;