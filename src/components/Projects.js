import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/dapp1.png";
import projImg2 from "../assets/img/hms.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/2048.png";
import projImg5 from "../assets/img/cart2.png";
import projImg6 from "../assets/img/tms.jpg";
import projImg7 from "../assets/img/gun.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Decentalized App",
      description: "Decentralised App [ A blockchain based project ]",
      imgUrl: projImg1,
    },
    {
      title: "Hospital-Management Project",
      description: "A database management system based project",
      imgUrl: projImg2,
    },
    {
      title: "Tourism-Management Project",
      description: "Tourism Website | Using HTML , CSS , Bootstrap , Javascript for FrontEnd | MySQL and PHP for Backend",
      imgUrl: projImg6,
    },
    {
      title: "A game called 2048",
      description: "Shell script based project",
      imgUrl: projImg4,
    },
    {
      title: "Basic cart using React js",
      description: "Cart Functions",
      imgUrl: projImg5,
    },
    {
      title: "Peer-to-Peer Messaging app",
      description: "Blockchain based project using React and Gunjs",
      imgUrl: projImg7,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Few projects which i have developed with the help of my teammates and teachers. To find source codes of projects , check out my github profile.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>MORE PROJECTS COMING SOON!</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
