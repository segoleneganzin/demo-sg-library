import { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const openResponsiveMenu = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div>
      <nav className={hamburgerOpen ? 'menu--responsive' : 'menu'}>
        <Link to={'/demo-modal'} className='menu__item-link'>
          Modal
        </Link>
      </nav>
      <a
        href='#'
        className='icon'
        onClick={openResponsiveMenu}
        aria-haspopup='true'
        aria-controls='toggleNavbar'
        aria-expanded={hamburgerOpen}
        aria-label='Ouverture du menu'
      >
        <span className='menu__burger-icon'>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </a>
    </div>
  );
};

export default Menu;
