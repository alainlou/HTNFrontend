import React, { Component } from 'react';
import { Col, Row, Card } from 'antd'; 
import 'antd/dist/antd.css';
import './home.css'
import bennet from './media/bennet.jpg';
import biden from './media/biden.png';
import booker from './media/booker.jpg';
import buttgieg from './media/buttgieg.jpeg';
import clinton from './media/hillary.jpg';
import trump from './media/donaldtrump.jpg';
import sanders from './media/sanders.jpg';

class Home extends Component {
    returnCharacters = (characters) => {
        return (
            characters.map((item) => {
                return (
                    <Col span={3}>
                        <Card 
                            bordered={false}
                            cover={<img alt="example" src={item.url} style={{height: '100px'}}/>}
                            footer={false}
                            hoverable 
                            bodyStyle={{padding: '10px'}}
                            >
                            {item.name}
                        </Card>
                    </Col>
                );
            })
        );
    }

    render(){
        const characters = [
            {
                name: 'Trump',
                url: trump,
            },
            {
                name: 'Sanders',
                url: sanders,
            },
            {
                name: 'Clinton',
                url: clinton,
            },
            {
                name: 'Buttgieg',
                url: buttgieg,
            },
            {
                name: 'Buttgieg',
                url: clinton,
            },
            {
                name: 'Booker',
                url: booker,
            },
            {
                name: 'Biden',
                url: biden,
            },
            {
                name: 'Bennet',
                url: bennet,
            },
            {
                name: 'Trump',
                url: trump,
            },
            {
                name: 'Sanders',
                url: sanders,
            },
            {
                name: 'Clinton',
                url: clinton,
            },
            {
                name: 'Buttgieg',
                url: buttgieg,
            },
            {
                name: 'Buttgieg',
                url: clinton,
            },
            {
                name: 'Booker',
                url: booker,
            },
            {
                name: 'Biden',
                url: biden,
            },
            {
                name: 'Bennet',
                url: bennet,
            },
        ]

        return(
            <div className="home">
                <div className="main"> 
                    <header className="navigation">

                    </header>
                    <div className="body">
                        {this.returnCharacters(characters)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;