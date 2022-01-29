import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';

function Portuguese({ userInfo }) {
  return (
    <div>
      <Header />
      <h1>Olá { userInfo.name }, seja bem vindo!!!</h1>
      <h1>Apresentação</h1>
      <h1>Objetivo Profissional</h1>
      <h1>Meus melhores projetos</h1>
      <h1>Meus certificados</h1>
    </div>
  );
}

const mapStateToProps = (state) => (
  {
    userInfo: state.reducer.user,
  }
)

Portuguese.propTypes = {
  userInfo: PropTypes.object,
}

export default connect(mapStateToProps)(Portuguese);
