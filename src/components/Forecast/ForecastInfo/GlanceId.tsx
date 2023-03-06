import React from 'react';

interface Props {
    value: React.ReactNode;
    children?: React.ReactNode;
}

const GlanceId: React.FC<Props> = (props) => {
    return (
        <div className={'glance-id ' + (props.children ? 'Inline' : '')}>
            <span className={props.children ? 'prefix-content' : ''}>
                {props.children}
            </span>
            <span>
                {props.value}
            </span>
        </div>
    )
}

export default GlanceId;