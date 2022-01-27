import { render, screen } from '@testing-library/react';
import App from './App';

describe('Teste do componente App.js', () => {
  it('Verificacao de rota em componente', () => {
    render(<App />)
    expect(screen.getByText()).toBeInTheDocument();
  });
});
