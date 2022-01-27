import { render, screen } from '@testing-library/react';
import Login from '../pages/Login';

describe('Teste do componente Login.js', () => {
  it('Verificacao de rota em componente', () => {
    render(<Login />)
    expect(screen.getByRole('heading', {
        name: /😀seja bem vindo\(a\)/i
      })).toBeInTheDocument();
  });
});
