import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import { withPrefix } from 'gatsby';
import AboutImg from './AboutImg';
import DataContext from '../../context/context';

const About = () => {
  const { theme, about } = useContext(DataContext);
  const { img, resume } = about;

  return (
    <section id={`about-${theme}`}>
      <Container>
        <Fade bottom>
          <Row className="section-title">
            <h2> About Me </h2>
          </Row>
          <Row>
            <Col md={5} sm={12}>
              <div className="about-image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Col>
            <Col md={7} sm={12}>
              <div className="about-info">
                <p>
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
                <p>
                  During the past decade, I have explored many really cool fields, from robotics to
                  brain–computer interface (BCI), from computer graphics to VR/AR, and from
                  human-computer interaction (HCI) to cyber security.
                </p>
                <p>
                  I used to be a graduate researcher and have published several papers in the top
                  conferences for Affective Computing. From 2017, I work for Amazon as software
                  development engineer, designing and implementing the world-class authentication
                  and authorization systems.
                </p>
              </div>
              <div className="d-flex justify-content-center">
                {resume && (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    id="resume-button"
                    href={withPrefix(`${resume}`)}
                  >
                    Resume
                  </a>
                )}
              </div>
            </Col>
          </Row>
        </Fade>
      </Container>
    </section>
  );
};

export default About;
