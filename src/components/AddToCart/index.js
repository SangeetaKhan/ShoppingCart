import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './styles.css';

class AddToCart extends Component {
constructor(props){
    super(props);
    this.state = {
      isAddToCart : false,
      quantity_state : 1,
      isUpdateVal : true,
      toNotify : true,
    }
  }
  
addToCartItem = (item) => {
  const { isAddToCart , isUpdateVal ,  quantity_state , toNotify } = this.state;
  const { updateQuantity , showNotification , notifyCart , addToCartItems, addTocart } = this.props;
  isAddToCart ? this.setState({isAddToCart : false} , function() {
    this.props.addToCartItems(this.state.isAddToCart)
  }) : this.setState({isAddToCart : true} , function() {
    this.props.addToCartItems(this.state.isAddToCart)
  })
  this.setState ({ quantity_state :1 })
  setTimeout(() => {
    this.setState({toNotify : false},function(){
        this.props.notifyCart(this.state.toNotify)
    })},3000
  )
  this.setState({isUpdateVal : true,toNotify:true},function() {
    this.props.updateQuantity(this.state.isUpdateVal , item, quantity_state, this.state.toNotify),
    this.props.notifyCart(this.state.toNotify)
  });
}

addMoreItemsToCart = (quan,item) => {
  const { quantity_state , isUpdateVal } = this.state;
  const {  quantity , showNotification ,notifyCart } = this.props;
  setTimeout(() => {
    this.setState({toNotify : false},function(){
        this.props.notifyCart(this.state.toNotify)
    })},3000
  )
  this.setState({isUpdateVal : true , quantity_state : quan + 1  },function() {
    this.props.updateQuantity(this.state.isUpdateVal, item ,this.state.quantity_state),
    this.props.notifyCart(this.state.toNotify)
  });
}

removeIemsFromCart = (quan,item) => {
    const { quantity_state , isUpdateVal } = this.state;
    const { updateQuantity , showNotification , notifyCart } = this.props;
    quantity_state > 1 ? this.setState ({ quantity_state : quan - 1 }) : this.setState ({isAddToCart : true});
    setTimeout(() => {
      this.setState({toNotify : false},function(){
          this.props.notifyCart(this.state.toNotify)
      })},3000
    )
    this.setState({isUpdateVal : false},function() {
      this.props.updateQuantity(this.state.isUpdateVal, item, this.state.quantity_state),
      this.props.notifyCart(this.state.toNotify)
    });
}

render() {
    const { isAddToCart, quantity_state } = this.state;
    const { updateQuantity , quantity , item , updateValue } = this.props;
    return (
      <div className={`row ${s.addCont}`}>
        <div className = {s.itemName}>
          {item.name}
        </div>
        <div className = {s.addBtn}>
        { (item.discount == 0 ) &&
          <p className = {s.itemPrice}> $ {item.price}</p>
        }
        { (item.discount > 0 )
           &&
          <p className = {s.itemPrice}><strike>${item.price}</strike>
          <span>${(item.price)  - ((item.discount)/100)* (item.price) }</span></p>
        }
        { !this.state.isAddToCart &&
            <button className={s.addTocart} onClick ={() => this.addToCartItem(item)}>Add To Cart</button>
          }
          {  this.state.isAddToCart && !updateValue  &&
          <div className = {s.addMore}>
            <button className = {s.minItems} onClick = { () => this.removeIemsFromCart(quantity_state, item)} > - </button>
            <button className = {s.moreItems}>{ quantity_state }</button>
            <button className = {s.plusItem} onClick = { () => this.addMoreItemsToCart(quantity_state ,item)} > + </button>
          </div>
         }
        </div>
        <div className = {s.clearfix}/>
      </div>
    );
  }
}

export default withStyles(s)(AddToCart);
