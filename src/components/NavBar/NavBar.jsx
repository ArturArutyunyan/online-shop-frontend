import { Link } from 'react-router-dom';
import navBarLogo from '../../assets/images/apple.svg'
import bagLogo from '../../assets/images/cart4.svg'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className='navBar__content'>
      <Link to="/">
        <h2 className="navBar__title">re:
          <span>Store</span>
        </h2>
      </Link>
      <Link to="/">
        <img className='navBarLogo' alt='Logo' src={navBarLogo} />
      </Link>
      <Link to="/cardPage">
        <div className='bag__content'>
          <img className='bagLogo' alt='Logo' src={bagLogo} />
          <div className='bagCount'>
            <span>0</span>
          </div>
        </div>
      </Link>
    </nav>
  );
}
 
export default NavBar;