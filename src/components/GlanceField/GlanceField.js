import React from "react";
import classes from './GlanceField.module.css';

const glanceField = (props) => {

    return (
      <div className={classes.GlanceField}>
        <div className={classes.GlanceFieldInner}>
          <div className={classes.GlanceWrapper}>
            <div className={
              [
                classes.GlanceLabel,
                props.labelWide ? classes.Wide : ""
              ].join(' ')
            }>{props.label}</div>
            <div className={
              [
                classes.GlanceData,
                props.dataWide ? classes.Wide : ""
              ].join(' ')
            }>{props.data}</div>
          </div>
        </div>
      </div>
    )
  }

export default glanceField;