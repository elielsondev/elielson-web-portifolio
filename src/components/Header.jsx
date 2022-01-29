import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <div>
        <a href="http://" target="blank">
          <input
            type="image"
            src="https://bankimooncentre.org/wp-content/uploads/2020/05/LinkedIn-Icon-Square.png"
            alt="LinkedIn"
            width="40"
          />
        </a>

        <a href="http://" target="blank">
          <input
            type="image"
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="GitHub"
            width="40"
          />
        </a>

        <a href="http://" target="blank">
          <input
            type="image"
            src="https://www.trt13.jus.br/oraculo/sites/default/files/imagens/artigo/print_603c0c8cbac74.png"
            alt="Gmail"
            width="50"
            height="40"
          />
        </a>

        <a href="http://" target="blank">
          <input
          type="image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png"
          alt="Instagram"
          width="40"
          />
        </a>
      </div>

      <div>
      <Link to="/portugues">
        <input 
          type="image"
          src={ 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png' }
          alt="PT"
          width="50"
          height="30"
        />
      </Link>

      <Link to="/english">
        <input
          type="image"
          src={ 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/1280px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png' }
          alt="EN"
          width="50"
          height="30"
        />
      </Link>
      </div>
    </header>
  );
}

export default Header;
