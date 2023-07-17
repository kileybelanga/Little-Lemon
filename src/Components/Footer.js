import './Footer.css'
import Nav from './Nav.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faHashtag, faCamera} from '@fortawesome/free-solid-svg-icons'

const facebook = <FontAwesomeIcon icon={faThumbsUp} size="lg"/>
const twitter = <FontAwesomeIcon icon={faHashtag} size="lg"/>
const instagram = <FontAwesomeIcon icon={faCamera} size="lg" padding="20px"/>

function SocialIcons(){ 
    return(
 <ul className='socialWrapper'>
<li className='socialIcon'>{facebook} </li>
<li className='socialIcon'>{twitter} </li>
<li className='socialIcon'>{instagram} </li>
</ul>
)
};

function Footer() {
    return (
    <footer>
        <section>
        <div>
        <img className = "footerLogo" src="/logo.png" alt='Logo for Little Lemon Restaurant.'/>
        </div>
        <div>
             <Nav/>
           <SocialIcons />
        </div>
        </section>
    </footer>
    );
  }
  export default Footer;
