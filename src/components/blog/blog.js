import React from 'react';
// import {   } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

class Blog extends React.Component {
    render() {
        return (
            <div>
                <div className='Title_container_ab , first_lines'>
                    <h1 >
                        Blog is under Development
                    </h1>
                </div>
                <div className='Title_container_ab , first_lines'>
                    <h1>
                        <LoadingOutlined />
                    </h1>
                </div>
            </div>
        )
    }
}

export default Blog;

