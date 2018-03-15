import React, { Component } from 'react';
import Navigation from './../Header/Navigation';


class Header extends Component {
  render() {  
    return (
      <Navigation imageBrand="https://tamybl.github.io/swapi-app/assets/img/Star-Wars-Logo_Silver.png" title="Star Wars" linkright1="Link 2" />);
  }
}

export default Header;