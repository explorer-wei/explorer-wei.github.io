import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import DataContext from '../../context/context';
import ProjectImg from './ProjectImg';
import './projects.scss';

const Projects = () => {
  const { theme, projects } = useContext(DataContext);

  return (
    <section id={`projects-${theme}`}>
      <Container>
        <Fade bottom>
          <Row className="section-title">
            <h2> Projects </h2>
          </Row>
        </Fade>

        {projects.map((project) => {
          const { title, desc, tags, doc, demo, repo, images } = project;
          return (
            <Fade bottom>
              <Row className="project-card">
                <Col lg={7} sm={12}>
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
                    {doc && (
                      <a
                        href={doc}
                        aria-label="external-link"
                        className="icon-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-external-link" />
                      </a>
                    )}
                    {demo && (
                      <a
                        href={demo}
                        aria-label="external-link"
                        className="icon-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-video-camera" />
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
                </Col>
                <Col lg={5} sm={12}>
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
                </Col>
              </Row>
            </Fade>
          );
        })}
      </Container>
    </section>
  );
};

export default Projects;
