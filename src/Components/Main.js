import './Main.css'


function orderOnline(){
    return (
        alert('You clicked me!')
    )
};

function Card(props){
    return(
<div className='wrapper'>
<div className='cardBody'>
    <img src= {props.img} alt=" "/>
    <h1 className='cardTitle'>{props.title}</h1>
    <p className='cardDescription'>{props.description}</p>
    <button className='button-secondary cardButton'>Order Online</button>
</div>
</div>
    )
}

function Main() {
    return (
  <section className='mainSection'>
    <div className="sectionHeader">
<h1>Specials</h1>
<button className="button-secondary" onClick={orderOnline}>Order Online</button>
    </div>
<div className='specialsCards'>
<Card
img="/greek-salad.jpg"
title="Greek Salad"
description="Fresh local lettuce, tomatoes, onions, olives and topped with feta cheese."/>
<Card
img="/lemon-cake.jpg"
title="Lemon Cake"
description="Take a bite of this mouth-watering lemon cake."/>
<Card
img="/bruchetta.png"
title="Bruchetta"
description="House made bread toasted and topped with tomatoes."/>
    </div>
  </section>
    );
  }
  export default Main;
