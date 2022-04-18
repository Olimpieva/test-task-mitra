import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { getAllCards } from '../../redux/actions';
import Card from '../Card/Card';
import CardList from '../CardList/CardList';

import './App.css';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCards());
  }, [dispatch])

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigate replace to="/cards" />} />
        <Route path="/user" element={<div></div>} />
        <Route path="/cards" element={<CardList />} />
        <Route path="/cards/:id" element={<Card />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </div>
  );
};

export default App;
