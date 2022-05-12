import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Detail from './components/Detail';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/movie-details" element={<Detail/>}/>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>

  )
}


export default App;