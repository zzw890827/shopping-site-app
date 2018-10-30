import React, {Component} from 'react';
import Nav from './Nav'
import ItemPage from './ItemPage';
import CartPage from './CartPage';
import './App.css';

import {items} from './data'

class App extends Component {
  state = {
    activeTab: 0,
    cart: []
  };

  handleTabChange = (index) => {
    this.setState({
      activeTab: index
    })
  };

  handleAddToCart = (item) => {
    this.setState({
      cart: [...this.state.cart, item.id]
    })
  };

  handleRemoveOne = (item) => {
    let index = this.state.cart.indexOf(item.id);
    this.setState({
      cart: [
        ...this.state.cart.slice(0, index),
        ...this.state.cart.slice(index + 1)
      ]
    })
  };

  renderContext(itemList) {
    switch (this.state.activeTab) {
      default:
      case 0:
        return <ItemPage items={items} onAddToCart={this.handleAddToCart}/>;
      case 1:
        return <CartPage items={itemList}
                         onAddOne={this.handleAddToCart}
                         onRemoveOne={this.handleRemoveOne}/>
    }
  };

  mkCartItemSnapshot() {
    let snapShot = {};
    let itemCounts = this.state.cart.reduce((itemCounts, itemId) => {
      itemCounts[itemId] = itemCounts[itemId] || 0;
      itemCounts[itemId]++;
      return itemCounts;
    }, {});

    snapShot.itemList = Object.keys(itemCounts).map(itemId => {
      var item = items.find(item => item.id === parseInt(itemId, 10));
      return {
        ...item,
        count: itemCounts[itemId]
      }
    });

    snapShot.totalPrice = snapShot.itemList.reduce((sum, item) => {
      return sum + item.price * item.count;
    }, 0).toFixed(2);

    snapShot.quantity = snapShot.itemList.reduce((sum, item) => {
      return sum + item.count
    }, 0);

    return snapShot;
  }

  render() {
    let {activeTab} = this.state;
    let {itemList, totalPrice, quantity} = this.mkCartItemSnapshot();
    console.log(totalPrice, quantity);
    return (
      <div className="App">
        <Nav activeTab={activeTab}
             onTabChange={this.handleTabChange}
             quantity={quantity}
             price={totalPrice}/>
        <main className="App-content">
          {this.renderContext(itemList)}
        </main>
      </div>
    )
  }
}

export default App;
