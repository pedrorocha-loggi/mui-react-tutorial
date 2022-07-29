import { render, screen } from '@testing-library/react';
import App from './App';

it('renders the app bar', () => {
  render(<App />);
  expect(screen.getByText('Minhas anotações')).toBeVisible();
});

it('renders one note', () => {
  render(<App initialNotes={['test note 1']} />);
  expect(screen.getByRole('listitem', { name: 'test note 1' })).toBeVisible();
});
