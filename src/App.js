import { AppBar as MuiAppBar, Box, Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField, Toolbar, Typography } from '@mui/material';
import { Add, Delete } from '@mui/icons-material';
import { useRef, useState } from 'react';

function AppBar({ onAddNote }) {
  return (
    <MuiAppBar position="sticky">
      <Toolbar>
        <Typography component="h1" flexGrow={1}>Minhas anotações</Typography>
        <IconButton
          aria-label='Nova anotação'
          color='inherit'
          onClick={onAddNote}
        >
          <Add />
        </IconButton>
      </Toolbar>
    </MuiAppBar>
  );
}

function NoteCard({ index, onDelete, children }) {
  return (
    <Card
      aria-labelledby={`note${index}`}
      sx={{ margin: 1 }}
      role="listitem"
    >
      <CardContent>
        <Typography id={`note${index}`}>{children}</Typography>
      </CardContent>
      <CardActions sx={{ flexDirection: 'row-reverse' }}>
        <Button
          aria-label={`Apagar ${children}`}
          onClick={onDelete}
          size="small"
          color="primary"
          startIcon={<Delete />}
        >
          Apagar
        </Button>
      </CardActions>
    </Card>
  );
}

function NewNoteDialog({ onCancel, onAddNote }) {
  const newNote = useRef('');
  return (
    <Dialog
      open={true}
      onClose={onCancel}
    >
      <DialogTitle>Nova nota</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Adicione o texto da sua nota.
        </DialogContentText>
        <TextField
          margin="dense"
          label="Texto do nota"
          variant="outlined"
          type="text"
          fullWidth
          onChange={event => newNote.current = event.target.value}
        />
      </DialogContent>
      <DialogActions>
        <Button
          color='error'
          onClick={onCancel}
        >Cancelar</Button>
        <Button
          variant="contained"
          onClick={() => onAddNote(newNote.current)}
        >Adicionar</Button>
      </DialogActions>
    </Dialog>
  );
}

function App({ initialNotes }) {
  const [notes, setNotes] = useState(initialNotes || []);
  const [newNoteDialog, setNewNoteDialog] = useState(false);

  return (
    <Box>
      <AppBar onAddNote={() => setNewNoteDialog(true)} />
      {notes.map((note, index) => (
        <NoteCard
          key={index}
          index={index}
          onDelete={() => setNotes(prevNotes => {
            const newNotes = prevNotes.slice();
            newNotes.splice(index, 1);
            return newNotes;
          })}
        >{note}</NoteCard>
      ))}
      {newNoteDialog && (
        <NewNoteDialog
          onCancel={() => setNewNoteDialog(false)}
          onAddNote={newNote => {
            setNotes(prevNotes => [newNote].concat(prevNotes));
            setNewNoteDialog(false);
          }}
        />
      )}
    </Box>
  );
}

export default App;
