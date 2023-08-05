import './/Nav.css';
import {Link} from 'react-router-dom'

function Navlinks() {
    return (
        <ul>
            <li><Link to ="/"> Home </Link></li>
            <li><a href='kileybelanga.com'>About</a></li>
            <li><a href='kileybelanga.com'>Menu</a></li>
            <li><a href='kileybelanga.com'>Reservations</a></li>
            <li><a href='kileybelanga.com'>Order Online</a></li>
            <li><a href='kileybelanga.com'>Login</a></li>
        </ul>
    );
  }
  export default Navlinks;