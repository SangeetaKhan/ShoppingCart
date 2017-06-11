import React,{ PropTypes, Component }from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './styles.css';
import { connect } from 'react-redux';
import {

} from './actions';

class Appointment extends React.Component {
  render() {
    return (
      <div className={s.root}>
      'Hello Appointment'
      </div>
    );
  }
}

Appointment.propTypes = {

};
export default withStyles(s)(Appointment);
