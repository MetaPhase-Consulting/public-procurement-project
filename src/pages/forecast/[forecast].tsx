import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { type NextPage } from 'next';

import { BreadcrumbBar, Breadcrumb, BreadcrumbLink } from '@trussworks/react-uswds';

import { api } from '../../utils/api';
import { convertNumber, convertDuration, convertQuarter, convertDate } from '../../utils/utils';

import Layout from '../../components/Layout/Layout';
import GlanceField from '../../components/ForecastList/Card/GlanceField/GlanceField';
import GlanceId from '../../components/ForecastList/Card/GlanceId/GlanceId';
import RequirementTag from '../../components/ForecastList/Card/RequirementTag/RequirementTag';
import LabelValue from '../../components/ForecastList/Card/LabelValue/LabelValue';
import SubNavigation from '../../components/Layout/SubNavigation';
import NotFound from '../../components/Layout/NotFound';
import InfoBox from '../../components/ForecastList/Card/InfoBox/InfoBox';

const Forecast: NextPage = () => {

    const { forecast } = useRouter().query;
    const { data } = api.forecast.getByNumber.useQuery({ number: 'DOS-OPP' + forecast });

    const longText = (
        <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            <br /><br />
            Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English.
            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy.
            Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </p>
    )

    if (data) {
        const updated = data.updated ? convertDate(data.updated) : null;
        return (
            <Layout title="Opportunity Detail">
                <SubNavigation selected='Browse Opportunities' addMargin />
                <div className="row ForecastDetail mb-24">
                    <div className="max-w-5xl">
                        <BreadcrumbBar className="py-2">
                            <Breadcrumb>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </Breadcrumb>
                            <Breadcrumb>
                                <BreadcrumbLink href="/forecast">Browse Opportunities</BreadcrumbLink>
                            </Breadcrumb>
                            <Breadcrumb>{data.number}</Breadcrumb>
                        </BreadcrumbBar>
                        <h1 className="featured-content__headline mb-5">
                            {data.requirement_description}
                        </h1>
                        <div className="margin-bottom-5">
                            <i className="ppp-chevron-left" />
                            <Link className="BackToResults pb-15" href="/forecast">
                                Back to Search Results
                            </Link>
                        </div>
                        <div>
                            <div className='flex flex-row items-center gap-10 mb-5'>
                                <GlanceId value={convertNumber(data.number)}>
                                    <RequirementTag value={data.new_requirement ?? ''} />
                                </GlanceId>
                                <GlanceField inline label="Fiscal Year" data={data.fiscal_year ?? ''} noMargin />
                                <GlanceField inline label="Target Award Quarter" data={convertQuarter(data.target_award_quarter)} labelWide noMargin />
                                <GlanceField inline label="Length of Performance" data={convertDuration(data.length_of_performance) ?? ''} labelWide dataWide noMargin />
                            </div>
                            <div className='border-black border-t border-b pb-3 pt-3 mb-10'>
                                {updated &&
                                    <div>
                                        <span className="RecordUpdated">Record updated {updated}</span>
                                    </div>
                                }
                            </div>
                            <div className='flex flex-row space-x-4 gap-20'>
                                <div className="Description max-w-2xl">
                                    {data.long_description ?? longText}
                                </div>
                                <div className="GlanceColumn mb-5 w-full">
                                    <LabelValue label="Estimated Value" value={data.estimated_value ?? ''} />
                                    <LabelValue label="Place of Performance" value={data.place_of_performance ?? ''} />
                                    <LabelValue label="Office Symbol" value={data.office_symbol ?? ''} />
                                    <LabelValue label="Past Competition" value={data.past_competition ?? ''} />
                                    <LabelValue label="Past Set-Aside" value={data.past_set_aside ?? ''} />
                                    <LabelValue label="Contract Vehicle" value={data.contract_vehicle ?? ''} />
                                    <LabelValue label="NAICS Codes" value={data.naics_code ?? ''} />
                                </div>
                            </div>
                            <div className="max-w-screen-md flex space-x-10">
                                <div className="flex-grow">
                                    <InfoBox label="Contact Information">
                                        <LabelValue label="Point of contact name" value={data.poc_name ?? ''} reverse />
                                        <LabelValue label="Point of contact email" value={data.poc_email ?? ''} nomargin reverse />
                                    </InfoBox>
                                </div>
                                <div className="flex-grow">
                                    <InfoBox label="Contract Information">
                                        <LabelValue label="Incumbent Contractor" value={data.incumbent_contractor ?? ''} nomargin reverse />
                                    </InfoBox>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    } else {
        return (
            <Layout title="Forecast Opportunity Name">
                <NotFound />
            </Layout>
        );
    }
};

export default Forecast;
