import React from 'react';

interface Props {
    label: string;
    children: React.ReactNode;
}

const InfoBox: React.FC<Props> = (props) => {
    return (
        <div className='info-box'>
            <span className='label'>
                {props.label}
            </span>
            <span className='content'>
                {props.children}
            </span>
        </div>
    )
}

export default InfoBox;


