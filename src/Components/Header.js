import Nav from './Nav.js'
import './Header.css'
import React from 'react';

function reserve(){
    return (
        alert('You clicked me!')
    )
};

function Header() {
    return (
        <React.Fragment>
        <section className='headerMain'>
        <img src="/logo.png" alt='Logo for Little Lemon Restaurant.' width='200px' height='auto'/>
      <Nav />
      </section>
    <section className='heroMain'>
        <div className='textMain'>
            <div className="innerText">
    <h1 className="text-white headerName">Little Lemon</h1>
    <p className="text-white">Chicago</p>
    <p className='text-white p-12'>One of Chicago's most beloved restaurants, Little Lemon has welcomed guests to enjoy 
        its contemporary American cuisine, warm hospitality, and unparalleled service for over two decades. 
       Little Lemon's ever-evolving seasonal menu showcases the restaurant's relationships with 
        local farms and purveyors.</p>

        <button className='button-primary'onClick={reserve}>Reserve a Table</button>
        </div>
        </div>
    <div className='imageMain'>
    </div>
    </section>
    </React.Fragment>
    );
  }
  export default Header;
