import * as React from 'react';

interface Props {
    dark?: boolean;
}

const Header: React.FC<Props> = (props) => {

    const dosHeaderLogo = {
        backgroundImage: props.dark ?
            'url(\'https://www.state.gov/wp-content/themes/state/images/logos/Logo_White_XL.png\')' :
            'url(\'https://www.state.gov/wp-content/themes/state/images/logos/Logo_Navy_XL.png\')',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <>
            <header id="masthead" className={['site-header nav__main-header', props.dark ? 'dark' : ''].join(' ')}>
                <div className="nav__utility-wrapper">
                    <div className="nav__utility-content">
                        <nav className="site-nav site-nav--utility nav__wrapper nav__utility">
                            <ul id="menu-utility-menu" className="nav__utility-items">
                                <li
                                    id="menu-item-7457"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7457"
                                >
                                    <a href="https://www.state.gov/newsroom/">Newsroom</a>
                                </li>
                                <li
                                    id="menu-item-7458"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7458"
                                >
                                    <a href="https://www.state.gov/business/">Business</a>
                                </li>
                                <li
                                    id="menu-item-7459"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7459"
                                >
                                    <a href="https://www.state.gov/employees/">Employees</a>
                                </li>
                                <li
                                    id="menu-item-223980"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-223980"
                                >
                                    <a href="https://www.state.gov/job-seekers/">Job Seekers</a>
                                </li>
                                <li
                                    id="menu-item-7461"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7461"
                                >
                                    <a href="https://www.state.gov/students/">Students</a>
                                </li>
                                <li
                                    id="menu-item-7462"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7462"
                                >
                                    <a href="https://www.state.gov/travelers/">Travelers</a>
                                </li>
                                <li
                                    id="menu-item-219296"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-219296"
                                >
                                    <a href="https://www.state.gov/visas/">Visas</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="social_links_header">
                            <section
                                className="module module--front-page-social-media front-page-social-media"
                                aria-label="Social Media"
                                role="group"
                            >
                                <div className="frame">
                                    <a
                                        href="https://www.facebook.com/statedept"
                                        className="icon fab fa-facebook-f"
                                        target="_blank"
                                        aria-label="State Department on Facebook"
                                        rel="noreferrer"
                                    >
                                        <span className="screen-reader-text">Facebook</span>
                                    </a>
                                    <a
                                        href="https://twitter.com/StateDept"
                                        className="icon fab fa-twitter"
                                        target="_blank"
                                        aria-label="State Department on Twitter"
                                        rel="noreferrer"
                                    >
                                        <span className="screen-reader-text">Twitter</span>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/statedept/"
                                        className="icon fab fa-instagram"
                                        target="_blank"
                                        aria-label="State Department on Instagram"
                                        rel="noreferrer"
                                    >
                                        <span className="screen-reader-text">Instagram</span>
                                    </a>
                                    <a
                                        href="https://www.youtube.com/user/statevideo"
                                        className="icon fab fa-youtube"
                                        target="_blank"
                                        aria-label="State Department on YouTube"
                                        rel="noreferrer"
                                    >
                                        <span className="screen-reader-text">YouTube</span>
                                    </a>
                                    <a
                                        href="https://www.flickr.com/photos/statephotos/"
                                        className="icon fab fa-flickr"
                                        target="_blank"
                                        aria-label="State Department on Flickr"
                                        rel="noreferrer"
                                    >
                                        <span className="screen-reader-text">Flickr</span>
                                    </a>
                                    <a
                                        href="https://www.state.gov/department-email-updates/"
                                        className="icon fas fa-envelope"
                                        target="_blank"
                                        aria-label="State Department on GovDelivery"
                                        rel="noreferrer"
                                    >
                                        <span className="screen-reader-text">GovDelivery</span>
                                    </a>
                                </div>
                            </section>
                        </div>
                    </div >
                </div >
                <div className={['nav__wrapper nav__second-nav', props.dark ? 'dark' : ''].join(' ')}>
                    <nav className="site-nav site-nav--primary nav__nav">
                        <ul id="nav__primary-nav" className="nav__primary-nav is-fixed">
                            <li className="nav__large-logo-wrapper menu-item menu-item-type-post_type menu-item-object-page menu-item-home">
                                <a href="https://www.state.gov/">
                                    <div className="nav__large-logo-img" style={dosHeaderLogo}>
                                        <span className="screen-reader-text">State Department Home</span>
                                    </div>
                                </a>
                            </li>
                            <li
                                className="menu-item menu-item-type-custom menu-item-object-custom has-children"
                                role="navigation"
                                aria-label="Primary Navigation"
                            >
                                <a href="https://www.state.gov/policy-issues/">Policy Issues</a>
                            </li>
                            <li
                                className="menu-item menu-item-type-custom menu-item-object-custom has-children js-chosen-trigger"
                                role="navigation"
                                aria-label="Primary Navigation"
                            >
                                <a href="https://www.state.gov/countries-and-areas-list/">Countries &amp; Areas</a>
                            </li>
                            <li
                                className="menu-item menu-item-type-custom menu-item-object-custom has-children"
                                role="navigation"
                                aria-label="Primary Navigation"
                            >
                                <a href="https://www.state.gov/bureaus-and-offices-list/">Bureaus &amp; Offices</a>
                            </li>
                            <li
                                className="menu-item menu-item-type-custom menu-item-object-custom has-children"
                                role="navigation"
                                aria-label="Primary Navigation"
                            >
                                <a href="https://www.state.gov/about/">About</a>
                            </li>
                        </ul>
                    </nav>
                    <ul className="nav__header-buttons">
                        <li>
                            <a
                                href="https://findit.state.gov/search?&affiliate=dos_stategov"
                                className="nav__search-trigger"
                                type="button"
                                role="button"
                            />
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}

export default Header;