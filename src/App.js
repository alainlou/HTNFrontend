import React from 'react';
import ReactPlayer from 'react-player';
import ReactSearchBox from 'react-search-box';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import ScrollBox from './components/ScrollBox';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <SideNav
        onSelect={(selected) => {
          }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
                <NavIcon>
                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    Home
                </NavText>
            </NavItem>
            <NavItem eventKey="charts">
                <NavIcon>
                    <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    Charts
                </NavText>
                <NavItem eventKey="charts/linechart">
                    <NavText>
                        Line Chart
                    </NavText>
                </NavItem>
                <NavItem eventKey="charts/barchart">
                    <NavText>
                        Bar Chart
                    </NavText>
                </NavItem>
            </NavItem>
        </SideNav.Nav>
    </SideNav>
    <div className="wide grey-background">
      <ReactPlayer className="middle-align" url='https://www.youtube.com/watch?v=MCUERO0gYBc' playing />
    </div>
    <div className="flex-container my-3">
      <span className="wide">
        <ReactSearchBox
          placeholder="Enter Keywords Here"
          value="Donald Trump"
          // data={this.data}
          callback={record => console.log(record)}
        />
      </span>      
      <button className="btn btn-primary mx-3">Search!</button>
    </div>
    <div className="flex-container my-3">
      <ScrollBox>
      </ScrollBox>
    </div>
  </div>
  );
}

export default App;
