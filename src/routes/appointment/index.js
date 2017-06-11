import React from 'react';
import Appointment from '../../containers/Appointment';

const title = 'Appointment';

export default {

  path: '/appointment',

  action() {
    return {
      title,
      component: <Appointment title={title} />,
    };
  },

};
