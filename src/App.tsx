import React from 'react';
import Main from './pages/Main/Main';
import Work from './pages/Work/Work';
import Text from './pages/Text/Text';
import Carousel from './pages/Carousel/Carousel';
import Description from './pages/Description/Description';
import Contact from './pages/Contact/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="home">
              <Main />
              </div>
              <div id="work">
              <Work />
              </div>
              <div id="text">
                <Text />
              </div>
              <div id="carousel">
              <Carousel />
              </div>
              <div id="enterprise">
              <Description />
              </div>
              <div id="contact">
                <Contact />
              </div>
            </>
          }
        />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
