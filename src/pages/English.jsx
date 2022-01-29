import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';

function English({ userInfo }) {
  return (
    <div>
      <Header />
      <h1>English</h1>
      <p>{ userInfo.name }</p>
      <p>{ userInfo.email }</p>
    </div>
  );
}

const mapStateToProps = (state) => (
  {
    userInfo: state.reducer.user,
  }
)

English.propTypes = {
  userInfo: PropTypes.object,
};

export default connect(mapStateToProps)(English);
