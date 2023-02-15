import React from 'react';
import classes from './PageHeader.module.css';
import Breadcrumbs from '../../components/Layout/Breadcrumbs';

interface Props {
    children: React.ReactNode;
    title?: string;
    meta?: string;
    breadcrumbs: object;
    heroType: string;
}

const PageHeader: React.FC<Props> = (props) => {


  switch(props.heroType) {
    case 'image':
      return (
        <section className={["module module--bureau-header bureau-header", "hero-type__" + props.heroType].join(" ")}>
          <div className="bureau-header__image"></div>
          <div className="row">
           <Breadcrumbs classes="bg-transparent dark" items={props.breadcrumbs}/>
            <div className="bureau-header__content">
              <h1 className="featured-content__headline mb-10">{props.title}</h1>
            </div>
          </div>
        </section>
      );

    case 'blue':
      return (
        <section className={["module featured-content page-header", "hero-type__" + props.heroType].join(" ")}>
          <div className="row bc_row">
            <Breadcrumbs classes="bg-transparent dark" items={props.breadcrumbs}/>
          </div>

          <div className="row" dir="ltr">
            <div className="featured-content__copy">
              <h1 className="featured-content__headline stars-above">
                {props.title}
              </h1>

              <div className="article-meta">
                {props.meta}
              </div>
              <div className="page-header__actions">
              </div>

            </div>
          </div>
        </section>
      );

    default:
      return (
        <section className="module featured-content page-header">
          <div className="row">
            <Breadcrumbs items={props.breadcrumbs}/>
            <h1 className="featured-content__headline mb-10">
              {props.title}
            </h1>
            {props.children}
          </div>
        </section>
      );
  }
}

export default PageHeader;