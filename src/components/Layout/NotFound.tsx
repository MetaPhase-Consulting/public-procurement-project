import React from 'react';

const NotFound: React.FC = () => {
    return (
        <div className='flex flex-col justify-center items-center h-full p-28'>
            <span className='text-5xl pb-6'>
                404
            </span>
            <span className='text-4xl'>
                Page Not Found
            </span>
        </div>
    );
}

export default NotFound;