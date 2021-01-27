import React, { useContext } from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-scroll';
import { Container } from 'react-bootstrap';
import DataContext from '../../context/context';
import './header.scss';

function Header() {
  const { theme, toggleTheme } = useContext(DataContext);

  return (
    <Headroom>
      <header id={`header-${theme}`}>
        <Container>
          <ul>
            <li>
              <button onClick={toggleTheme} className="button">
                {theme === 'light' ? <i className="fa fa-sun-o" /> : <i className="fa fa-moon-o" />}
              </button>
            </li>
            <li>
              <Link to={`projects-${theme}`} smooth duration={1000}>
                Projects
              </Link>
            </li>
            <li>
              <Link to={`about-${theme}`} smooth duration={1000}>
                About
              </Link>
            </li>
          </ul>
        </Container>
      </header>
    </Headroom>
  );
}
export default Header;
