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
            <Layout title="Forecast Opportunity Name">
                <div className="container m-auto px-3 py-6">
                    <BreadcrumbBar className="py-2">
                        <Breadcrumb>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </Breadcrumb>
                        <Breadcrumb>
                            <BreadcrumbLink href="/forecast">Browse Opportunities</BreadcrumbLink>
                        </Breadcrumb>
                        <Breadcrumb>{data.number}</Breadcrumb>
                    </BreadcrumbBar>
                    <h1 className="sm:text-[2rem] pb-8">
                        {data.requirement_description}
                    </h1>
                    <div>
                        <div className='flex flex-row'>
                            <GlanceId
                                value={<>
                                    <RequirementTag value={data.new_requirement ?? ''} />
                                    # {convertNumber(data.number)}
                                </>}
                            />
                            <GlanceField inline label="Fiscal Year" data={data.fiscal_year ?? ''} />
                            <GlanceField inline label="Target Award Quarter" data={convertQuarter(data.target_award_quarter)} labelWide />
                            <GlanceField inline label="Length of Performance" data={convertDuration(data.length_of_performance) ?? ''} labelWide dataWide />
                        </div>
                        <div className='border-black border-t border-b'>
                            {updated &&
                                <div>
                                    <span>Record updated {updated}</span>
                                </div>
                            }
                        </div>
                        <div className='flex flex-row'>
                            <div>
                                {data.long_description ?? longText}
                            </div>
                            <div>
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
            </Layout>
        );
    } else {
        return <div />;
    }
};

export default Forecast;
