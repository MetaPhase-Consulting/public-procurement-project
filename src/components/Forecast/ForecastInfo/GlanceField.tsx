import React from 'react';

interface Props {
    label: string;
    labelWide?: boolean;
    data: string | number;
    dataWide?: boolean;
    inline?: boolean;
    noMargin?: boolean;
}

const GlanceField: React.FC<Props> = (props) => {
    return (
        <div className='glance-field'>
            <div className={'wrapper ' + (props.noMargin ? 'no-margin' : '')}>
                <div className={'label ' + (props.labelWide ? 'wide' : '')}>
                    {props.label}
                </div>
                <div className={'data ' + (props.dataWide ? 'wide' : '')}>
                    {props.data}
                </div>
            </div>
        </div >
    )
}

export default GlanceField;