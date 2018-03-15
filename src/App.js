import React, { Component } from 'react';
//import ReactDom from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import logo from './logo.svg';
import Header from './components/Header/Header';
import Swapi from './components/Swapi';
import './App.css';


class App extends Component {
  render() {
    return (
        <Grid fluid>
          <Header />
          <Swapi />
        </Grid>
    );
  }
}

export default App;
