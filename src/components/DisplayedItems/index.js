import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './styles.css';
import Items from '../../components/Items';
import Header from '../../components/Header';

class DisplayedItems extends Component {

render() {
    const { products, updateQuantity , quantity , itemQuan , showNotification , notifyCart , addToCartItems } = this.props;
    return (
      <div className={`row ${s.prodCont}`}>
          {products.map((item, i) =>
            <Items
            item = { item }
            updateQuantity = { updateQuantity }
            quantity = { quantity }
            showNotification = { showNotification }
            notifyCart = { notifyCart }
            addToCartItems = { addToCartItems }
             />
          )}
      </div>
    );
  }
}

export default withStyles(s)(DisplayedItems);
