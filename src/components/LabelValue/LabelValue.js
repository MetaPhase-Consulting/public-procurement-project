import React from "react";
import classes from './LabelValue.module.css';

const labelValue = (props) => {
    return (
        <div className={
              [
              classes.LabelDataWrapper,
                  props.inline ? classes.Inline : ""
              ].join(' ')
        }>
          <span className={classes.Label}>{props.label}</span>
          <span className={classes.Value}>{props.value}</span>
        </div>
    )
  }

export default labelValue;


