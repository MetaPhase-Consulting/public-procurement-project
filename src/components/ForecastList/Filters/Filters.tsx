import * as React from 'react';


/**
 * **Filters**
 * 
 * Contains all filter sections for browsing procurement forecasts.
 * Each filter section has the title of the field being filtered and
 * various input options to specificy the constraints (e.g., checkbox).
 */
const Filters: React.FC = () => {

    return (
        <div data-testid='filters-column' className="flex flex-col">
            <div className="flex flex-row justify-between">
                <p className="uppercase font-bold">
                    Filters
                </p>
                <p className="underline text-sm">
                    Clear All
                </p>
            </div>
            <div className="flex flex-col bg-gray-200 w-full p-2">
                <span>Fiscal Year</span>
                <span>Office Symbol</span>
                <span>NAICS Codes</span>
            </div>
        </div>
    );
}

export default Filters;