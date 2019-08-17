import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import { Button } from 'antd';



function Home() {
    return (
        <div id='main_home'>
            <div id='title_container'>
                <div>

                    <h1 id='title_txt'>
                        Software Engineer
            </h1>
                </div>
                <div>
                    <p className='title-txt'>
                        Hi, my name is Muhammad Mohsin Sheraz and i'm self-taught developer from Pakistan. This blog will be used
                        to track my progress as i continue my career and grow.
                    </p>
                </div>
                <div className='btn-container'>
                    <Button type="link" className='blog-btn' >
                                <Link to='/about'>Read More >></Link>
                                </Button>

                </div>
            </div>
            <div className='containers'>
                <div >
                    <h1>
                        Latest Posts
                    </h1>

                </div>
                <div>
                    <table className='tbl_blog'>
                        <tr>
                            <td className='heading'>
                                Websit Rdesign v2
                            </td>
                            <td className='date'>
                                <h3>Nov 22,2019</h3>
                            </td>
                        </tr>

                        <tr>
                            <td className='heading'>
                                Understanding hoisting in JavaScript
                            </td>
                            <td className='date'>
                                <h3>Mar 23, 2018</h3>
                            </td>

                        </tr>

                        <tr>
                            <td className='heading'>
                                Deploy Your React App To Heroku
    
                            </td>
                            <td className='date'>
                                <h3>Mar 23, 2018</h3>
                            </td>
                        </tr>

                        <tr>
                            <td className='heading'>
                                Understanding hoisting in JavaScript
    
                            </td>
                            <td className='date'>
                                <h3>Mar 23, 2018</h3>
                            </td>

                        </tr>

                    </table>

                </div>
                <div className='btn-container'>
                    <Button type="link" className='blog-btn' >
                                <Link to='/blog'>View All >></Link>
                                </Button>

                </div>


            </div>
            <div className='containers'>
                <div >
                    <h1>
                        Latest Projects
                    </h1>
                </div>
                <div className='fyp'>
                    <table className='tbl_fyp'>
                        <tr>
                            <td className='heading'>
                                 Final Year Project Management System
                            
                            </td>
                            <td className='date'>
                            <Button type="link" className='site-btn' >
                                <a href='https://gmdcpms.herokuapp.com' target='_blank'>View Site</a>
                                </Button>
                            </td>
                        </tr>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Home;