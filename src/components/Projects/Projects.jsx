import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import DataContext from '../../context/context';
import ProjectImg from './ProjectImg';
import './projects.scss';

const Projects = () => {
  const { theme, projects } = useContext(DataContext);

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
    <section id={`projects-${theme}`}>
      <Container>
        <div className="project-section">
          <Fade bottom duration={1000} delay={300} distance="0px">
            <h2 className="section-title"> Projects </h2>
          </Fade>

          {projects.map((project) => {
            const { title, desc, tags, url, repo, images } = project;
            return (
              <Row>
                <Col lg={6} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-text">
                      <h3 className="project-title">{title}</h3>
                      <p> {desc} </p>

                      {tags.length > 0 && (
                        <ul className="project-tags">
                          {tags.map((tag) => (
                            <li>{tag}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="project-links">
                      {url && (
                        <a
                          href={url}
                          aria-label="external-link"
                          className="icon-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-external-link" />
                        </a>
                      )}
                      {repo && (
                        <a
                          href={repo}
                          aria-label="github-repo"
                          className="icon-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-github" />
                        </a>
                      )}
                    </div>
                  </Fade>
                </Col>
                <Col lg={6} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-image">
                      <Carousel controls={images.length > 1}>
                        {images.map((img) => {
                          return (
                            <Carousel.Item>
                              <ProjectImg alt={title} filename={img} />
                            </Carousel.Item>
                          );
                        })}
                      </Carousel>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
