import Axios from 'axios'
import React, { Component } from 'react';
import { Button, Col, Row, Card } from 'antd'; 
import 'antd/dist/antd.css';
import './home.css'
import bennet from './media/bennet.jpg';
import biden from './media/biden.png';
import booker from './media/booker.jpg';
import buttgieg from './media/buttgieg.jpeg';
import clinton from './media/hillary.jpg';
import trump from './media/donaldtrump.jpg';
import sanders from './media/sanders.jpg';
import red from './media/red.png'
import blue from './media/blue.png'
import melee from './media/melee.mp3'
import { redBright } from 'ansi-colors';

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
                <audio src='./media/melee.mp3'></audio>
                <div className="main"> 
                    <header className="navigation">
                    <h2> Super Smash Bros USA</h2>
                    <div className='alignRight'>
                    </div>
                    </header>
                    <div className="body">
                        <section className="select-screen">
                            <div className="characters">
                                {this.returnCharacters(characters)}
                                    <audio style={{margin: '32px 0px'}} controls>
                                        <source src={melee} type="audio/mpeg"/>
                                    </audio>
                                    <Button style={{float: 'right', top: '44px'}} type='primary' size='large' href="/app"> Confirm Character </Button>    
                            </div>
                            <div className='parent'>
                                <img className='child' src={red} />
                                <img className='child' src={blue} />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;