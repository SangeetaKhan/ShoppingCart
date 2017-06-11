import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './styles.css';
import Link from '../Link';

class ProductSummary extends Component {

  constructor(props){
      super(props);
      this.state = {
        isUpdateVal : true,
        quantity_state :1 ,
      }
    }

removeItem = (prodObj,i,quantity) => {
  prodObj.splice(i,1);
  const quan =  quantity - 1;
  this.setState({prodObj});
}

addMoreItemsToCart = (quan,item) => {
  const { isUpdateVal } = this.state;
  const {  quantity , updateQuantity } = this.props;
  this.setState({isUpdateVal : true , quantity_state : quan + 1  },function() {
    this.props.updateQuantity(this.state.isUpdateVal, item ,this.state.quantity_state )
  });
}

removeIemsFromCart = (quan,item) => {
    const { quantity_state , isUpdateVal } = this.state;
    const { updateQuantity ,quantity } = this.props;
    quantity_state > 1 ? this.setState ({ quantity_state : quan - 1 }) :  quantity_state;
    this.setState({isUpdateVal : false},function() {
      this.props.updateQuantity(this.state.isUpdateVal, item, this.state.quantity_state)
    });
}

render() {
    const {
      fetchOrders,
      quantity ,
      price ,
      item,
      updateValue,
      itemQuan,
      productObj,
      updateQuantity,
      discount,
    } = this.props;
    return (
      <div className={s.summary} >
        <div className = {s.heading}>
          <Link to = '/shopping-cart'><img src={require('../../../public/back.svg')} className={s.back} /></Link>
        Order Summary
        </div>
          <div className = {s.summaryTable}>
            <table>
              <thead>
                  <tr>
                    <th>Items({quantity})</th>
                    <th>Qty</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {productObj.map((item, i) =>
                    <tr key ={i}>
                      <td>
                        <div className = {s.itemInfo}>
                          <div><img src={item.img_url} width="35" height="35"/></div>
                          <div>{item.name}</div>
                          <button className = {s.close} onClick = { () => this.removeItem(prodObj,item,quantity)}>X</button>
                        </div>
                      </td>
                      <td>
                        <div className = {s.addMore}>
                          <button className = {s.minItems} onClick = { () => this.removeIemsFromCart(item.itemQuan, item)}> - </button>
                          <button className = {s.moreItems}>{ item.itemQuan }</button>
                          <button className = {s.plusItem} onClick = { () => this.addMoreItemsToCart(item.itemQuan ,item)} > + </button>
                        </div>
                      </td>
                      <td>$ {item.itemQuan * item.price}</td>
                    </tr>
                  )}
                </tbody>
              </table>
          </div>
            <div className = {s.itemSum}>
              <div className ={s.items}>
                <p className = {s.totalSum}>Total</p>
                <div>Items ({ quantity })
                  <span>:  ${ price }</span>
                </div>
                <div>Discount
                  <span>:  ${ discount }</span>
                </div>
                <div>Type Discount
                  <span> :  ${ discount }</span>
                </div>
              </div>
              <div className ={s.total}>
                Order Total
                <span>: ${ price + discount + discount }</span>
              </div>
              <div className={s.clearfix}/>
            </div>
            <div className={s.clearfix}/>
        </div>
    );
  }
}

export default withStyles(s)(ProductSummary);
