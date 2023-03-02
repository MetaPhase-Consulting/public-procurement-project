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
    synced: Date | null,
    created?: Date | null,
    created_by?: string | null,
    opened?: Date | null,
    opened_by?: string | null,
    modified?: Date | null,
    updated?: Date | null,
    updated_by?: string | null,
    work_notes?: string | null,
    work_notes_list?: string | null,
    active: boolean,
    featured: boolean,
    archive: boolean,
    state?: string | null,

    // Flat Attributes
    anticipated_award_date?: Date | null,
    anticipated_solicitation_release_date?: Date | null,
    co_contact?: string | null,
    dollar_value_with_base_option?: string | null,
    fiscal_year?: number | null,
    incumbent_contractor?: string | null,
    long_description?: string | null,
    poc_email?: string | null,
    poc_name?: string | null,
    requirement_description?: string | null,
    target_award_quarter?: number | null,

    // Filterable Attributes
    action_type?: string | null,
    past_competition?: string | null,
    award_type?: string | null,
    contract_vehicle?: string | null,
    estimated_value?: string | null,
    length_of_performance?: string | null,
    naics_code?: string | null,
    new_requirement?: string | null,
    office_symbol?: string | null,
    place_of_performance?: string | null,
    security_clearance?: string | null,
    past_set_aside?: string | null,
    anticipated_set_aside?: string | null,
}
