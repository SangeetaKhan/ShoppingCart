import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './styles.css';
import Link from '../Link';

class Header extends Component {

render() {
  const { updateQuantity, quantity, updateValue ,showNotification } = this.props;
    return (
      <div className={s.prodHeader}>
        {
          showNotification &&
          <div className = {s.notification}>{quantity} is added to your cart</div>
        }
        <div className = {s.heading}>All Items</div>
        <div className = {s.cartButton}>
          <Link to = '/order-summary'>
              <button className = {s.goToCart}> Go to Cart
                <img src={require('../../../public/cart.svg')} className={s.cartIcon} />
                {
                  updateValue &&
                  <span>{quantity}</span>
                }
              </button>
            </Link>
        </div>
        <div className = {s.clearfix}/>
      </div>
    );
  }
}

export default withStyles(s)(Header);
