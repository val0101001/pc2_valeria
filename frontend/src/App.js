import Typography from '@mui/material/Typography';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Protected from './components/Protected';
import Home from './pages/Home';
import Login from './pages/Login';

import Register from './pages/Register';
import Board from './pages/Board';

const App = () => {
  return (
    <Router>
      <div>
        <Typography variant="h3" align="center" gutterBottom>
          Ranking Template Generator
        </Typography>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/board/:id" element={<Board />} />
          <Route path="/" element={<Protected element={Home} />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
