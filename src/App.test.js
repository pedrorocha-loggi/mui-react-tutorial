import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('basic rendering', () => {
  it('renders the title', () => {
    render(<App />);
    expect(screen.getByText('Minhas anotações')).toBeVisible();
  });

  it('renders a note', () => {
    render(<App initialNotes={['test note 1']} />);
    expect(screen.getByRole('listitem', { name: 'test note 1' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Apagar test note 1' })).toBeVisible();
  });

  it('renders several notes', () => {
    render(<App initialNotes={['test note 1', 'test note 2', 'test note 3']} />);
    expect(screen.getByRole('listitem', { name: 'test note 1' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Apagar test note 1' })).toBeVisible();
    expect(screen.getByRole('listitem', { name: 'test note 2' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Apagar test note 2' })).toBeVisible();
    expect(screen.getByRole('listitem', { name: 'test note 3' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Apagar test note 3' })).toBeVisible();
  });
});

describe('add new note', () => {
  it('displays new note dialog', () => {
    render(<App />);
    expect(screen.queryByRole('textbox', { name: 'Texto da anotação' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Adicionar' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Cancelar' })).not.toBeInTheDocument();
    userEvent.click(screen.getByLabelText('Adicionar nota'));
    expect(screen.getByRole('textbox', { name: 'Texto da anotação' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Adicionar' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Cancelar' })).toBeVisible();
  });

  it('closes the dialog without adding a note', () => {
    render(<App />);
    userEvent.click(screen.getByLabelText('Adicionar nota'));
    userEvent.click(screen.getByRole('button', { name: 'Cancelar' }));
    expect(screen.queryByRole('textbox', { name: 'Texto da anotação' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Adicionar' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Cancelar' })).not.toBeInTheDocument();
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });

  it('adds a new note', () => {
    render(<App />);
    userEvent.click(screen.getByLabelText('Adicionar nota'));
    userEvent.type(
      screen.getByRole('textbox', { name: 'Texto da anotação' }),
      'test new note test'
    );
    userEvent.click(screen.getByRole('button', { name: 'Adicionar' }));
    expect(screen.queryByRole('textbox', { name: 'Texto da anotação' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Adicionar' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Cancelar' })).not.toBeInTheDocument();
    expect(screen.getByRole('listitem', { name: 'test new note test' })).toBeVisible();
  });
});
