import React from 'react';
import { type NextPage } from 'next';
import { BreadcrumbBar, Breadcrumb, BreadcrumbLink } from '@trussworks/react-uswds';
import Layout from '../../components/Layout/Layout';
import { api } from '../../utils/api';
import GlanceField from '../../components/ForecastList/Card/GlanceField/GlanceField';
import GlanceId from '../../components/ForecastList/Card/GlanceId/GlanceId';
import RequirementTag from '../../components/ForecastList/Card/RequirementTag/RequirementTag';
import { convertNumber, convertDuration, convertQuarter, convertDate } from '../../utils/utils';
import LabelValue from '../../components/ForecastList/Card/LabelValue/LabelValue';
import SubNavigation from '../../components/Layout/SubNavigation';

// TODO: Don't let Next use the name of this file as a part of the route, dynamically pull the slug of the forecast object
const Forecast: NextPage = () => {
    const id = 'DOS-OPP0002098';
    const { data } = api.forecast.getByNumber.useQuery({ number: id });

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
                <SubNavigation selected='Browse Opportunities' addMargin/>
                <div className="row ForecastDetail">
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



                      <i className="ppp-chevron-left"></i> <a className="BackToResults pb-15" href="/forecast">Back to Search Results</a>
                    </div>
                    <div>
                        <div className='flex flex-row items-center gap-10 mb-5'>
                            <GlanceId value={convertNumber(data.number)}>
                              <RequirementTag value={data.new_requirement ?? ''} />
                            </GlanceId>
                            <GlanceField inline label="Fiscal Year" data={data.fiscal_year ?? ''} NoMargin />
                            <GlanceField inline label="Target Award Quarter" data={convertQuarter(data.target_award_quarter)} labelWide NoMargin />
                            <GlanceField inline label="Length of Performance" data={convertDuration(data.length_of_performance) ?? ''} labelWide dataWide NoMargin/>
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
                            <div className="GlanceColumn">
                                <LabelValue label="Estimated Value" value={data.estimated_value ?? ''} />
                                <LabelValue label="Place of Performance" value={data.place_of_performance ?? ''} />
                                <LabelValue label="Office Symbol" value={data.office_symbol ?? ''} />
                                <LabelValue label="Past Competition" value={data.past_competition ?? ''} />
                                <LabelValue label="Past Set-Aside" value={data.past_set_aside ?? ''} />
                                <LabelValue label="Contract Vehicle" value={data.contract_vehicle ?? ''} />
                                <LabelValue label="NAICS Codes" value={data.naics_code ?? ''} />
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                  </div>
                </div>
            </Layout>
        );
    } else {
        return <div />;
    }
};

export default Forecast;
