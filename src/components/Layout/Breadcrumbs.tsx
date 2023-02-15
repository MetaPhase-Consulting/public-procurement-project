import * as React from 'react';
import classes from './Breadcrumbs.module.css';
import {Breadcrumb, BreadcrumbBar, BreadcrumbLink} from "@trussworks/react-uswds";

interface Props {
  items?: object;
  classes?: string;
}

const Breadcrumbs: React.FC<Props> = props => {

  const items = props.items ? props.items : [];

    return (
      <div id="breadcrumb__wrapper">
          <BreadcrumbBar className={props.classes}>
          {items && items.map((item) => {
            return (
              <Breadcrumb>
                {item.link
                  ? <BreadcrumbLink href={item.link}>{item.label}</BreadcrumbLink>
                  : <>{item.label}</>
                }
              </Breadcrumb>
            )
          })}
          </BreadcrumbBar>
      </div>
    );
}

export default Breadcrumbs;