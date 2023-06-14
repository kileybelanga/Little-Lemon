import React from 'react';
import Nav from './/Components/Nav.js';
import Header from './/Components/Header.js';
import Main from './/Components/Main.js';
import Footer from './/Components/Footer.js';
import './App.css';

function App() {
  return (
    <React.Fragment className="App">
<Header />
<Nav />
<Main />
<Footer />
    </React.Fragment>
  );
}

export default App;
