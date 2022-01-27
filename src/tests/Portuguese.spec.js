import { render, screen } from '@testing-library/react';
import Portuguese from '../pages/Portuguese';

describe('Teste do componente Portuguese.js', () => {
  it('Verificacao de rota em componente', () => {
    render(<Portuguese />)
    expect(screen.getByText()).toBeInTheDocument();
  });
});
