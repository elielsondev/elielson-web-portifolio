import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';

function English({ userInfo }) {
  return (
    <div>
      <Header />
      <h1>Hey { userInfo.name }, welcome!!!</h1>
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
