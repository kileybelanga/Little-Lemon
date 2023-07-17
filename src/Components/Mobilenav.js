import './/Nav.css';
import Navlinks from "./Navlinks"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';



function Mobilenav() {
    const [open, setOpen] = useState(false);
    return (
      <nav className="MobileNav">
        <FontAwesomeIcon className="hamburger"icon={faBars} style={{color: "#495e57",}}
            onClick = {() => setOpen(!open)} />
{open && <Navlinks/>}
      </nav>
    );
  }
  export default Mobilenav;