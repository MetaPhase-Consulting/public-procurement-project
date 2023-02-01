import Link from 'next/link';
import * as React from 'react';

interface Props {
    light?: boolean;
}

const Header: React.FC<Props> = props => {
    // TODO: USWDS Banner
    // TODO: Nav Items

    return (
        <div data-testid="header" className="flex flex-col w-full border-b border-solid border-gray-400">
            <div className="bg-gray-500 text-gray-50">
                <div className="container m-auto py-1 flex justify-end">
                    Utility Navigation Menu Items
                </div>
            </div>
            <div className={props.light ? 'bg-gray-200' : 'bg-gray-800 text-gray-100'}>
                <div className="container m-auto py-5">
                    U.S. Department of State
                </div>
            </div>
            <div className="container m-auto py-2">
                <Link href="/" title="Go to Homepage" className="mr-5">
                    Forecast Tool Home
                </Link>
                <Link href="/forecast" title="Browse Forecast Opportunities" className="mr-5">
                    Browse Opportunities
                </Link>
                <Link href="/announcements" title="Browse Forecast Opportunities" className="mr-5">
                    Announcements
                </Link>
                <Link href="/faq" title="Browse Forecast Opportunities">
                    Frequently Asked Questions
                </Link>
            </div>
        </div>
    );
}

export default Header;