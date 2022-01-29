import React from 'react';
import { Link } from 'react-router-dom';

function English() {
  return (
    <div>
      <header>
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
      </header>
      <h1>English</h1>
    </div>
  );
}

export default English;
