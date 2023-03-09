export interface FacetCategory {
    name: string;
    label?: string | null;
    facets?: Facet[] | null;
    sort?(query: any): any | null;
}

export interface Facet {
    label: string;
    doc_count: number;
    selected?: boolean | null;
}

export interface SearchResult {
    documents: any[];
    record_count: number;
    facet_categories: FacetCategory[];
}

export const FACET_SEARCH_CATEGORIES: FacetCategory[] = [
    {
        name: 'new_requirement',
        label: 'New Requirement'
    },
    {
        name: 'estimated_value',
        label: 'Estimated Value',
        sort: (facet: any[]) => {
            const a = { '$addFields' : { '__order' : { '$indexOfArray' : [ ESTIMATED_VALUE_ORDER, '$_id' ] } } };
            const s = { '$sort' : { '__order' : 1 } };
            facet.push(a);
            facet.push(s);
        }
    },
    {
        name: 'past_set_aside',
        label: 'Past Set Aside'
    }
];

const ESTIMATED_VALUE_ORDER: any[] = [
    { $literal: '$250k-500K' },
    { $literal: '$250K-500K' },
    { $literal: '$500K-$1M' },
    { $literal: '$1M-$5M' },
    { $literal: '$5M-$10M' },
    { $literal: '$10M-$20M' },
    { $literal: '$20M-$50M' },
    { $literal: '$50M-$100M' },
    { $literal: '$100M-$500M' },
    { $literal: '>$500M' }
];
