import React from 'react';

import type { Forecast } from '../../../../utils/types';
import { convertNumber, convertDuration, convertQuarter, convertDate } from '../../../../utils/utils';

import GlanceId from '../GlanceId/GlanceId';
import GlanceField from '../GlanceField/GlanceField';
import LabelValue from '../LabelValue/LabelValue';
import RequirementTag from '../RequirementTag/RequirementTag';
import classes from './ListingCard.module.css';

interface Props {
    data: Forecast;
}

const ListingCard: React.FC<Props> = (props) => {

    const { data } = props;

    const updated = data.updated ? convertDate(data.updated, true) : '';

    const truncateTitle = (title?: string | null) => {
        if (title) {
            if (title.length > 150) {
                return title.substring(0, 100) + '...';
            }
            return title
        }
        return 'No Title';
    }

    return (
        <div className={classes.ListingCard}>
            <div className={classes.ListingCardInner}>
                <div className={classes.ListingCardHeader}>
                    <GlanceId value={convertNumber(data.number)} />
                    <div className={classes.Title}>
                        <a href={'/forecast/' + convertNumber(data.number)} title={data.requirement_description ? data.requirement_description : ''}>
                            {truncateTitle(data.requirement_description)}
                        </a>
                    </div>
                    <RequirementTag value={data.new_requirement ?? ''} />
                </div>
                <div className={classes.ListingCardContentWrapper}>
                    <div className={classes.ListingCardLeft}>
                        <div className={classes.TopGridWrapper}>
                            <div className={classes.TopGridLeft}>
                                <LabelValue inline label="Office Symbol" value={data.office_symbol ?? ''} />
                                <LabelValue inline label="Past Competition" value={data.past_competition ?? ''} />
                            </div>
                            <div className={classes.TopGridright}>
                                <LabelValue inline label="Estimated Value" value={data.estimated_value ?? ''} />
                                <LabelValue inline label="Place of Performance" value={data.place_of_performance ?? ''} />
                            </div>
                        </div>
                        <div className={classes.BottomGridWrapper}>
                            <LabelValue inline label="Past Set-Aside" value={data.past_set_aside ?? ''} />
                            <LabelValue inline label="Contract Vehicle" value={data.contract_vehicle ?? 'N/A'} />
                            <LabelValue inline label="NAICS Codes" value={data.naics_code ?? ''} />
                        </div>
                    </div>
                    <div className={classes.ListingCardRight}>
                        <GlanceField inline label="Fiscal Year" data={data.fiscal_year ?? ''} />
                        <GlanceField inline label="Target Award Quarter" data={convertQuarter(data.target_award_quarter)} labelWide />
                        <GlanceField inline label="Length of Performance" data={convertDuration(data.length_of_performance) ?? ''} labelWide dataWide />
                        {/*<GlanceField inline label="Security Clearance" data={data.security_clearance} labelWide dataWide />*/}
                    </div>
                </div>
            </div>
            {updated && <div className={classes.ListingCardFooter}>
                <div className={classes.Updated}>
                    <>Record updated {updated}</>
                </div>
            </div>}
        </div>
    )
}

export default ListingCard;