import React from 'react';
import PropTypes from 'prop-types';
import NavLink from './NavLink';
import Summary from './Summary';

const Nav = ({activeTab, onTabChange, quantity, price}) => (
  <nav className="App-nav">
    <ul>
      <li className={`App-nav-item ${activeTab === 0 && 'selected'}`}>
        <NavLink index={0} onClick={onTabChange}>Items</NavLink>
      </li>
      <li className={`App-nav-item ${activeTab === 1 && 'selected'}`}>
        <NavLink index={1} onClick={onTabChange}>Cart</NavLink>
      </li>
      <li className="App-nav-summary" onClick={()=>onTabChange(1)}>
        <Summary quantity={quantity} price={price}/>
      </li>
    </ul>
  </nav>
);

Nav.propTypes = {
  activeTab: PropTypes.number.isRequired,
  onTabChange: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired
};

export default Nav;
