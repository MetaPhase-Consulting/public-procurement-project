import * as React from 'react';

interface Props {
    text: string;
    handleDelete: any;
}

/**
 * **FilterChip**
 * 
 * Describes the filter that is active towards the queried results set.
 * Contains the value of the filter as a text with an 'X' button to
 * remove the filter.
 */
const FilterChip: React.FC<Props> = (props) => {
    const { text, handleDelete } = props;

    return (
        <div className='filter-chip'>
            {text}
            <div className='delete-button' onClick={handleDelete} />
        </div>
    );
}

export default FilterChip;