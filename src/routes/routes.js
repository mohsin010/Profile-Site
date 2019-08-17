import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import About from '../components/about/about';
import Nav from '../components/nav/nav';
import Home from '../components/home/home';
import Contact from '../components/contact/contact'
import Blog from '../components/blog/blog';



const CustomRoutes = () =>(
    <Router>
        <Route path='/' component= {Nav} />
        <Route exact path='/' component= {Home} />
        <Route exact path='/about' component= {About} />
        <Route exact path='/contact' component= {Contact} />
        <Route exact path='/blog' component= {Blog} />


    </Router>
)

export default CustomRoutes;
