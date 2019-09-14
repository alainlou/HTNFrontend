import React from 'react';
import ReactPlayer from 'react-player';
import ReactSearchBox from 'react-search-box';
import ReactTable from 'react-table';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
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
      <ReactPlayer className="middle" url='https://www.youtube.com/watch?v=MCUERO0gYBc' playing />
    </div>    
    <ReactSearchBox
      placeholder="Search"
      value="Donald Trump"
      // data={this.data}
      callback={record => console.log(record)}
    />
    <ReactTable
      columns={[
        "Person", "Video", "Phrase"
      ]}
    />
  </div>);
}

export default App;
