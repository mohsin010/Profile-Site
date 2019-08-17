import React from 'react';
import './about.css';
import pp from '../../data/0.jpg';


function About() {
    return (
        <div className='about_main_c'>
            <div className='p-p'>
                {/* <img src={pp} /> */}
            </div>
            <div>
                <div className='Title_container_ab , first_lines' >
                    <h1>
                        About Me
                    </h1>
                </div>
                <div className='first_lines'>
                    <p>
                        Software Engineer 🚀
                    </p>
                </div>
                <div>
                    <p>
                        Hi, my name is Mohammad Mohsin Sheraz and i'm a self tought developer. I'm Graduated from Government College University of Faisalabad, Punjab , Pakistan
                        I linke to build new project in Javascript and C++ and also share what i have learned throughout my career as a developer to other people.
                        Programming is my passion and I love to code. I'm alwayas looking for opportunities in the field of Computer Science and Technology.
                        Outside of Programming I like to travel, hiking, badminton, making new friends, exploring culture of other countries and
                        planting trees 🌴.

                    </p>
                </div>
            </div>
            <div>
                <div className='Title_container_ab'>
                    <h1>
                        Work Flow
                    </h1>
                </div>
                <div>
                    <h2  className='h2-'>Computer</h2>
                    <p>Dell Latitude 6225</p>
                </div>
                <div>
                    <h2 className='h2-'>
                        Technologies 👨🏾‍💻 
                    </h2>
                    <p><ul className='change_style'>
                        <li>
                            C++
                        </li>
                        <li>
                        Paython
                        </li>
                        <li>
                            JavaScript
                        </li>
                        <li>
                            React
                        </li>
                        <li>
                            Redux
                        </li>
                        <li>
                            NodeJs
                        </li>
                        <li>
                            Express
                        </li>
                        <li>
                            MongoDB
                        </li>
                        <li>
                            SQL
                        </li>

                    </ul></p>
                </div>
            </div>
            <div>
                <div>

                    <h2  className='h2-'>
                        Clouds
                </h2>
                    <p>
                        <ul className='change_style'>
                            <li>
                                AWS
                        </li>
                            <li>
                                Heroku
                        </li>
                            <li>
                                Firebase
                        </li>
                            <li>
                                MongoDB Altas
                        </li>
                        </ul>
                    </p>
                </div>

            </div>

            <div>
                <div className='Title_container_ab'>
                    <h1>
                        Interests
                </h1>
                </div>
                <div>

                    <p>
                        <ul className='change_style'>
                            <li>
                                BlockChain
                        </li>
                            <li>
                                Cloud Computing
                        </li>
                            <li>
                                AI
                        </li>
                            <li>
                                Robotic
                        </li>
                            <li>
                                IoT
                        </li>
                            <li>
                                Cyber Security
                            </li>
                            <li>
                                Digital Forensic
                         </li>
                        </ul>
                    </p>
                </div>
                <div>
                    <div className='Title_container_ab'>

                        <h1>
                            Hobbies
                </h1>
                    </div>
                           <div className='hobbies'> 
                        
                    
                        <p>

                        <ul>
                            <li>
                                Learning New Programming Technologies
                    </li>
                            <li>
                                Teaching
                        </li>
                            <li>
                                Hiking
                    </li>
                            <li>
                                Travelling
                    </li>
                            <li>
                                Making New Friends
                        </li>
                            <li>
                                Exploring Culture of other Countries
                    </li>
                            <li>
                                Playing Badminton
                    </li>
                            <li>
                                Planting Trees
                    </li>
                        </ul>
                        </p>

                   
                    </div>

                </div>
            </div>

        </div>
    )
}

export default About;