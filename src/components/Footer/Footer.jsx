import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import DataContext from '../../context/context';
import './footer.scss';

const Footer = () => {
  const { theme } = useContext(DataContext);

  return (
    <footer id={`footer-${theme}`}>
      <Container>
        <span className="back-to-top">
          <Link to={`welcome-${theme}`} smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <p className="footer__text">© 2020 - Last Updated by Wei Huang</p>
      </Container>
    </footer>
  );
};

export default Footer;
