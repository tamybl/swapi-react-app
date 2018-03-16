import React from 'react';
import PropTypes from "prop-types";
//import icon from './images/film.svg';

const filmItem = props => (
  <li className="item-result">
    <h3 className="title-results">
      {props.item.title}
      <span> (Episode {props.item.episode_id})</span>
    </h3>
    <div
      className={`${props.item.type}-bg`}
      id={props.item.type}
      //dangerouslySetInnerHTML={{ __html: icon }}
    />
    <ul className="details-result">
      <li>Released: <span>{props.item.release_date}</span> </li>
      <li>Director: <span>{props.item.director}</span> </li>
      <li>Producer: <span>{props.item.producer}</span> </li>
    </ul>
  </li>
);

filmItem.propTypes = {
  item: PropTypes.shape({
    director: PropTypes.string,
    episode_id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default filmItem;