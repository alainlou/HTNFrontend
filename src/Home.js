import Axios from 'axios'
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
    constructor(){
      super();
      this.state = {
        chosenCharacter: ''
      }
    }
    returnCharacters = (characters) => {

        const chooseCharacter = (characterName) => {
          console.log(characterName)
            this.setState({chosenCharacter: characterName})
        }
        const requestVideo = (keyword) => {
          Axios.get("https://htnbackend.appspot.com/search", {
              params: {
                searchWord: keyword
              }})
              .then(response => {
                console.log(response)
                this.setState({videoUrl: response.data});
              });
        }
        return (
            characters.map((item, index) => {
                return (
                    <Col key={index} span={3}>
                        <Card 
                            className='hover-over'
                            bordered={false}
                            cover={<img alt="example" src={item.url} style={{height: '90px'}}/>}
                            footer={false}
                            hoverable 
                            onClick={() => chooseCharacter(item.name)}
                            bodyStyle={{padding: '3px', textAlign: 'center', color: 'white', backgroundColor: 'black'}}
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
        ]

        return(
            <div className="home">
                <div className="main"> 
                    <header className="navigation">
                    <h2> Super Smash Bros USA</h2>
                    <div className='alignRight'>
                        <a> Projects </a>
                        <a> About </a>
                        <a> Home</a>
                    </div>
                    </header>
                    <div className="body">
                        <section className="select-screen">
                            <div className="characters">
                                {this.returnCharacters(characters)}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;