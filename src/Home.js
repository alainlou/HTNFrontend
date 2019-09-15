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
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { redBright } from 'ansi-colors';

class Home extends Component {
    constructor(props){
      super(props);

      this.state = {
        homeCallback: props.homeCallback,
        characterName: "",
        confirmation: {
            url: red,
        },
      }
    }

    chooseCharacter = (characterName) => {
        console.log(characterName)
        this.setState({confirmation: characterName})
    }

    requestVideo = (keyword) => {
        console.log(keyword)
        Axios.get("https://htnbackend.appspot.com/search", {
            params: {
              searchWord: keyword
            }})
            .then(response => {
              console.log(response)
              this.setState({videoUrl: response.data});
            });
      }

    returnCharacters = (characters) => {
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
                            onClick={() => (this.chooseCharacter(item), this.setState({characterName: item.name}))}
                            bodyStyle={{padding: '3px', textAlign: 'center', color: 'white', backgroundColor: 'black'}}
                            >
                            {item.name}
                        </Card>
                    </Col>
                );
            })
        );
    }

    renderButton = () => {
        const { confirmation } = this.state;
        if (confirmation){
            return (
                <Button style={{float: 'right', top: '44px'}} type='primary' size='large'> Confirm Character </Button>  
            );
        } 
        else {
            return;
        }
    }

    render(){
        const { confirmation } = this.state;
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
                                {confirmation.name ? <Button onClick={() => this.state.homeCallback(this.state.characterName)} style={{float: 'right', top: '44px'}} type='primary' size='large'> Confirm Character </Button> : null}
                            <Link onClick={this.state.homeCallback(() => this.state.characterName)} to='/app'>button</Link>
                            </div>
                            <div className='parent'>
                                <img className='child' src={confirmation.url} />
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