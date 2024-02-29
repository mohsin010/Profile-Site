import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import { Space, Table, Tag, Button } from 'antd';


// Table data
const columns = [
    {
        title: 'Project Type',
        dataIndex: 'type',
        key: 'type',
        render: (text) => <p>{text}</p>,
    },
    {
        title: 'Project Title',
        dataIndex: 'title',
        key: 'title',
    }
];
const data = [
    {
        type: 'Research',
        title: 'Blockchain Backed Tokenization of Personal Identifiable Information of Medical Image Data Using OpenCV',
    },
    {
        type: 'Research',
        title: 'Development of Medical Data Sharing and Analysis System based on ML and Blockchain Technology',
    },
    {
        type: 'Industry',
        title: 'Aapki Dokan - Online Marketplace for Grocery Shopping',
    },
    {
        type: 'Industry',
        title: 'Smart Learners - Online Education Platform ',
    },
    {
        type: 'Industry',
        title: 'Zacarta - Pre Pickup Order Placement Service for a Store Chain',
    }
];

class Home extends React.Component {
    render() {
        return (
            <div id='main_home'>
                <div id='title_container'>
                    <div>
                        <h1 id='title_txt' className='theme_color'>
                            Software Engineer
                        </h1>
                    </div>
                    <div>
                        <p className='title-txt text-dec'>
                            Hi, i am Muhammad Mohsan Sheeraz based in Australia. i am self-taught developer from Pakistan. This blog will be used
                            to track my progress as i continue my career and grow.
                        </p>
                    </div>
                    <div className='btn-container'>
                        <Button type="link" className='blog-btn' >
                            <Link to='/about'>Read More </Link>
                        </Button>

                    </div>
                </div>
                {/* <div className='containers'>
                    <div >
                        <h1>
                            Popular Posts
                        </h1>

                    </div>
                    <div className='blog_div'>
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
                            <Link to='/blog'>View All </Link>
                        </Button>

                    </div>


                </div> */}
                <div className='containers'>
                    <div >
                        <h1 className='theme_color'>
                            Latest Projects
                        </h1>
                    </div>
                    <div className='fyp'>
                        <Table columns={columns} dataSource={data} />
                        {/* <table className='tbl_fyp'>
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
                        </table> */}
                    </div>

                </div>
            </div>

        )
    }
}

export default Home;