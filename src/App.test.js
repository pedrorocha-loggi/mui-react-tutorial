import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

it('renders the app bar', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Minhas anotações' })).toBeVisible();
  expect(screen.getByRole('button', { name: 'Nova anotação' })).toBeVisible();
});

it('renders one note', () => {
  render(<App initialNotes={['test note 1']} />);
  expect(screen.getByRole('listitem', { name: 'test note 1' })).toBeVisible();
  expect(screen.getByRole('button', { name: 'Apagar' })).toBeVisible();
});

it('renders new note dialog', () => {
  render(<App />);
  userEvent.click(screen.getByRole('button', { name: 'Nova anotação' }));
  expect(screen.getByRole('heading', { name: 'Nova nota' })).toBeVisible();
  expect(screen.getByRole('textbox', { name: 'Texto do nota' })).toBeVisible();
  expect(screen.getByRole('button', { name: 'Cancelar' })).toBeVisible();
  expect(screen.getByRole('button', { name: 'Adicionar' })).toBeVisible();
});
