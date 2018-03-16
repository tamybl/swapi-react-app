import React from 'react';
import PropTypes from "prop-types";
//import icon from './images/vader.svg';

const peopleItem = props => (
  <li className="item-result">
    <h3 className="title-results">{props.item.name}</h3>
    <div
      className={`${props.item.type}-bg`}
      id={props.item.type}
      //dangerouslySetInnerHTML={{ __html: icon }}
    />
    <ul className="results__info">
      <li>Gender <span>{props.item.gender}</span></li>
      <li>Height <span>{props.item.height}cm</span> </li>
      <li>Weight <span>{props.item.mass}kg</span> </li>
    </ul>
  </li>
);

peopleItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    gender: PropTypes.string,
    height: PropTypes.string,
  }),
};

export default peopleItem;