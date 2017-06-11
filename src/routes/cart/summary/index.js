import React from 'react';
import Order from '../../../containers/Shopping/Summary';


const title = 'Order Summary';
export default {

  path: '/order-summary',
  action() {
    return {
      title,
      component: < Order title={title}/>,
    };
  },

};
