import React, { Component } from 'react';
import Navigation from './../Header/Navigation';
//import { logo } from './logo.png'

/*const menu = {
  imageBrand : 'https://tamybl.github.io/swapi-app/assets/img/Star-Wars-Logo_Silver.png',
  title : 'Star Wars',
  links : {
    menuLeft: [ 'Link 1', 'Link 2'],
    menuRight: [ 'Link R 1', 'Link R 2']
  }
}*/
class Header extends Component {
  render() {  
    return (
      <Navigation imageBrand="https://tamybl.github.io/swapi-app/assets/img/Star-Wars-Logo_Silver.png" title="Star Wars" linkright1="Link 2" />);
  }
}

export default Header;