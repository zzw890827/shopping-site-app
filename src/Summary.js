import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Summary.css';

library.add(faShoppingCart);

class Summary extends Component {
  render() {
    return (
      <button className="summary">
        <FontAwesomeIcon icon="shopping-cart"/>
        <span> {this.props.quantity} items (${this.props.price})</span>
      </button>
    )
  }
}


Summary.propTypes = {
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired
};

export default Summary;
