import React from 'react';
import { Link } from 'react-router-dom';

import { Menu } from 'antd';
// import 'antd/dist/antd.css';
import './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import git from '../../data/git.svg';
import linkedin from '../../data/linkedin.svg';
import facebook from '../../data/facebook.svg';
import youtube from '../../data/youtube.svg';
import twitter from '../../data/twitter.svg';





const { SubMenu } = Menu;

class Nav extends React.Component {
    state = {
        current: '',
    };

    handleClick = e => {
        console.log('click ', e);
        if (e != undefined) {
            this.setState({
                current: e.key,
            });
        }else{
            this.setState({
                current: '',
            });
        }

    };

    render() {
        return (
            <div id='main_nav'>
                <div id='home'>
                    {/* <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} >
                        <Menu.Item key="home">
                            <span> */}
                    <Link to='/' className='name_link' onClick={this.handleClick}>
                        <h2 className='home_data'>M Mohsan Sheeraz</h2>
                    </Link>
                    {/* </span>
                        </Menu.Item>
                    </Menu> */}
                </div>
                <div id='menu'>

                    <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                        <Menu.Item key="blog">
                            {/* <Icon type="about" /> */}
                            <span>
                                <Link to='/blog' className='link'>Blog</Link>
                            </span>
                        </Menu.Item>
                        <span>

                        </span>
                        <Menu.Item key="about">
                            {/* <Icon type="about" /> */}
                            <span>
                                <Link to='/about' className='link'>About Me</Link>


                            </span>
                        </Menu.Item>
                        <Menu.Item key="contact">
                            {/* <Icon type="about" /> */}
                            <span>
                                <Link to='/contact' className='link'>Contact</Link>


                            </span>
                        </Menu.Item>
                    </Menu>

                </div>

                <div className='social-icons'>
                    <ul className='icon_list'>
                        <li className='social_links'><a href='https://github.com/mohsin010' target='_blank' ><img className='icon-svg' src={git} /></a></li>
                        <li className='social_links'><a href='https://www.linkedin.com/in/muhammad-mohsan-sheeraz-7a0a09151/' target='_blank' ><img className='icon-svg' src={linkedin} /></a></li>
                        {/* <li className='social_links'><a href='https://twitter.com/sheerry9' target='_blank' ><img className='icon-svg' src={twitter} /></a></li> */}
                        {/* <li className='social_links'><a href='https://www.facebook.com/mohsin.sheeraz.982' target='_blank' ><img className='icon-svg' src={facebook} /></a></li> */}
                        {/* <li className='social_links'><a href='https://www.youtube.com/channel/UCaBX13WocNp65CpJsjkzamg/featured?view_as=subscriber' target='_blank' ><img className='icon-svg' src={youtube} /></a></li> */}
                    </ul>

                </div>
            </div>


        );
    }
}
export default Nav; 
