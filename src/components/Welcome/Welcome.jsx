import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Typed from 'react-typed';
import DataContext from '../../context/context';
import './welcome.scss';

const Header = () => {
  const { theme, contacts } = useContext(DataContext);

  return (
    <section id={`welcome-${theme}`} className="jumbotron">
      <Container>
        <p className="welcome-message">
          <Typed
            strings={[
              "Hey, my name is Wei. <br> I'm a ^200 hungry learner",
              "Hey, my name is Wei. <br> I'm a ^200 curious researcher",
              "Hey, my name is Wei. <br> I'm a ^200 passionate developer.",
            ]}
            typeSpeed={60}
            backSpeed={20}
            cursorChar=""
          />
        </p>
        <Fade bottom duration={1000} delay={3000} distance="30px">
          <div className="social-links">
            {contacts.map((contact) => {
              const { name, url } = contact;
              return (
                <a href={url} rel="noopener noreferrer" target="_blank" aria-label={name}>
                  <i className={`fa fa-${name || 'refresh'}`} />
                </a>
              );
            })}
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
