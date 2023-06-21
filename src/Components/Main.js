
function orderOnline(){
    return (
        alert('You clicked me!')
    )
};

function Card(props){
    return(
<div className='wrapper'>
<div className='cardBody'>
    <img src= {props.img} />
    <h1 className='specialsTile'>{props.title}</h1>
    <p className='description'>{props.description}</p>
    <button className='button-secondry'>Order Online</button>
</div>
</div>
    )
}

function Main() {
    return (
  <section className='mainSection'>
    <div className="specialsHeader">
<h1>Specials</h1>
<button className="button-secondary" onClick={orderOnline}>Order Online</button>
    </div>
    <div className='specialsCards'>
<Card
img="/restauranfood.jpg"
title="Dish Title"
description="dish description text goes here."/>
    </div>
  </section>
    );
  }
  export default Main;
