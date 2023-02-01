import React from "react";
import classes from './GlanceId.module.css';

const GlanceId = (props) => {
    return (
        <div className={[classes.GlanceIdWrapper, classes[props.children ? "Inline" : ""]].join(' ')}>
          <span className={classes[props.children ? "PrefixContent" : ""]}>{props.children}</span>
          <span className={classes.GlanceIdInner}>{props.value}</span>
        </div>
    )
  }

export default GlanceId;