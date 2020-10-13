import React from 'react';
import './App.css';
import { Header } from './components/Header';
import NewsFeed from './components/NewsFeed';
import Registration from './components/Registration';
import { Welcome } from './components/Welcome';

function App() {
  return (
    <>
      <Header />
      <div className="container-fluid pt-3">
        <div className="row">
          <Welcome />
          <div className='divider'></div>
          <NewsFeed />
          <div className='divider'></div>
          <Registration />
        </div>
      </div>
    </>
  );
}

export default App;
