import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import { getAllCards } from '../../redux/actions';
import CardDetails from '../CardDetails/CardDetails';
import CardList from '../CardList/CardList';
import Profile from '../Profile/Profile';

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
        <Route path="/profile" element={<Profile />} />
        <Route path="/cards" element={<CardList />} />
        <Route path="/cards/:id" element={<CardDetails />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </div>
  );
};

export default App;
