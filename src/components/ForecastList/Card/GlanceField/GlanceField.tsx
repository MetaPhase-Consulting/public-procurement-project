import React from 'react';
import classes from './GlanceField.module.css';

interface Props {
    label: string;
    labelWide?: boolean;
    data: string | number;
    dataWide?: boolean;
    inline?: boolean;
}

const GlanceField: React.FC<Props> = (props) => {
    return (
        <div className={classes.GlanceField}>
            <div className={classes.GlanceFieldInner}>
                <div className={[classes.GlanceWrapper, props.NoMargin ? classes.NoMargin : ''].join(' ')}>
                    <div className={[classes.GlanceLabel, props.labelWide ? classes.Wide : ''].join(' ')}>
                        {props.label}
                    </div>
                    <div className={[classes.GlanceData, props.dataWide ? classes.Wide : ''].join(' ')}>
                        {props.data}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GlanceField;