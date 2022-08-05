import { AppBar, Box, Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField, Toolbar, Typography } from '@mui/material';
import { Add, Delete } from '@mui/icons-material';
import { useRef, useState } from 'react';

function App({ initialNotes }) {
  const [notes, setNotes] = useState(initialNotes || []);
  const [newNoteDialog, setNewNoteDialog] = useState(false);
  const newNote = useRef('');

  return (
    <Box>
      <AppBar position="sticky">
        <Toolbar>
          <Typography component="h1" flexGrow={1}>Minhas anotações</Typography>
          <IconButton
            aria-label='Nova anotação'
            color='inherit'
            onClick={() => setNewNoteDialog(true)}
          >
            <Add />
          </IconButton>
        </Toolbar>
      </AppBar>
      {notes.map((note, index) => (
        <Card
          aria-labelledby={`note${index}`}
          key={index}
          sx={{ margin: 1 }}
          role="listitem"
        >
          <CardContent>
            <Typography id={`note${index}`}>{note}</Typography>
          </CardContent>
          <CardActions sx={{ flexDirection: 'row-reverse' }}>
            <Button
              onClick={() => setNotes(prevNotes => {
                const newNotes = prevNotes.slice();
                newNotes.splice(index, 1);
                return newNotes;
              })}
              size="small"
              color="primary"
              startIcon={<Delete />}
            >
              Apagar
            </Button>
          </CardActions>
        </Card>
      ))}
      {newNoteDialog && (
        <Dialog
          open={true}
          onClose={() => setNewNoteDialog(false)}
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
              onClick={() => setNewNoteDialog(false)}
            >Cancelar</Button>
            <Button
              variant="contained"
              onClick={() => {
                setNotes(prevNotes => [newNote.current].concat(prevNotes));
                setNewNoteDialog(false);
              }}
            >Adicionar</Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
}

export default App;
