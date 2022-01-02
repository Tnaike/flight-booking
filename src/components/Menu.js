import Logo from '../assets/Abacus-air-logo.png';
import {FaRegUser} from 'react-icons/fa';

const Menu = () => {
  return (
    <div className='navWrap container'>
      <div className='logoWrap'>
        <img src={Logo} alt='logo' />
      </div>
      <nav>
        <ul>
          <li>
            <a href='about'>About</a>
          </li>
          <li>
            <a href='booking'>Booking</a>
          </li>
          <li>
            <a href='services'>Services</a>
          </li>
          <li>
            <a href='flight-info'>Flight Info</a>
          </li>
          <li>
            <a href='contact'>Contacts</a>
          </li>
        </ul>
      </nav>
      <div className='accountWrap'>
        <ul>
          <li><FaRegUser className='faIcon'/>Login</li>
          <span className='divider'>|</span>
          <li>Sign up</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
