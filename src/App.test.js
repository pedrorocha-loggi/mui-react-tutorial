import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('basic rendering', () => {
  it('renders the title', () => {
    render(<App />);
    expect(screen.getByText(/Minhas anotações/)).toBeVisible();
  });

  it('renders a note', () => {
    render(<App initialNotes={['test note 1']} />);
    expect(screen.getByRole('listitem', { name: /test note 1/ })).toBeVisible();
    expect(screen.getByRole('button', { name: /Apagar test note 1/ })).toBeVisible();
  });

  it('renders several notes', () => {
    render(<App initialNotes={['test note 1', 'test note 2']} />);
    expect(screen.getByRole('listitem', { name: /test note 1/ })).toBeVisible();
    expect(screen.getByRole('button', { name: /Apagar test note 1/ })).toBeVisible();
    expect(screen.getByRole('listitem', { name: /test note 2/ })).toBeVisible();
    expect(screen.getByRole('button', { name: /Apagar test note 2/ })).toBeVisible();
  });
});

describe('add new note', () => {
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
