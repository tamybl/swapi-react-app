import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';

// Api Swapi
const categories = [ 'Planets', 'Spaceships', 'Vehicles', 'People', 'Films', 'Species' ];

// Api OMDB
//const movies = [ 'title1', 'title2', 'title3', 'title4' ];

class Swapi extends Component {
  render() {
      let listCategories = categories.map((name, index) => {
        return <li key={index} className={name} onClick={getDataCategories}>{name}</li>
      });
    return (
      <ul>
        {listCategories}
      </ul>);
  }
}

const getDataCategories = ({name}) => {
  console.log('Hice click en' + {name});
}

export default Swapi;