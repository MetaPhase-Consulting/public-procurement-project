import React from 'react';

interface Props {
    value: string;
}

const RequirementTag: React.FC<Props> = (props) => {
    return (
        <div className={'requirement-tag ' + (props.value == 'Recompete' ? 'white' : '')}>
            <span className='inner'>
                {props.value}
            </span>
        </div>
    )
}

export default RequirementTag;