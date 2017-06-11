import {
  FETCH_ITEMS,
  UPDATE_QUANTITY,
  NOTIFY,
  ADDTOCART
} from './constants';

export default function CartReducer(state = null, action) {
  if (state === null) {
    return {
      products: [],
      quantity :0,
      prodObj :[],
      price : 0,
      discount : 0,
    };
  }
  switch (action.type) {
    case FETCH_ITEMS: {
      const payload = action.payload;
      return {
        ...state,
        products:payload,
      };
    }

    case UPDATE_QUANTITY : {
      const updateValue = action.updateValue;
      const item = action.item;
      item.itemQuan = action.itemQuan;
      const discountAmt = action.item.discount;
      const priceAmt = action.item.price;
      const quantity = updateValue ? state.quantity + 1 : state.quantity - 1;
      const price = updateValue  ? state.price + priceAmt : state.price - priceAmt;
      const productObj = state.prodObj;
      productObj.indexOf(item) === -1 ? productObj.push(item) :'';
      const discount = updateValue ? state.discount + discountAmt : state.discount - discountAmt;
      item.itemQuan < 1 && updateValue === false ? state.prodObj.pop(item) : '';
      return {
        ...state,
        updateValue,
        item,
        quantity,
        price,
        productObj,
        discount,
      }
    }
    case ADDTOCART :{
      const addToCart = action.addToCart;
      return {
        ...state,
        addToCart
      }
    }
    case NOTIFY : {
      const showNotification = action.showNotification;
      return {
        ...state,
        showNotification,
      }
    }

    default: {
      return state;
    }
  }
}
