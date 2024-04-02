import React from 'react';
import Main from './pages/Main/Main';
import Work from './pages/Work/Work';
import Text from './pages/Text/Text';
import Carousel from './pages/Carousel/Carousel';
import Description from './pages/Description/Description';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Main />
      <Work />
      <Text />
      <Carousel />
      <Description />
      <Contact />
    </div>
  );
}

export default App;
