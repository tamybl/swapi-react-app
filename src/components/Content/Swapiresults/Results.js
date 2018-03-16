import React from 'react';
import PropTypes from "prop-types";
import peopleItem from './People';
import filmItem from './Film';
//import Planet from './planet.jsx';
//import Starship from './starship.jsx';
//import Species from './species.jsx';

//import './results.scss';

const Results = props => (
  <ul className="results">
    {props.items.map((item, index) => {
      switch (item.type) {
        case 'film':
          return <filmItem key={index} item={item} />;
        default:
          return <peopleItem key={index} item={item} />;
      }
    })}
  </ul>
);

Results.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Results;

/*        case 'planet':
          return <Planet key={i} item={item} />;
        case 'species':
          return <Species key={i} item={item} />;
        case 'starship':
          return <Starship key={i} item={item} />;*/