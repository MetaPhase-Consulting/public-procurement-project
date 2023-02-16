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
            <br /><br />
            Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English.
            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy.
            Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
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
                                <div className={classes.BrowseCTACircle} />
                                Browse Opportunities
                            </Link>
                        </Grid>
                        <Grid tablet={{ col: 12 }} desktop={{ col: 7 }} className='pb-20'>
                            <div className={classes.HighlightTitle}>
                                This is the Introduction Text
                            </div>
                            <div className={classes.IntroMessage}>
                                {longText}
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
                        <Grid tablet={{ col: 7 }} desktop={{ col: 9 }}>
                            <div className={classes.HighlightTitle}>
                                Some Top Level Text to start the message
                                or informational section.
                            </div>
                            <div className={classes.HighlightMessage}>
                                {longText}
                            </div>
                        </Grid>
                        <Grid
                            tablet={{ col: 5 }} desktop={{ col: 3 }}
                            className='flex flex-row border-l border-gray-300 justify-center items-center'
                        >
                            <div className={classes.HighlightPhoto} />
                            <div className='flex flex-col'>
                                <span className={classes.HighlightRole}>
                                    Deputy Assistant Secretary for Acquisition & Senior Procurement Executive at U.S. Department of State
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
