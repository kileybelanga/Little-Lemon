import Nav from './Nav.js'
import './Header.css'
import React from 'react';
import {Link} from 'react-router-dom'


function Header() {

    return (
        <React.Fragment>
        <section className='headerMain'>
        <Link to ="/"><img src="/logo.png" alt='Logo for Little Lemon Restaurant.' width='200px' height='auto'/></Link>
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

        <Link to ="/reservations"> <button className='button-primary'>Reserve a Table</button></Link>
        </div>
        </div>
    <div className='imageMain'>
    </div>
    </section>
    </React.Fragment>
    );
  }
  export default Header;
