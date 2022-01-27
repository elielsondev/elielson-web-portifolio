import { render, screen } from '@testing-library/react';
import English from '../pages/English';

describe('Teste do componente English.js', () => {
  it('Verificacao de rota em componente', () => {
    render(<English />)
    expect(screen.getByText()).toBeInTheDocument();
  });
});
