import { AppBar, Box, Card, CardContent, Toolbar, Typography } from "@material-ui/core";

function App() {
  return (
    <Box>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">
            Anotações
          </Typography>
        </Toolbar>
      </AppBar>

      {(new Array(10)).fill(0).map((_, i) => (
        <Card style={{ marginTop: 10, marginRight: 10, marginLeft: 10 }} key={i}>
          <CardContent>
            <Typography>Conteúdo</Typography>
          </CardContent>
        </Card>
      ))}
    </Box >
  );
}

export default App;
