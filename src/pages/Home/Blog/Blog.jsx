import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <h2 className='text-3xl text-center text-teal-400 font-bold font-montserrat my-16'>My Latest Blogs</h2>
            <h2 className='text-5xl text-slate-500 text-center'>Coming Soon...</h2>
            <div className='text-center mt-8'>
                <Link to="/blog"><button className='btn btn-primary border-none btn-sm text-white bg-teal-600'>More Blog</button></Link>
            </div>
        </div>
    );
};

export default Blog;