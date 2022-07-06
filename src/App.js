import { AppBar, Box, Button, Card, CardActions, CardContent, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Add, Delete } from "@material-ui/icons";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState(
    Array(10).fill('Conteúdo').map((content, index) => `${content} ${index}`));
  return (
    <Box>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Anotações
          </Typography>
          <IconButton style={{ color: 'white' }}>
            <Add />
          </IconButton>
        </Toolbar>
      </AppBar>

      {notes.map((content, index) => (
        <Card
          key={index}
          style={{ marginTop: 10, marginRight: 10, marginLeft: 10 }}
        >
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
      ))}
    </Box >
  );
}

export default App;
