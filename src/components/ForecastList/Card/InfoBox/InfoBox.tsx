import React from 'react';
import classes from './InfoBox.module.css';

interface Props {
    label: string;
    children: React.ReactNode;
}

const InfoBox: React.FC<Props> = (props) => {
    return (
        <div className={classes.InfoBoxWrapper}>
            <span className={classes.Label}>
                {props.label}
            </span>
            <span className={classes.ContentWrapper}>
                {props.children}
            </span>
        </div>
    )
}

export default InfoBox;


