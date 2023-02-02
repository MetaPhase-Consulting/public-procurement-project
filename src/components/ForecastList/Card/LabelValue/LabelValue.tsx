import React from 'react';
import classes from './LabelValue.module.css';

interface Props {
    label: string;
    value: string | number;
    inline?: boolean;
}

const LabelValue: React.FC<Props> = (props) => {
    return (
        <div className={[classes.LabelDataWrapper, props.inline ? classes.Inline : ''].join(' ')}>
            <span className={classes.Label}>
                {props.label}
            </span>
            <span className={classes.Value}>
                {props.value}
            </span>
        </div>
    )
}

export default LabelValue;


