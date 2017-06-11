import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './styles.css';
import AddToCart from '../../components/AddToCart';

class Items extends Component {

render() {
    const { item ,
      products,
      updateQuantity ,
      quantity ,
      updateValue,
      showNotification ,
      notifyCart,
      addToCartItems,
      addToCart
    } = this.props;
    return (
          <div className={`col-xs-4 ${s.prodList}`} >
            <div className ={s.items}>
                <div className={s.brandImg}>
                  { (item.discount > 0) &&
                    <p className = {s.discount}>{item.discount}% off</p>
                  }
                    <img src={item.img_url}/>
                </div>

                    <AddToCart
                    updateQuantity = { updateQuantity }
                    quantity = { quantity }
                    item = { item }
                    updateValue = { updateValue }
                    showNotification = { showNotification }
                    notifyCart = { notifyCart }
                    addToCart = { addToCart }
                    addToCartItems = { addToCartItems }
                    />

            </div>
          <div className={s.clearfix}/>
        </div>
    );
  }
}

export default withStyles(s)(Items);
