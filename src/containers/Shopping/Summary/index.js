import React,{ PropTypes, Component }from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './styles.css';
import { connect } from 'react-redux';
import ProductSummary from '../../../components/ItemSummary';
import {
  updateQuantity,
} from '../Home/actions';

class Order extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const {
      products ,
      quantity ,
      price,
      item,
      updateValue,
      itemQuan,
      productObj,
      discount,
      updateQuantity
    } = this.props;
    return (
      <div className={s.root}>
        <ProductSummary
          quantity = { quantity }
          price = { price }
          item = { item }
          updateValue = { updateValue }
          productObj = { productObj }
          discount = { discount }
          updateQuantity = { updateQuantity }
         />
      </div>
    );
  }
}

Order.propTypes = {
  title: PropTypes.string.isRequired,
  products:PropTypes.array.isRequired,
};

const mapDispatchToProps = {
  updateQuantity
};

const mapStateToProps =({ CartReducer }) =>  ({
  quantity :CartReducer.quantity,
  price : CartReducer.price,
  item : CartReducer.item,
  updateValue : CartReducer.updateValue,
  productObj : CartReducer.prodObj,
  discount : CartReducer.discount,
});

export default withStyles(s)(connect(mapStateToProps,mapDispatchToProps)(Order));
