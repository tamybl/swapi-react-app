import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

// Api Swapi
const categories = [ 'Films', 'Planets', 'Spaceships', 'Vehicles', 'People', 'Species' ];


class Swapi extends Component {
  render() {
      let listCategories = categories.map((name, index) => {
        return <Col xs={12} sm={6} md={4} key={index} className={`categories ${name}`}  alt={name} onClick={getDataCategories}><span className="title">{name}</span></Col>
      });
    return (
      <Row>

        {listCategories}
      </Row>);
  }
}

const getDataCategories = () => {
  console.log('Hice click');
}

export default Swapi;