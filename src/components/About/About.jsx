import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import AboutImg from './AboutImg';
import DataContext from '../../context/context';
import { withPrefix } from 'gatsby';

const About = () => {
  const { theme, about } = useContext(DataContext);
  const { img, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id={`about-${theme}`}>
      <Container>
        <Fade bottom duration={1000} delay={300} distance="0px">
          <h2 className="section-title"> About Me </h2>
        </Fade>
        <Row className="about-wrapper">
          <Col md={5} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={7} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-info">
                <p className="about-info-text">
                  My technical journey began from
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://en.wikipedia.org/wiki/Tsinghua_University"
                  >
                    {' '}
                    Tsinghua University
                  </a>{' '}
                  in China, where I got my Bachelor degree in{' '}
                  <i>Electronic Information Science and Technology</i>. Then I recieved a full
                  scholarship from
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://en.wikipedia.org/wiki/Virginia_Tech"
                  >
                    {' '}
                    Virginia Tech{' '}
                  </a>
                  to pursue my graduate studies in <i>Computer Science</i>.
                </p>
                <p className="about-info-text">
                  During the past decade, I have explored many really cool fields, from robotics to
                  brain–computer interface (BCI), from computer graphics to VR/AR, and from
                  human-computer interaction (HCI) to cyber security.
                </p>
                <p className="about-info-text">
                  I used to be a Graduate Researcher and have published several papers in the top
                  conferences for Affective Computing. Now I'm working in Amazon, designing and
                  implementing the world-class authentication and authorization systems.
                </p>
                <br />
                <div className="d-flex justify-content-center">
                  {resume && (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="button"
                      href={withPrefix(`${resume}`)}
                    >
                      Resume
                    </a>
                  )}
                </div>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
