import React from 'react';
import classes from './SubNavigation.module.css';

interface Props {
    light?: boolean;
    selected?: string;
    addMargin?: boolean;
}

const SubNavigation: React.FC<Props> = props => {

    const items = [{
        label: 'Forecast Home',
        path: '/'
    }, {
        label: 'Browse Opportunities',
        path: '/forecast'
    }, {
        label: 'Announcements',
        path: '#'
    }, {
        label: 'Frequently Asked Questions',
        path: '#'
    }];

    return (
        <>
            <section className={['module module--page-subnavigation page-subnavigation', props.addMargin ? classes.AddMargin : ''].join(' ')} data-component="pagesubnav">
                <nav className="page-subnavigation__menu frame">
                    <ul id="menu-bureau-of-intelligence-and-research" className="menu">
                        {items && items.map((item, index) => {
                            return (
                                <li key={item.label + ' ' + index} id={item.label + ' ' + index} className={['menu-item menu-item-type-post_type menu-item-object-state_bureau', item.label == props.selected ? 'current-menu-item' : ''].join(' ')}>
                                    <a href={item.path} aria-current="page">
                                        {item.label}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </section>
        </>
    );
}

export default SubNavigation;