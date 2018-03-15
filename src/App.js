import React, { Component } from 'react';
//import ReactDom from 'react-dom';
import { Grid } from 'react-bootstrap';
//import logo from './logo.svg';
import Header from './components/Header/Header';
import Swapi from './components/Swapi';
import './App.css';


class App extends Component {
  render() {
    return (
        <Grid fluid className="container-app">
          <Header />
          <Swapi />
        </Grid>
    );
  }
}

export default App;
