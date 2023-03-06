import * as React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <>
            <footer className={['site-footer footer'].join(' ')}>
                < div className="footer__content frame" >
                    <div className="footer__primary-wrapper">
                        <div className="footer__logo">
                            <a className="footer__logo-image" title="United States Department of State" href="https://www.state.gov">
                            </a>
                        </div>
                        <div className="footer__primary">
                            <div className="menu-footer-primary-navigation-container">
                                <ul id="menu-footer-primary-navigation" className="menu">
                                    <li id="menu-item-15994"
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-15994">
                                        <a href="https://www.whitehouse.gov/">
                                            White House
                                        </a>
                                    </li>
                                    <li id="menu-item-15995"
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-15995">
                                        <a href="https://www.usa.gov/">
                                            USA.gov
                                        </a>
                                    </li>
                                    <li id="menu-item-15996"
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-15996">
                                        <a href="https://www.stateoig.gov/">
                                            Office of the Inspector General
                                        </a>
                                    </li>
                                    <li id="menu-item-67737"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-67737">
                                        <a href="https://www.state.gov/u-s-department-of-state-archive-websites/">
                                            Archives
                                        </a>
                                    </li>
                                    <li id="menu-item-15998"
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-15998">
                                        <a href="https://register.state.gov/contactus/contactusform">
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer__aux">
                        <div className="social_links_footer">
                            <span className="followus">
                                follow us
                            </span>
                            <section className="module module--front-page-social-media front-page-social-media"
                                aria-label="Social Media" role="group">
                                <div className="frame">
                                    <Link
                                        href="https://www.facebook.com/statedept"
                                        className="icon fab fa-facebook-f"
                                        target="_blank"
                                        aria-label="State Department on Facebook"
                                    >
                                        <span className="screen-reader-text">
                                            Facebook
                                        </span>
                                    </Link>
                                    <Link
                                        href="https://twitter.com/StateDept"
                                        className="icon fab fa-twitter"
                                        target="_blank"
                                        aria-label="State Department on Twitter"
                                    >
                                        <span className="screen-reader-text">
                                            Twitter
                                        </span>
                                    </Link>
                                    <Link
                                        href="https://www.instagram.com/statedept/"
                                        className="icon fab fa-instagram"
                                        target="_blank"
                                        aria-label="State Department on Instagram"
                                    >
                                        <span className="screen-reader-text">
                                            Instagram
                                        </span>
                                    </Link>
                                    <Link
                                        href="https://www.youtube.com/user/statevideo"
                                        className="icon fab fa-youtube"
                                        target="_blank"
                                        aria-label="State Department on YouTube"
                                    >
                                        <span className="screen-reader-text">
                                            YouTube
                                        </span>
                                    </Link>
                                    <Link
                                        href="https://www.flickr.com/photos/statephotos/"
                                        className="icon fab fa-flickr"
                                        target="_blank"
                                        aria-label="State Department on Flickr"
                                    >
                                        <span className="screen-reader-text">
                                            Flickr
                                        </span>
                                    </Link>
                                    <Link
                                        href="https://www.state.gov/department-email-updates/"
                                        className="icon fas fa-envelope"
                                        target="_blank"
                                        aria-label="State Department on GovDelivery"
                                    >
                                        <span className="screen-reader-text">
                                            GovDelivery
                                        </span>
                                    </Link>
                                </div>
                            </section>
                        </div>
                        <div className="menu-footer-auxiliary-navigation-container">
                            <ul id="menu-footer-auxiliary-navigation" className="menu">
                                <li id="menu-item-54473"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-54473">
                                    <a href="https://www.state.gov/privacy-policy/">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li id="menu-item-54474"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-54474">
                                    <a href="https://www.state.gov/section-508-accessibility-statement/">
                                        Accessibility Statement
                                    </a>
                                </li>
                                <li id="menu-item-54475"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-54475">
                                    <a href="https://www.state.gov/copyright-information/">
                                        Copyright Information
                                    </a>
                                </li>
                                <li id="menu-item-16003"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-16003">
                                    <a href="https://foia.state.gov/">
                                        FOIA
                                    </a>
                                </li>
                                <li id="menu-item-54477"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-54477">
                                    <a
                                        href="https://www.state.gov/key-topics-office-of-civil-rights/eeo-no-fear-act-whistleblower-protection-acts/">
                                        No FEAR Act
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer >

        </>
    );
}

export default Footer;