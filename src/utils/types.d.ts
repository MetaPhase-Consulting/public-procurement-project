export interface Announcement {
    // Metadata
    id: string,
    synced: Date,
    created?: Date,
    created_by?: string,
    updated?: Date,
    updated_by?: string,
    active: boolean,
    glyph?: boolean,
    public: boolean,

    // Main Attributes
    name: string,
    title?: string,
    summary?: string,
    from?: Date,
    to?: Date,
}

export interface HighlightMessage {
    // Metadata
    id: string,
    number: string,
    synced: Date,
    created?: Date,
    created_by?: string,
    updated?: Date,
    updated_by?: string,
    work_notes?: string,
    work_notes_list?: string,
    active: boolean,
    state?: number,

    // Main Attributes
    message: string,
}

export interface Forecast {
    // Metadata
    id: string;
    number: string,
    synced: Date,
    created?: Date,
    created_by?: string,
    opened?: Date,
    opened_by?: string,
    modified?: Date,
    updated?: Date,
    updated_by?: string,
    work_notes?: string,
    work_notes_list?: string,
    active: boolean
    featured: boolean,
    archive: boolean,
    state?: number,

    // Flat Attributes
    anticipated_award_date?: Date,
    anticipated_solicitation_release_date?: Date,
    co_contact?: string,
    dollar_value_with_base_option?: string,
    fiscal_year?: number,
    incumbent_contractor?: string,
    long_description?: string,
    poc_email?: string,
    poc_name?: string,
    requirement_description?: string,
    target_award_quarter?: number,

    // Filterable Attributes
    action_type?: string,
    past_competition?: string,
    award_type?: string,
    contract_vehicle?: string,
    estimated_value?: string,
    length_of_performance?: string,
    naics_code?: string,
    new_requirement?: string,
    office_symbol?: string,
    place_of_performance?: string,
    security_clearance?: string,
    past_set_aside?: string,
    anticipated_set_aside?: string,
}
