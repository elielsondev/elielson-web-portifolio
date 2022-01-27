import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionUserInfo } from '../redux/actions/index';
import './css/Login.css';

function Login({ userInfo }) {
  const [name, setName] = useState("Visitante");
  const [email, setEmail] = useState("visit@portfolio.com");
  const [portugues, setPortugues] = useState(undefined)

  const validaEmail = /\S+@\S+\.\S+/;
  const ENGLANDFLAG = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/1280px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png';
  const BRAZILFLAG = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png';

  function handleClick() {
    userInfo({ name, email });
  }

  return (
    <div id="Background" className="bg-primary.bg-gradient">
      <div id="CardLogin" className="container-md">

        <h1>SEJA BEM VINDO(A)!</h1>
        <h1>WELCOME!</h1>

        <label htmlFor="name" className="form-label">
          Name:
          <input
            className="form-control rounded-pill"
            type="text"
            name="name"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label htmlFor="email" className="form-label">
          E-mail:
          <input
            className="form-control rounded-pill"
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <p>Escolha um idioma / Choose a language</p>

        <div>
          <input 
            type="image"
            src={ BRAZILFLAG }
            alt="PT"
            width="50"
            height="30"
            onClick={ () => setPortugues(true) }
          />
          <input
            type="image"
            src={ ENGLANDFLAG }
            alt="EN"
            width="50"
            height="30"
            onClick={ () => setPortugues(false) }
          />
        </div>

        <div>
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleClick}
            disabled={ !validaEmail.test(email) || portugues === undefined }
          >
            Acessar
          </button>
        </div>  
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  userInfo: (state) => dispatch(actionUserInfo(state)),
});

Login.propTypes = {
  user: PropTypes.object.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
