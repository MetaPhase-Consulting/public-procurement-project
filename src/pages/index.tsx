import { type NextPage } from 'next';
import Layout from '../components/Layout/Layout';
import { api } from '../utils/api';

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
    const hello = api.example.hello.useQuery({ text: 'from tRPC' });

    return (
        <Layout>
            <div className='container flex flex-col items-center justify-center gap-12 px-4 py-16'>
                <h1 className='text-7xl font-extrabold text-purple-900 sm:text-[5rem]'>
                    Public Procurement Project
                </h1>
                <p className='text-2xl text-purple-500'>
                    {hello.data ? hello.data.greeting : 'Loading tRPC query...'}
                </p>
            </div>
        </Layout>
    );
};

export default Home;
