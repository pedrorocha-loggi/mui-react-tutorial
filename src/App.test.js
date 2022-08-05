import { render, screen } from '@testing-library/react';
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
