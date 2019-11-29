import React from 'react';
import './App.css';

// Components
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Collaborators from '../components/Collaborators/Collaborators';
import Blog from '../components/Blog/Blog';

function App() {
  return (
    <div className='App'>
      <Header />
      <About />
      <Collaborators />
      <Blog />
    </div>
  );
}

export default App;
