import { AppBar, Box, Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField, Toolbar, Typography } from '@mui/material';
import { Add, Delete } from '@mui/icons-material';
import { useState } from 'react';

function App({ initialNotes }) {
  const [notes, setNotes] = useState(initialNotes || []);
  const [openNewNoteDialog, setOpenNewNoteDialog] = useState(false);
  const [newNote, setNewNote] = useState('');

  return (
    <Box>
      <Dialog
        open={openNewNoteDialog}
        onClose={() => setOpenNewNoteDialog(false)}
      >
        <DialogTitle>Adicionar anotação</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Adicione o texto da sua nova anotação.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Texto da anotação"
            type="text"
            fullWidth
            variant="outlined"
            onChange={event => setNewNote(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenNewNoteDialog(false)}>
            Cancelar
          </Button>
          <Button onClick={() => {
            setNotes(prevNotes => prevNotes.concat(newNote));
            setOpenNewNoteDialog(false);
          }}>
            Adicionar
          </Button>
        </DialogActions>
      </Dialog>
      <AppBar position="sticky">
        <Toolbar>
          <Typography flexGrow={1}>Minhas anotações</Typography>
          <IconButton
            aria-label="Adicionar nota"
            color='inherit'
            onClick={() => setOpenNewNoteDialog(true)}
          >
            <Add />
          </IconButton>
        </Toolbar>
      </AppBar>
      {notes.map((note, index) => (
        <Card key={index} sx={{ margin: 1 }}>
          <CardContent>
            <Typography>{note}</Typography>
          </CardContent>
          <CardActions sx={{ flexDirection: 'row-reverse' }}>
            <Button
              size="small"
              color="primary"
              startIcon={<Delete />}
              onClick={() => setNotes(prevNotes => {
                const newNotes = prevNotes.slice();
                newNotes.splice(index, 1);
                return newNotes;
              })}
            >
              Apagar
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}

export default App;
