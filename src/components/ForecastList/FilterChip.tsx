import * as React from 'react';
import classes from './FilterChip.module.css'

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
        <div className={classes.Chip}>
            {text}
            <div className={classes.Delete} onClick={handleDelete} />
        </div>
    );
}

export default FilterChip;