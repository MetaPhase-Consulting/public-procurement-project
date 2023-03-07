import * as React from 'react';
import { Breadcrumb, BreadcrumbBar, BreadcrumbLink } from '@trussworks/react-uswds';

export type Breadcrumb = {
    label: string,
    link?: string,
}

interface Props {
    items?: Breadcrumb[];
    classes?: string;
}

const Breadcrumbs: React.FC<Props> = props => {

    const items = props.items ? props.items : [];

    return (
        <div id="breadcrumb__wrapper">
            <BreadcrumbBar className={props.classes}>
                {items && items.map((item, index) => {
                    return (
                        <Breadcrumb key={index}>
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