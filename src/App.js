import React from 'react';
import Header from './/Components/Header.js';
import Main from './/Components/Main.js';
import Testimonials from './/Components/Testimonials.js'
import Footer from './/Components/Footer.js';
import About from './/Components/About.js';
import './App.css';

function App() {
  return (
    <React.Fragment className="App">
<Header />
<Main />
<Testimonials />
<About />
<Footer />
    </React.Fragment>
  );
}

export default App;
