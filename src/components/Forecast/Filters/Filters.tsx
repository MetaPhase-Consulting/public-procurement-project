import * as React from 'react';
import { Accordion, Checkbox } from '@trussworks/react-uswds';
import type { FilterSection } from './FilterSections';
import { newRequirement, estimatedValue, pastSetAside } from './FilterSections';

interface Props {
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
    const { updateFilters, getFilterIndex, clearFilters } = props;

    const createCheckboxes = (sections: FilterSection[]) => {
        return (
            <div className='-mx-2'>
                {sections.map((o, i) => {
                    return (
                        <Checkbox
                            key={o.id}
                            id={o.id}
                            name={o.id}
                            label={o.label ?? o.value}
                            className={i == 0 ? '-mt-4 checkbox-label' : 'checkbox-label'}
                            onChange={(event) => updateFilters(o.field, o.value, event)}
                            checked={getFilterIndex(o.field, o.value) > -1}
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
                    items={[{
                        id: 'new-requirement',
                        title: 'New Requirement',
                        content: createCheckboxes(newRequirement),
                        // TODO: Only expand by default if there are checked boxes inside
                        expanded: true,
                        headingLevel: 'h6',
                    }, {
                        id: 'estimated-value',
                        title: 'Estimated Value',
                        content: createCheckboxes(estimatedValue),
                        expanded: true,
                        headingLevel: 'h6',
                    }, {
                        id: 'past-set-aside',
                        title: 'Past Set Aside',
                        content: createCheckboxes(pastSetAside),
                        expanded: true,
                        headingLevel: 'h6',
                    }]} />
            </div>
        </div>
    );
}

export default Filters;