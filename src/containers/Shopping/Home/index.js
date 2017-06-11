import React,{ PropTypes, Component }from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './styles.css';
import { connect } from 'react-redux';
import DisplayedItems from '../../../components/DisplayedItems';
import Header from '../../../components/Header';
import ProductSummary from '../../../components/ItemSummary';
import {
  fetchItems,
  updateQuantity,
  notifyCart,
  addToCartItems
} from './actions';

class Cart extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.fetchItems();
  }

  componentWillUpdate(nextState){
    const { addToCart } = nextState;
    this.props.addToCartItems(addToCart);
  }
  render() {
    const {
      products ,
      quantity ,
      updateQuantity ,
      price,
      item,
      updateValue,
      showNotification,
      notifyCart,
      addToCartItems,
      addToCart
    } = this.props;
    return (
      <div className={s.root}>
        <Header
          updateQuantity = { updateQuantity }
          quantity = { quantity }
          updateValue = { updateValue }
          showNotification = { showNotification }
          />
        <DisplayedItems
          products = { products }
          updateQuantity = { updateQuantity }
          quantity = { quantity }
          showNotification = { showNotification }
          notifyCart = { notifyCart }
          addToCart = { addToCart }
          addToCartItems = { addToCartItems }
        />

      </div>
    );
  }
}

Cart.propTypes = {
  fetchItems: PropTypes.func,
  title: PropTypes.string.isRequired,
  products:PropTypes.array.isRequired,
};

const mapDispatchToProps = {
  fetchItems,
  updateQuantity,
  notifyCart,
  addToCartItems
};

const mapStateToProps =({ CartReducer }) =>  ({
  products: CartReducer.products,
  quantity :CartReducer.quantity,
  price : CartReducer.price,
  item : CartReducer.item,
  updateValue : CartReducer.updateValue,
  showNotification : CartReducer.showNotification,
  addToCart : CartReducer.addToCart,
});

export default withStyles(s)(connect(mapStateToProps,mapDispatchToProps)(Cart));
