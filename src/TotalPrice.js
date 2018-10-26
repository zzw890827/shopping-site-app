import React from 'react';
import PropTypes from 'prop-types';

function TotalPrice({items}) {
  let total = items.reduce((sum, item) => {
    return sum + item.price * item.count;
  }, 0);
  return (
    <span>Total: ${total.toFixed(2)}</span>
  )
}

TotalPrice.propTypes = {
  items: PropTypes.array.isRequired
};

export default TotalPrice;
