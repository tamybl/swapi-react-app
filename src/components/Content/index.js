import React, { Component } from 'react';
import swapiModule from  './Swapidata/SwapiData';
//import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

// Api Swapi
const categories = [ 'Films', 'Planets', 'Spaceships', 'Vehicles', 'People', 'Species' ];


class Swapi extends Component {

  constructor() {
    super();
    this.handleClick = this.handleClick;
  }
  
  handleClick(param, e) {
    var result = "get" + param;
    swapiModule.getVehicles(function(data) {
    console.log("Result of", data);  
    console.log('Parameter', result);
    console.log('Event', e);
    })
  }
  render() {
      let listCategories = categories.map((name, index) => {
        return <Col xs={12} sm={6} md={4} key={index} className={`categories ${name}`}  alt={name} onClick={this.handleClick.bind(this, {name})}><span className="title">{name}</span></Col>
      });
    return (
      <Row>

        {listCategories}
      </Row>);
    }
  }

/*const hola = () => {
  console.log('Hice click');
  swapiModule.getVehicles(function(data) {
    console.log("Result of getVehicles", data);  
  });
}*/




export default Swapi;