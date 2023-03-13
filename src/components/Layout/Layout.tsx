import React from 'react';
import Head from 'next/head';
import { GovBanner } from '@trussworks/react-uswds';

import Footer from './Footer';
import Header from './Header';

interface Props {
    children: React.ReactNode;
    title?: string;
    darkHeader?: boolean;
    className?: string;
}

/**
 * **Layout**
 * 
 * Page wrapper for components in `src/pages` that standardizes the general framework and structure
 * of each page. It includes an HTML head where the title can be customized, the standard header,
 * and the standard footer.
 */
const Layout: React.FC<Props> = props => {
    const { children, title, className } = props;

    // Ensure minimum height of body is the full window height minus the header and footer
    return (
        <>
            <Head>
                <title>{title ?? 'Procurement Forecast Tool'}</title>
            </Head>
            <main>
                <GovBanner />
                <Header dark={props.darkHeader}/>
                <div style={{ minHeight: 'calc(100vh - 500px)', height: '100%' }} className={className + ' w-full'}>
                    {children}
                </div>
                <Footer />
            </main>
        </>
    );
}

export default Layout;