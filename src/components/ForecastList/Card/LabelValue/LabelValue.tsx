import React from 'react';
import classes from './LabelValue.module.css';

interface Props {
    label: string;
    value: string | number;
    inline?: boolean;
    nomargin?: boolean;
    reverse?: boolean;
}

const LabelValue: React.FC<Props> = (props) => {
    return (
        <div className={[classes.LabelDataWrapper, props.inline ? classes.Inline : '', props.nomargin ? classes.NoMargin : '', props.reverse ? classes.Reverse : ''].join(' ')}>
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


