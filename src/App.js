import { AppBar as MuiAppBar, Box, Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField, Toolbar, Typography } from "@material-ui/core";
import { Add, Delete } from "@material-ui/icons";
import { useState } from "react";

function NewNoteDialog({ showAddDialog, setShowAddDialog, setNotes }) {
  let newNote = '';
  return (
    <Dialog
      open={showAddDialog}
      onClose={() => setShowAddDialog(false)}
      aria-labelledby="add-dialog-title"
      aria-describedby="add-dialog-description"
    >
      <DialogTitle id="add-dialog-title">Nova anotação</DialogTitle>
      <DialogContent>
        <TextField onChange={event => newNote = event.target.value} />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setShowAddDialog(false)}>
          Cancelar
        </Button>
        <Button onClick={() => {
          setNotes(prevNotes => prevNotes.concat(newNote));
          setShowAddDialog(false);
        }}>
          Adicionar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

function AppBar({ setShowAddDialog }) {
  return (
    <MuiAppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Anotações
        </Typography>
        <IconButton style={{ color: 'white' }} onClick={() => setShowAddDialog(true)}>
          <Add />
        </IconButton>
      </Toolbar>
    </MuiAppBar>
  );
}

function Note({ index, content, setNotes }) {
  return (
    <Card style={{ marginTop: 10, marginRight: 10, marginLeft: 10 }}>
      <CardContent>
        <Typography>{content}</Typography>
      </CardContent>
      <CardActions style={{ flexDirection: 'row-reverse' }}>
        <Button
          size="small"
          color="primary"
          onClick={() => setNotes(prevNotes => {
            const newNotes = prevNotes.slice();
            newNotes.splice(index, 1);
            return newNotes;
          })}
          startIcon={<Delete />}
        >
          Apagar
        </Button>
      </CardActions>
    </Card>
  );
}

function App() {
  const [notes, setNotes] = useState(
    Array(10).fill('Conteúdo').map((content, index) => `${content} ${index}`));
  const [showAddDialog, setShowAddDialog] = useState(false);

  return (
    <Box>
      <NewNoteDialog
        showAddDialog={showAddDialog}
        setShowAddDialog={setShowAddDialog}
        setNotes={setNotes}
      />
      <AppBar setShowAddDialog={setShowAddDialog} />

      {notes.map((content, index) => (
        <Note content={content} index={index} setNotes={setNotes} key={index} />
      ))}
    </Box >
  );
}

export default App;
