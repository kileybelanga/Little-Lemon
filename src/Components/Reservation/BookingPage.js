import React from "react";
import Nav from '../Nav.js'
import Footer from'../Footer.js'
import Form from './BookingForm.js'
import {Link} from 'react-router-dom'


function BookingPage() {
    return (
        <React.Fragment>
  <section className='headerMain'>
  <Link to ="/"> <img src="/logo.png" alt='Logo for Little Lemon Restaurant.' width='200px' height='auto'/></Link>
      <Nav />
      </section>
      <section>
        form
      </section>
      <Form />
      <Footer/>
    </React.Fragment>
    );
  }
  export default BookingPage;