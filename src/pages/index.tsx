import React from 'react';
import Link from 'next/link';
import { type NextPage } from 'next';

import { GridContainer, Grid, Breadcrumb, BreadcrumbBar, BreadcrumbLink } from '@trussworks/react-uswds';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/Layout/Layout';
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
            <FontAwesomeIcon icon={faStar} className={classes.Star} />
            <FontAwesomeIcon icon={faStar} className={classes.Star} />
            <FontAwesomeIcon icon={faStar} className={classes.Star} />
        </div>
    )

    return (
        <Layout>
            {/* <SubNavigation selected='Forecast Home' /> */}
            <div className={classes.HomeHeader}>
                <div className='container m-auto flex flex-col'>
                    <BreadcrumbBar className="pt-0 pb-4 bg-transparent text-white text-sm">
                        <Breadcrumb>
                            <BreadcrumbLink href="/" className='text-white'>Home</BreadcrumbLink>
                        </Breadcrumb>
                        <Breadcrumb>Forecast Tool Home</Breadcrumb>
                    </BreadcrumbBar>
                    <h1 className='text-4xl'>
                        Procurement Forecast Tool
                    </h1>
                </div>
            </div>
            <div className='container m-auto flex flex-col items-center justify-center gap-12 px-4 py-16'>
                <GridContainer className="max-w-none p-1">
                    <Grid row gap="lg">
                        <Grid tablet={{ col: 12 }} desktop={{ col: 8 }} className='pb-20'>
                            <div className={classes.HighlightTitle}>
                                This is the Introduction Text
                            </div>
                            <div>
                                {longText}
                            </div>
                        </Grid>
                        <Grid tablet={{ col: 12 }} desktop={{ col: 4 }} className='pb-20 m-auto'>
                            <Link className={classes.BrowseCTA} href='/forecast'>
                                <div className={classes.BrowseCTACircle} />
                                Browse Opportunities
                            </Link>
                        </Grid>
                        <Grid tablet={{ col: 12 }} desktop={{ col: 6 }} className='pb-20'>
                            <div>
                                <div className='flex flex-col border-b  border-gray-300'>
                                    {starAdornment}
                                    <span className={classes.AnnouncementHeading}>
                                        Announcements
                                    </span>
                                </div>
                                <div className={classes.AnnouncementSection}>
                                    {announcements.map((o, i) => {
                                        return (
                                            <div key={i} className={classes.AnnouncementItem}>
                                                <span className={classes.AnnouncementDate}>
                                                    ——  November 3, 2022
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
                        <Grid tablet={{ col: 12 }} desktop={{ col: 6 }} className='pb-20'>
                            <div>
                                <div className='flex flex-col items-center'>
                                    {starAdornment}
                                    <span className={classes.FeaturedHeading}>
                                        Featured Opportunities
                                    </span>
                                    <div className={classes.FeaturedDivider} />
                                </div>
                                <div className={classes.FeaturedSection}>
                                    {announcements.map((o, i) => {
                                        return (
                                            <div key={i} className={classes.FeaturedItem}>
                                                <span className={classes.FeaturedDate}>
                                                    November 3, 2022
                                                </span>
                                                <span className={classes.FeaturedTitle}>
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
                                    Assistant Job Title
                                </span>
                                <span className={classes.HighlightAuthor}>
                                    John Smith
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
