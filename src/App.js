import { AppBar, Box, Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField, Toolbar, Typography } from '@mui/material';
import { Add, Delete } from '@mui/icons-material';
import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState(Array(10).fill('Conteúdo').map(
    (content, index) => `${content} ${index}`));
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
              onClick={() => {
                const newNotes = notes.slice();
                newNotes.splice(index, 1);
                setNotes(newNotes);
              }}
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
