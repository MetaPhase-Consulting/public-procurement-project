export type FilterSection = {
    id: string;
    field: string;
    value: string;
    label?: string;
}

export const newRequirement: FilterSection[] = [{
    id: 'new-req-new',
    field: 'new_requirement',
    value: 'New'
}, {
    id: 'new-req-recompete',
    field: 'new_requirement',
    value: 'Recompete'
}]

export const estimatedValue: FilterSection[] = [{
    id: 'est-val-1',
    field: 'estimated_value',
    value: '$250k-500K',
    label: '>$250K and <$500K',
}, {
    id: 'est-val-2',
    field: 'estimated_value',
    value: '$500K-$1M',
    label: '>$500K and <$1M',
}, {
    id: 'est-val-3',
    field: 'estimated_value',
    value: '$1M-$5M',
    label: '>$1M and <$5M',
}, {
    id: 'est-val-4',
    field: 'estimated_value',
    value: '$5M-$10M',
    label: '>$5M and <$10M',
}, {
    id: 'est-val-4',
    field: 'estimated_value',
    value: '$10M-$20M',
    label: '>$10M and <$20M',
}, {
    id: 'est-val-5',
    field: 'estimated_value',
    value: '$20M-$50M',
    label: '>$20M and <$50M',
}, {
    id: 'est-val-6',
    field: 'estimated_value',
    value: '$50M-$100M',
    label: '>$50M and <$100M',
}, {
    id: 'est-val-7',
    field: 'estimated_value',
    value: '$100M-$500M',
    label: '>$100M and <$500M',
}, {
    id: 'est-val-8',
    field: 'estimated_value',
    value: '>$500M',
    label: '>$500M',
}]

export const pastSetAside: FilterSection[] = [{
    id: 'past-set-aside-na',
    field: 'past_set_aside',
    value: 'N/A'
}, {
    id: 'past-set-aside-unrestricted',
    field: 'past_set_aside',
    value: 'Unrestricted'
}, {
    id: 'past-set-aside-sbt',
    field: 'past_set_aside',
    value: 'Small Business - Total'
}, {
    id: 'past-set-aside-sbp',
    field: 'past_set_aside',
    value: 'Small Business - Partial'
}, {
    id: 'past-set-aside-8a',
    field: 'past_set_aside',
    value: '8(a)'
}, {
    id: 'past-set-aside-hubzone',
    field: 'past_set_aside',
    value: 'HUBZone'
}, {
    id: 'past-set-aside-sdvosb',
    field: 'past_set_aside',
    value: 'Service Disabled Veteran Owned Small Business (SDVOSB)',
    label: 'SDVOSB'
}, {
    id: 'past-set-aside-vosb',
    field: 'past_set_aside',
    value: 'VOSB',
    label: 'VOSB'
}, {
    id: 'past-set-aside-wosb',
    field: 'past_set_aside',
    value: 'Women-Owned Small Business (WOSB)',
    label: 'WOSB'
}]