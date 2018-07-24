import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CartHeader from './CartHeader';
import CartFooter from './CartFooter';
import CartItems from './CartItems';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CartHeader />
          <CartItems />
        <CartFooter />
      </div>
    );
  }
}

export default App;
