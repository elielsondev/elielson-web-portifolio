import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionUserInfo } from '../redux/actions/index';

function Login({ userInfo }) {
  const [name, setName] = useState('Visitante');
  const [email, setEmail] = useState('visit@portfolio.com');

  var validaEmail = /\S+@\S+\.\S+/;

  function handleClick () {
    userInfo({ name, email })
  }

  return (
    <div>
      <label htmlFor="name">
        Name:
        <input type="text" name="name" id="name" onChange={ (e) => setName(e.target.value) } />
      </label>
      
      <label htmlFor="email">
        E-mail:
        <input type="email" name="email" id="email" onChange={ (e) => setEmail(e.target.value) } />
      </label>

      <button
        type="button"
        onClick={ handleClick }
        disabled={ !validaEmail.test(email) }
      >
        Acessar
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => (
  {
    userInfo:(state) => dispatch(actionUserInfo(state))
  }
);

Login.propTypes = {
  user : PropTypes.object.isRequired
}

export default connect(null, mapDispatchToProps)(Login);
