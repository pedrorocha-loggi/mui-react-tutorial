import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

it('renders the title', () => {
  render(<App />);
  expect(screen.getByText(/Minhas anotações/)).toBeVisible();
});

it('displays new note dialog', () => {
  render(<App />);
  userEvent.click(screen.getByLabelText(/Adicionar nota/i));
  expect(screen.getByRole('textbox', { name: /Texto da anotação/ }));
  expect(screen.getByRole('button', { name: /Adicionar/ }));
  expect(screen.getByRole('button', { name: /Cancelar/ }));
});
