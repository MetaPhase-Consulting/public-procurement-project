import React from 'react';

interface Props {
    label: string;
    value: string | number;
    inline?: boolean;
    noMargin?: boolean;
    reverse?: boolean;
}

const LabelValue: React.FC<Props> = (props) => {
    return (
        <div className={'label-value ' + (props.inline ? 'inline ' : '') + (props.noMargin ? 'no-margin ' : '') + (props.reverse ? 'reverse' : '')}>
            <span className='label'>
                {props.label}
            </span>
            <span className='value'>
                {props.value}
            </span>
        </div>
    )
}

export default LabelValue;


