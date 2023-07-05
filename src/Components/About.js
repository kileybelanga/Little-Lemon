
import './About.css'
import React from 'react';


function About() {
    return (
        <React.Fragment>
    <section className='aboutMain'>
        <div className='textMain'>
            <div className="innerText">
    <h1 className="aboutHeadline">Meet the Chef</h1>
    <p className='aboutCopy p-12'>Chef Mark dreamed of owning a restaurant ever since he was little. He has since made that
    dream a reality naming his restaurant after the tree he played under as kid. From there, Little Lemon was born. Chef Mark 
    has enjoyed feeding the people of Chicago day and night.</p>

        <button className='button-primary'>Reserve a Table</button>
        </div>
        </div>
    <div className='chefImage'>
    </div>
    </section>
    </React.Fragment>
    );
  }
  export default About;
