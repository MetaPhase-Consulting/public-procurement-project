import React from "react";
import classes from './RequirementTag.module.css';

const RequirementTag = (props) => {
    return (
        <div className={[classes.RequirementTagWrapper, classes[props.value ? props.value : "Default"]].join(' ')}>
          <span className={classes.RequirementTagInner}>{props.value}</span>
        </div>
    )
  }

export default RequirementTag;