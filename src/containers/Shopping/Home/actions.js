import fetch from 'isomorphic-fetch';
import {
  FETCH_ITEMS,
  UPDATE_QUANTITY,
  NOTIFY,
  ADDTOCART
} from './constants.js';

export function fetchItems() {
  return async dispatch => {
    const resp = await fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/itemsb08b06c.json');
    const dataPromise = await resp.json();
    const payload = await dataPromise;
      dispatch({
        type: FETCH_ITEMS,
        payload,
      });
  };
}

export function updateQuantity(updateValue,item,itemQuan){
  return  dispatch => {
    dispatch({
      type: UPDATE_QUANTITY,
      updateValue,
      item,
      itemQuan,
    });
  };
}

export function notifyCart(showNotification){
  return dispatch => {
    dispatch({
      type :NOTIFY,
      showNotification
    })
  }
}

export function addToCartItems(addToCart){
  return dispatch => {
    dispatch({
      type : ADDTOCART,
      addToCart
    })
  }
}
