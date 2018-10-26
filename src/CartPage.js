import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import TotalPrice from './TotalPrice';
import EmptyCartPage from './EmptyCartPage';
import './CartPage.css';

function CartPage({items, onAddOne, onRemoveOne}) {
  const isEmpty = items.length === 0;
  return (
    <div>
      {isEmpty
        ? <EmptyCartPage/>
        : <ul className="CartPage-items">
          {items.map(item =>
            <li key={item.id} className="CartPage-item">
              <Item item={item}>
                <div className="CartItem-controls">
                  <button
                    className="CartItem-removeOne"
                    onClick={() => onRemoveOne(item)}>&ndash;</button>
                  <span className="CartItem-count">{item.count}</span>
                  <button
                    className="CartItem-addOne"
                    onClick={() => onAddOne(item)}>+
                  </button>
                </div>
              </Item>
            </li>
          )}
          <li className="CartPage-total">
            <TotalPrice items={items}/>
          </li>
        </ul>}
    </div>
  )
}

CartPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddOne: PropTypes.func.isRequired,
  onRemoveOne: PropTypes.func.isRequired
};

export default CartPage;
