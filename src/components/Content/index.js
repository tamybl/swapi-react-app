import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

// Api Swapi
const categories = [ 'Films', 'Planets', 'Spaceships', 'Vehicles', 'People', 'Species' ];


class Swapi extends Component {

  constructor(props) {
    super(props);
    this.state = categories;
  }
  
  render() {
      let listCategories = this.state.map((name, index) => {
        return <Col xs={12} sm={6} md={4} key={index} className={`categories ${name}`}  alt={name} onClick={this.getresults}><span className="title">{name}</span></Col>
      });
    return (
      <Row>

        {listCategories}
      </Row>);
    }
  }

export default Swapi;