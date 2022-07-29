import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

it('renders the title', () => {
  render(<App />);
  expect(screen.getByText(/Minhas anotações/)).toBeVisible();
});

describe('new note dialog', () => {
  it('displays new note dialog', () => {
    render(<App />);
    userEvent.click(screen.getByLabelText(/Adicionar nota/i));
    expect(screen.getByRole('textbox', { name: /Texto da anotação/ })).toBeVisible();
    expect(screen.getByRole('button', { name: /Adicionar/ })).toBeVisible();
    expect(screen.getByRole('button', { name: /Cancelar/ })).toBeVisible();
  });

  it('closes the dialog', () => {
    render(<App />);
    userEvent.click(screen.getByLabelText(/Adicionar nota/i));
    userEvent.click(screen.getByRole('button', { name: /Cancelar/ }));
    expect(screen.getByRole('textbox', { name: /Texto da anotação/ })).not.toBeVisible();
    expect(screen.queryByRole('button', { name: /Apagar/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });
});
