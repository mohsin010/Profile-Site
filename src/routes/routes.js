import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from '../components/about/about';
import Nav from '../components/nav/nav';
import Home from '../components/home/home';
import Contact from '../components/contact/contact'
import Blog from '../components/blog/blog';



const CustomRoutes = () => (
    <Router>
        <Nav />
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/blog' element={<Blog />} />
        </Routes>
    </Router>
)

export default CustomRoutes;
