1. `mkdir myNotesApp`
1. `cd myNotesApp`
1. `npx create-react-app .`
1. `npm start`
1. Adjust for phone
1. Remove unused code from App.js and index.js
1. `rm src/App.css src/logo.svg src/reportWebVitals.js`
1. modify src/index.css
1. `npm install @material-ui/core`
1. Add roboto font link
1. Add button 
```html
<Button>Hello World</Button>
```
1. Add toolbar 
```jsx
<AppBar>
  <Toolbar>
    <Typography variant="h6">Anotações</Typography>
  </Toolbar>
</AppBar>
```
1. Add bounding box and card
```jsx
 <Card style={{ margin: 10 }}>
   <CardContent>
     <Typography>Conteúdo</Typography>
   </CardContent>
 </Card>
```
1. Add delete button in card
```jsx
<CardActions style={{ flexDirection: 'row-reverse' }}>
  <Button size="small" color="primary" startIcon={<Delete />}>
    Apagar
  </Button>
</CardActions>
```
1. Add more cards and fix margin
1. `npm install @material-ui/icons`
1. Add new note button
```jsx
<IconButton style={{ color: 'white' }}>
  <Add />
</IconButton>
```
1. Implement delete
```jsx
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
```

https://www.youtube.com/watch?v=8aGhZQkoFbQ
