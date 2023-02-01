import React from "react";
import classes from './ListingCard.module.css';
import LabelValue from '../LabelValue/LabelValue';
import GlanceField from '../GlanceField/GlanceField';
import RequirementTag from "../RequirementTag/RequirementTag";
import GlanceId from "../GlanceId/GlanceId";

const listingCard = (props) => {

  const data = props.data;

    return (
      <div className={classes.ListingCard}>
        <div className={classes.ListingCardInner}>
          <div className={classes.ListingCardHeader}>
            <GlanceId value={data.listing_id} />
            <div className={classes.Title}><a href={data.id}>{data.title}</a></div>
            <RequirementTag value={data.requirement_type} />
          </div>
          <div className={classes.ListingCardContentWrapper}>
            <div className={classes.ListingCardLeft}>
              <div className={classes.TopGridWrapper}>
                <div className={classes.TopGridLeft}>
                  <LabelValue inline label="Office Symbol" value={data.office_symbol}/>
                  <LabelValue inline label="Past Competition" value={data.past_competition}/>
                </div>
                <div className={classes.TopGridright}>
                  <LabelValue inline label="Estimated Value" value={data.estimated_value}/>
                  <LabelValue inline label="Place of Performance" value={data.place_of_performance}/>
                </div>
              </div>
              <div className={classes.BottomGridWrapper}>
                <LabelValue inline label="Past Set-Aside" value={data.past_set_aside}/>
                <LabelValue inline label="Contract Vehicle" value={data.contract_vehicle}/>
                <LabelValue inline label="NAICS Codes" value={data.naics_code}/>
              </div>
            </div>
            <div className={classes.ListingCardRight}>
              <GlanceField inline label="Fiscal Year" data={data.fiscal_year} />
              <GlanceField inline label="Target Award Quarter" data={data.target_award_quarter} labelWide />
              <GlanceField inline label="Length of Performance" data={data.length_of_performance} labelWide dataWide />
              <GlanceField inline label="Security Clearance" data={data.security_clearance} labelWide dataWide />
            </div>
          </div>
        </div>
        <div className={classes.ListingCardFooter}>
          <div className={classes.Updated}>Record updated {data.record_updated}</div>
        </div>
      </div>
    )
  }

export default listingCard;