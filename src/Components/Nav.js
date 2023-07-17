
import './/Nav.css';
import Desktopnav from "./Desktopnav"
import Mobilenav from "./Mobilenav"

function Nav() {

    return (
      <nav className="navigation">
    <Desktopnav />
    <Mobilenav />
      </nav>
    );
  }
  export default Nav;
