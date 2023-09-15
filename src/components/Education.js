import React from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { Zoom } from "react-awesome-reveal";

export default function Education(props) {
  return (
    <Container className="containerTextEducation" id="education">
      <div className="containerText aboutMe">
        <div className="aboutOne">
          <div className="titlle">
            <Zoom>
              <div>
                {" "}
                <span className="orange smallText">03. </span>
                {props.show ? "Edukacja" : "Education"} <hr />
              </div>
            </Zoom>
          </div>
          <div className="textAboutMe">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={5}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">
                        <img
                          alt=""
                          src="https://img.icons8.com/sf-regular/16/f79f1d/double-right.png"
                        />
                        {props.show
                          ? " Bootcamp/Kursy IT"
                          : " BOOTCAMP/COURSE IT"}
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">
                        <img
                          alt=""
                          src="https://img.icons8.com/sf-regular/16/f79f1d/double-right.png"
                        />
                        {props.show
                          ? "Szkoła Główna Handlowa"
                          : "WARSAW SCHOOL OF ECONOMICS (SGH)"}
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tree">
                        <img
                          alt=""
                          src="https://img.icons8.com/sf-regular/16/f79f1d/double-right.png"
                        />
                        {props.show
                          ? "Wyższa Szkoła Zarządzania i Finansów"
                          : "HIGHER SCHOOL OF MANAGEMENT AND FINANCE"}
                      </Nav.Link>
                    </Nav.Item>
                 
                
                  </Nav>
                </Col>
                <Col sm={7}>
                  {props.show ? (
                    <Tab.Content>
                      <Tab.Pane className="inDown" eventKey="first">
                        <p> BOOTCAMP AKADEMIA 108</p>
                        <ul>
                          <li>FullStack Developer MERN (2023)</li>
                        </ul>
                        <p> KURSY UDEMY </p>
                        <ul>
                          <li>
                            {" "}
                            Bootstrap od Zera do Mastera - stwórz znakomite
                            projekty www
                          </li>
                          <li> React CRUD Operations with Axios</li>
                          <li> React - pierwsze kroki</li>
                          <li>
                            {" "}
                            Kurs React. Twórz nowoczesne aplikacje internetowe z
                            React.
                          </li>
                        </ul>
                        <p>
                          {" "}
                          EGZAMIN 70-282 – Praktyczne wykorzystanie
                          zintegrowanego system informatycznego Microsoft SBS w
                          przedsiębiorstwach MŚP ( Active Directory, Zarządzanie
                          Serwerem).
                          <br />
                          CERTYFIKAT MCP ID#6116500
                        </p>
                        <p> AKADEMIA LIDERA - Zarządzanie, Ludzie, Rozwój.</p>
                      </Tab.Pane>
                      <Tab.Pane className="inDown" eventKey="second">
                        <p> SZKOŁA GŁÓWNA HANDLOWA W WARSZAWIE 2012/2013</p>
                        <br />
                        <ul>
                          <li>
                            {" "}
                            Podyplomowe Studia dla Menedżerów Motoryzacji.
                          </li>
                        </ul>
                      </Tab.Pane>

                      <Tab.Pane className="inDown" eventKey="tree">
                        <p> WYŻSZA SZKOŁA ZARZĄDZANIA I FINANSÓW (2002-2006)</p>
                        <br />
                        <ul>
                          <li> Wydział Informatyki i Ekonometrii</li>
                          <li> Tytuł: Inżynier</li>
                          <li>
                            {" "}
                            Specjalizacja: Sieci i systemy teleinformatyczne w
                            zarządzaniu
                          </li>
                        </ul>
                      </Tab.Pane>
                     
                    </Tab.Content>
                  ) : (
                    <Tab.Content>
                      <Tab.Pane className="inDown" eventKey="first">
                        <p> BOOTCAMP AKADEMIA 108</p>
                        <ul>
                          <li>FullStack Developer MERN (2023)</li>
                        </ul>
                        <p> UDEMY COURSES </p>
                        <ul>
                          <li>
                            {" "}
                            Bootstrap from Zero to Master - Create Excellent Web
                            Projects
                          </li>
                          <li> React CRUD Operations with Axios</li>
                          <li> React - Getting Started</li>
                          <li>
                            {" "}
                            React Course - Build Modern Web Applications with
                            React
                          </li>
                        </ul>
                        <p>
                          EXAM 70-282 - Practical Use of the Integrated IT
                          System Microsoft SBS in SMEs (Active Directory, Server
                          Management).
                        </p>
                        <p> MCP CERTIFICATE ID#6116500</p>
                        <p>
                          {" "}
                          Leadership Academy - Leadership, People, Development.
                        </p>
                      </Tab.Pane>

                      <Tab.Pane className="inDown" eventKey="second">
                        <p> WARSAW SCHOOL OF ECONOMICS (SGH) 2012/2013</p>
                        <br />
                        <ul>
                          <li>
                            {" "}
                            Postgraduate Studies for Automotive Managers.
                          </li>
                        </ul>
                      </Tab.Pane>
                      <Tab.Pane className="inDown" eventKey="tree">
                        <p>
                          {" "}
                          HIGHER SCHOOL OF MANAGEMENT AND FINANCE (2002-2006)
                        </p>
                        <br />
                        <ul>
                          <li> Faculty of Informatics and Econometrics</li>
                          <li> Degree: Engineer</li>
                          <li>
                            {" "}
                            Specialization: Networks and Teleinformatics Systems
                            in Management.
                          </li>
                        </ul>
                      </Tab.Pane>
                      <Tab.Pane className="inDown" eventKey="four">
                        <p> PHO-BOS PHOTOGRAPHIC VOCATIONAL SCHOOL </p>
                        <br />
                        <ul>
                          <li>Degree: Photographer</li>
                          <li> Specialization: Product Photography.</li>
                        </ul>
                      </Tab.Pane>
                      <Tab.Pane className="inDown" eventKey="fife">
                        <p> MECHANICAL TECHNICAL SCHOOL NO. 2 IN WROCŁAW</p>
                        <br />
                        <ul>
                          <li>Degree: Mechanical Technician .</li>
                          <li> Specialization: Machine Construction</li>
                        </ul>
                      </Tab.Pane>
                    </Tab.Content>
                  )}
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </div>
        <div className="aboutTwo"></div>
      </div>
    </Container>
  );
}
