import React, { useState } from 'react';
import './about.css';
import pp from '../../data/0.jpg';

const development = ['Blockchain & Digital Currencies,', 'Smart Contracts,', 'Asset Digitization,', 'Machine Learning,', 'Deep Learning,', 'Web3 Tools & APIs'];
const blockchains = ['Ethereum,', 'Hyperledger Fabric,', 'Solana,', 'Polygon'];
const languages = ['Javascript,', 'Python,', 'Solidity,', 'Go,', 'C++,', 'Nodejs,', 'Expressjs,', 'Reactjs,', 'React-Native,', 'Tensorflow,', 'Sklearn,', 'Keras,', 'NumPy,', 'SciPy,', 'MongoDB,', 'MySql,', 'Linux,', 'Windows'];
const clouds = ['AWS,', 'Azure,', 'Google Cloud,', 'Digital Ocean,', 'Heroku,', 'NFT Storage,', 'IPFS,'];
const others = ['Project Management,', 'Code Test Automation,', 'Google Analytics,'];
const interests = ['Blockchain,', "Metaverse,", "IoT,", 'Supply chain,', 'Smart Agriculture']

function About() {
    const [develomentArr, setMyArray] = useState(['Blockchain & Digital Currencies', 'Smart Contracts', 'Asset Digitization', 'Machine Learning', 'Deep Learning', 'Web3 Tools & APIs']);
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
                        Researcher, Blockchain Developer, Web3 API Developer 🚀
                    </p>
                </div>
                <div>
                    <p>
                        Hey there! I'm Muhammad Mohsan Sheeraz, a self-taught developer living in Australia. I love learning new things, especially when it comes to technology! <br />

                        I'm using this blog to keep track of my journey as I build my career in technology. Right now, I'm studying for my PhD at Charles Sturt University, following Masters at Inje University in South Korea.

                        I enjoy solving real-world problems with coding. It's my passion! I'm always looking for ways to learn and grow in the world of computers and technology.<br />

                        When I'm not coding, I like to explore the outdoors, travel, play badminton, and make new friends. I also care about the environment and love planting trees.

                        Come along with me on this exciting adventure, where every challenge is a chance to learn and grow! 🌴. <br />
                        <br />
                        <span className='my_message'>"Let's spread kindness and love wherever we go. Life is too short to waste on spreading hate and negativity. Together, let's make the world a brighter and happier place for everyone" ♥️</span>

                    </p>
                </div>
            </div>
            <div className='main_skills'>
                <div className='Title_container_ab'>
                    <h1>
                        Skills
                    </h1>
                </div>
                {/* <div>
                    <h2 className='h2-'>Computer</h2>
                    <p>Dell Latitude 6225</p>
                </div> */}
                <div className='details_skill'>
                    <h2 className='h2-'>
                        Development 👨🏾‍💻
                    </h2>
                    <p>
                        <ul className='change_style'>
                            {development.map(item => {
                                return <li key={item}>{item}</li>
                            })}
                        </ul>
                    </p>
                </div>

                <div className='details_skill'>
                    <h2 className='h2-'>
                        Blockchains
                    </h2>
                    <p>
                        <ul className='change_style'>
                            {blockchains.map(item => {
                                return <li key={item}>{item}</li>
                            })}
                        </ul>
                    </p>
                </div>

                <div className='details_skill'>
                    <h2 className='h2-'>
                        Programming Languages, Libraries & OS
                    </h2>
                    <p>
                        <ul className='change_style'>
                            {languages.map(item => {
                                return <li key={item}>{item}</li>
                            })}
                        </ul>
                    </p>
                </div>

                <div className='details_skill'>
                    <h2 className='h2-'>
                        Clouds
                    </h2>
                    <p>
                        <ul className='change_style'>
                            {clouds.map(item => {
                                return <li key={item}>{item}</li>
                            })}
                        </ul>
                    </p>
                </div>

                <div className='details_skill'>
                    <h2 className='h2-'>
                        Other Skills
                    </h2>
                    <p>
                        <ul className='change_style'>
                            {others.map(item => {
                                return <li key={item}>{item}</li>
                            })}
                        </ul>
                    </p>
                </div>


                <div className='Title_container_ab'>
                    <h1>
                        Interests
                    </h1>
                </div>
                <div>
                    <p>
                        <ul className='change_style'>
                            {interests.map(item => {
                                return <li key={item}>{item}</li>
                            })}
                        </ul>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default About;