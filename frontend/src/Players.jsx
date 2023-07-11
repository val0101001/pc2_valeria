import React, { useEffect, useState } from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material';

const Players = () => {


  const [players, setPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState({
    id: '',
    firstname: '',
    lastname: '',
  });

  useEffect(() => {
    async function getPlayers() {
      const response = await fetch('http://127.0.0.1:5000/players', {
        method: 'GET',
      });
      const json = await response.json();
      setPlayers(json);
    }

    return () => {
      getPlayers();
    };
  }, []);

  const handleInputChange = (e) => {
    setNewPlayer((prevPlayer) => ({
      ...prevPlayer,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlayers((prevPlayers) => [...prevPlayers, newPlayer]);
    setNewPlayer({ id: '', firstname: '', lastname: '' });
  };

  const handleDelete = (id) => {
    setPlayers((prevPlayers) =>
      prevPlayers.filter((player) => player.id !== id)
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          name="id"
          label="ID"
          value={newPlayer.id}
          onChange={handleInputChange}
        />
        <TextField
          name="firstname"
          label="First Name"
          value={newPlayer.firstname}
          onChange={handleInputChange}
        />
        <TextField
          name="lastname"
          label="Last Name"
          value={newPlayer.lastname}
          onChange={handleInputChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Add Player
        </Button>
      </form>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {players.map((player) => (
              <TableRow key={player.id}>
                <TableCell>{player.id}</TableCell>
                <TableCell>{player.firstname}</TableCell>
                <TableCell>{player.lastname}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(player.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Players;
