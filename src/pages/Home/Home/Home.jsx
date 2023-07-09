import React from 'react';
import Banner from '../Banner/Banner';
import Provide from '../Provide/Provide';
import Projects from '../Projects/Projects';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Provide></Provide>
            <Projects></Projects>
            <Blog></Blog>
            <Contact></Contact>
        </div>
    );
};

export default Home;