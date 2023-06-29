import './Testimonials.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const star = <FontAwesomeIcon icon={faStar} size='md'/>

function Rating(){ 
    return(
 <ul className='ratingWrapper'>
<li className='ratingStar'>{star} </li>
<li className='ratingStar'>{star} </li>
<li className='ratingStar'>{star} </li>
<li className='ratingStar'>{star} </li>
<li className='ratingStar'>{star} </li>
</ul>
)
};

function Card(props){
    return(
<div className='testimonialWrapper'>
<div className='testimonialBody'>
    <Rating/>
    <p className='cardTestimonial'>{props.testimonial}</p>
    <p className='cardCustomer'>{props.customer}</p>
</div>
</div>
    )
}

function Main() {
    return (
  <section className='testimonialSection'>
    <div className="testimonialHeader">
<h1>Testimonials</h1>
    </div>
<div className='testimonialCards'>
<Card
testimonial="Little Lemon was the best restaurant I have ever eaten at. I will be back."
customer="- Sarah N."/>
<Card
img="/lemon-cake.jpg"
testimonial="If I could eat here every night I would. My favorite dish was the Lemon Cake. So good!!"
customer="- Jake P."/>
<Card
img="/bruchetta.png"
testimonial="You can tell the owners really love this place. You can taste it in every bite!"
customer="- Mary M."/>
    </div>
  </section>
    );
  }
  export default Main;
 