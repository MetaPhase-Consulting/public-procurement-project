import Head from 'next/head';
import * as React from 'react';
import Footer from './Footer';
import Header from './Header';

interface Props {
    children: React.ReactNode;
    title?: string;
}

/**
 * **Layout**
 * 
 * Page wrapper for components in `src/pages` that standardizes the general framework and structure
 * of each page. It includes an HTML head where the title can be customized, the standard header,
 * and the standard footer.
 */
const Layout: React.FC<Props> = props => {
    const { children, title } = props;

    // Ensure minimum height of body is the full window height minus the header and footer
    return (
        <>
            <Head>
                <title>{title ?? 'Procurement Forecast Tool'}</title>
            </Head>
            <main className="flex min-h-screen flex-col items-center">
                <Header />
                <div style={{ minHeight: 'calc(100vh - 72px)' }} className="w-full">
                    {children}
                </div>
                <Footer />
            </main>
        </>
    );
}

export default Layout;