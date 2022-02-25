import { Container } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { MoviesList, MoviesInsert, MoviesUpdate } from '../pages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Container>
      <Routes>
        <Route path="/movies/list" element={<MoviesList />} />
        <Route path="/movies/create" element={<MoviesInsert />} />
        <Route path="/movies/update/:id" element={<MoviesUpdate />}
        />
      </Routes>
      </Container>
    </BrowserRouter >
  );
}

export default App;
