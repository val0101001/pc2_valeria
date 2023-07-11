import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Button, Grid, TextField, Box } from '@mui/material';
import { boardPost, boardsFetch } from '../services/api-calls';

const CardItem = ({ name, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/board/${id}`);
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <h3>{name}</h3>
        <p>ID: {id}</p>
        <Button variant="contained" onClick={handleClick}>
          Ver detalles
        </Button>
      </CardContent>
    </Card>
  );
};

function Home() {
  const [name, setName] = useState('');
  const [cards, setCards] = useState([]);

  const handleAddCard = async () => {
    const board = await boardPost({ name });
    setCards([...cards, board]);
    setName('');
  };

  useEffect(() => {
    return async () => {
      const boards = await boardsFetch();
      setCards(boards || []);
    };
  }, []);

  return (
    <div>
      <h1>Boards</h1>
      <Box maxWidth={300} p={4}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
          autoFocus
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <Button variant="contained" onClick={handleAddCard} disabled={!name}>
          Add Board
        </Button>
      </Box>
      <Grid container spacing={2} style={{ marginTop: '1rem' }} p={4}>
        {cards.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card.id}>
            <CardItem name={card.name} id={card.id} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Home;
