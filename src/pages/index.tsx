import React from 'react';
import Link from 'next/link';
import { type NextPage } from 'next';

import { GridContainer, Grid, Icon } from '@trussworks/react-uswds';

import { api } from '../utils/api';
import { convertDate, convertNumber } from '../utils/utils';

import Layout from '../components/Layout/Layout';
import PageHeader from '../components/PageHeader/PageHeader';
import SubNavigation from '../components/Layout/SubNavigation';
import classes from '../components/Homepage/Homepage.module.css';

/**
 * **Home**
 * 
 * This is the procurement forecast homepage.
 * - Public users can see a high level overview of the website features
 *   - Purpose/Description
 *   - Announcements
 *   - Featured Opportunities
 *   - Message
 *   - Miscellaneous Informational Pages
 */
const Home: NextPage = () => {
    const longText = (
        <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
    )

    const announcements = [
        'Secretary Antony J. Blinken and Bahamian Foreign Minister Frederick Mitchell Before Their Meeting',
        'Secretary Blinken’s Meeting with Bahamian Foreign Minister Mitchell',
        'Nassau, Bahamas: Lyford Cay International School: 2022-2023 Fact Sheet',
        'Freeport, Bahamas: Lucaya International School: 2022-2023 Fact Sheet',
        'The Bahamas Independence Day'
    ]

    const starAdornment = (
        <div className='flex flex-row -mx-1'>
            <Icon.Star className={classes.Star} />
            <Icon.Star className={classes.Star} />
            <Icon.Star className={classes.Star} />
        </div>
    )

    const { data } = api.homepage.featuredOpportunities.useQuery();

    return (
        <Layout title="Forecast Tool Home" darkHeader>
            <SubNavigation selected='Forecast Home' />
            <PageHeader
                heroType="blue"
                title="Procurement Forecast"
                meta="Office of Small and Disadvantaged Business Utilization"
                breadcrumbs={[
                    { label: 'Home', link: 'https://www.state.gov' },
                    { label: 'Key Topics – Office of Small and Disadvantaged Business Utilization', link: 'https://www.state.gov/key-topics-office-of-small-and-disadvantaged-business-utilization' },
                    { label: 'Procurement Forecast' }
                ]}
            />
            <div className="row mb-24 mt-24">
                <GridContainer className="max-w-none p-1">
                    <Grid row gap="lg">
                        <Grid tablet={{ col: 12 }} desktop={{ col: 5 }} className='pb-20 m-auto'>
                            <Link className={classes.BrowseCTA} href='/forecast'>
                                <div className={classes.BrowseCTACircle}>
                                    <svg id="a" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 119.98 120">
                                        <path d="m56.48,27.86v.02c-2.2-2.2-5.76-2.2-7.94,0-2.18,2.2-2.2,5.76,0,7.94l7.26,7.26h-27.68c-3.12,0-5.62,2.51-5.62,5.62s2.51,5.62,5.62,5.62h27.68l-7.26,7.26c-2.2,2.2-2.2,5.76,0,7.94,2.2,2.18,5.76,2.2,7.94,0l16.87-16.87c2.2-2.2,2.2-5.76,0-7.94l-16.87-16.87Z" fill="#c1a883"/>
                                        <path d="m117.78,107.19l-29.67-29.69c5.88-8.06,9.37-18,9.37-28.75C97.49,21.82,75.67,0,48.74,0S0,21.82,0,48.74s21.82,48.74,48.74,48.74c10.76,0,20.69-3.47,28.75-9.37l29.67,29.69c2.93,2.93,7.69,2.93,10.62,0,2.93-2.93,2.93-7.69,0-10.62Zm-69.03-20.51c-20.97,0-37.96-17-37.96-37.96S27.78,10.75,48.75,10.75s37.96,17,37.96,37.96-17,37.96-37.96,37.96Z" fill="#333333"/>
                                    </svg>
                                </div>

                                <span className={classes.BrowseCTALabel}>Browse Opportunities</span>
                            </Link>
                        </Grid>
                        <Grid tablet={{ col: 12 }} desktop={{ col: 7 }} className='pb-20'>
                            <div className={classes.HighlightTitle}>
                                This is the Introduction Text
                            </div>
                            <div className={classes.IntroMessage}>
                                Public Law 100-656, the Business Opportunity Development Reform Act of 1988, amended the Small Business Act to place new emphasis on acquisition planning.
                                The law requires agencies to compile and make available projections of contracting opportunities small and small disadvantaged firms may be able to perform.
                                <br />
                                <br />
                                In response to this requirement, the Department of State Forecast of Contract Opportunities includes projections of anticipated contract above the simplified acquisition threshold that small businesses, small disadvantaged businesses, women-owned small businesses, HUBZone small businesses, and service-disabled veteran-owned small businesses may be able to perform under direct contracts with the Government, or through subcontracting opportunities.
                                This Department-wide forecast of contract opportunities expands upon individual efforts already implemented at Department of State aimed at enhancing competition in contracting.
                                The forecast consolidates anticipated procurements at various State Department acquisition activities.
                            </div>
                        </Grid>
                        <Grid tablet={{ col: 12 }} desktop={{ col: 7 }} className='pb-20'>
                            <div className={classes.FeaturedSection}>
                                <div className='flex flex-col items-center'>
                                    {starAdornment}
                                    <span className={classes.FeaturedHeading}>
                                        Featured Opportunities
                                    </span>
                                    <div className={classes.FeaturedDivider} />
                                </div>
                                <div className={classes.FeaturedContent}>
                                    {data && data.map((o, i) => {
                                        return (
                                            <Link key={i} className={classes.FeaturedItem} href={'/forecast/' + convertNumber(o.number)}>
                                                <span className={classes.FeaturedDate}>
                                                    {convertDate(o.created)}
                                                </span>
                                                <span className={classes.FeaturedTitle}>
                                                    {o.requirement_description}
                                                </span>
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        </Grid>
                        <Grid tablet={{ col: 12 }} desktop={{ col: 5 }} className='pb-20'>
                            <div className='p-10'>
                                <div className='flex flex-col border-b  border-gray-300'>
                                    {starAdornment}
                                    <span className={classes.AnnouncementHeading}>
                                        Announcements
                                    </span>
                                </div>
                                <div className={classes.AnnouncementContent}>
                                    {announcements.map((o, i) => {
                                        return (
                                            <div key={i} className={classes.AnnouncementItem}>
                                                <span className={classes.AnnouncementDate}>
                                                    —  November 3, 2022
                                                </span>
                                                <span className={classes.AnnouncementTitle}>
                                                    {o}
                                                </span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </Grid>
                        <Grid tablet={{ col: 7 }} desktop={{ col: 8 }}>
                            <div className={classes.HighlightTitle}>
                                Top Level Text to start the message
                                or informational section.
                            </div>
                            <div className={classes.HighlightMessage}>
                                {longText}
                            </div>
                        </Grid>
                        <Grid
                            tablet={{ col: 5 }} desktop={{ col: 4 }}
                            className='flex flex-row border-l border-gray-300 justify-center items-center'
                        >
                            <div className={classes.HighlightPhoto} />
                            <div className='flex flex-col'>
                                <span className={classes.HighlightRole}>
                                    Deputy Assistant Secretary for Acquisition
                                    Senior Procurement Executive
                                </span>
                                <span className={classes.HighlightAuthor}>
                                    Mike Derrios
                                </span>
                            </div>
                        </Grid>
                    </Grid>
                </GridContainer>
            </div>
            <div className={classes.HomeHeader} />
        </Layout>
    );
};

export default Home;
