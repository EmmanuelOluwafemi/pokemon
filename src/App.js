import React from 'react';

import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
// import { Route } from 'react-router';

import { PokemonProvider } from './context/PokemonContext';

import Header from './components/Header'
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  
  return (
    <PokemonProvider>
      <div className="h-full max-w-screen-lg mx-auto px-6 md:px-0">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:name" element={<Details />} />
          </Routes>
        </Router>
      </div>
    </PokemonProvider>
  );
}

export default App;
