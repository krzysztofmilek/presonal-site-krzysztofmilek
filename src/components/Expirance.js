import React from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { Zoom } from "react-awesome-reveal";

export default function Expirance(props) {
  return (
    <Container className="containerTextExpirance" id="expirance">
      <div className="containerText">
        <div className="aboutOne">
          <Zoom>
            {" "}
            <div className="titlle">
              <span className="orange smallText">04. </span>{props.show? "Doświadczenie" : "Expirance"}
              <hr />
            </div>
          </Zoom>
        
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
                    {props.show? "Car Center - Kierownik Działu Sprzedaży":"Car Center - Sales Manager for Commercial Vehicles"}
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">
                        <img
                          alt=""
                          src="https://img.icons8.com/sf-regular/16/f79f1d/double-right.png"
                        />
                        {props.show? "GAM - Kierownik Działu Sprzedaży":"GAM - Sales Manager for Commercial Vehicles"}
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tree">
                        <img
                          alt=""
                          src="https://img.icons8.com/sf-regular/16/f79f1d/double-right.png"
                        />
                          {props.show? "Amicar - Informatyk-Marketingowiec":"Amicar - IT Specialist - Marketing"}
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="four">
                        <img
                          alt=""
                          src="https://img.icons8.com/sf-regular/16/f79f1d/double-right.png"
                        />
                        {props.show? "Foto A.G.A. -laborant":"Photo A.G.A. - Photography Laboratory Technician"}
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={7}>
                  <Tab.Content>
                    {props.show ? (
                      <Tab.Pane className="inDown" eventKey="first">
                        <p> CAR CENTER (2016 - ____)</p>
                        <br />
                        <p> KIEROWNIK SPRZEDAŻY SAMOCHODÓW DOSTAWCZYCH </p>
                        <ul>
                          <li>
                            Podejmowanie działań mających na celu zbudowanie
                            nowej sieci odbiorców, utrzymywanie i dbałość o
                            relacje z pozyskanymi klientami
                          </li>
                          <li>
                            {" "}
                            Aktywna, zewnętrzna sprzedaż samochodów dostawczych
                            i modyfikowanych
                          </li>
                          <li> Relizacja celów sprzedaży</li>
                        </ul>
                      </Tab.Pane>
                    ) : (
                      <Tab.Pane className="inDown" eventKey="first">
                        <p> CAR CENTER (2016 - Present)</p>
                        <br />
                        <p className="textUp"> Sales Manager for Commercial Vehicles</p>
                        <ul>
                          <li>
                            Initiating actions aimed at building a new customer
                            network, maintaining and nurturing relationships
                            with acquired clients.
                          </li>
                          <li>
                            {" "}
                            Active external sales of commercial vehicles and
                            modified models.
                          </li>
                          <li> Achieving sales targets.</li>
                        </ul>
                      </Tab.Pane>
                    )}
                    {props.show ? (
                      <Tab.Pane className="inDown" eventKey="second">
                        <p> GAM (2013 - 2016)</p>
                        <br />
                        <p> KIEROWNIK SPRZEDAŻY SAMOCHODÓW </p>
                        <ul>
                          <li>
                            {" "}
                            Realizowanie polityki sprzedażowej firmy w zakresie
                            sprzedaży dla klientów flotowych
                          </li>
                          <li>
                            {" "}
                            Wprowadzenie systemu monitorowania aktywności CRM.
                            Cel: zwiększenie skuteczności sprzedaży
                          </li>
                          <li>
                            {" "}
                            Współpraca z działem logistyki, kontrolą handlu,
                            działem rozwoju FAP.
                          </li>
                          <li> Zarządzanie zespołem przez KPI</li>
                          <li> Kontrola Sprzedaży</li>
                        </ul>
                      </Tab.Pane>
                    ) : (
                      <Tab.Pane className="inDown" eventKey="second">
                        <p> GAM (2013 - 2016)</p>
                        <br />
                        <p className="textUp"> Sales Manager for Automobiles </p>
                        <ul>
                          <li>
                            {" "}
                            Implementing the company's sales policy for fleet
                            customers.
                          </li>
                          <li>
                            {" "}
                            Introducing a CRM activity monitoring system with
                            the goal of increasing sales effectiveness.
                          </li>
                          <li>
                            {" "}
                            Collaboration with logistics, trade control, and FAP
                            development departments.
                          </li>
                          <li>
                            {" "}
                            Team management through KPI (Key Performance
                            Indicators).
                          </li>
                          <li> Sales monitoring.</li>
                        </ul>
                      </Tab.Pane>
                    )}
                    {props.show ? (
                      <Tab.Pane className="inDown" eventKey="tree">
                        <p> AMICAR (2007-2014)</p>
                        <br />
                         <p>INFORMATYK - SPECJALISTA DS MARKETINGU</p>
                        <ul>
                          <li> Administracja witrynami dealerskimi</li>
                          <li> wdrożenie sklepu internetowego</li>
                          <li> Pozycjonowanie stron – Google Adwords</li>
                          <li>
                            {" "}
                            Opracowanie materiałów identyfikacji
                            wewnętrznej(wizytówki, identyfikatory, papier
                            firmowy i itp)
                          </li>
                          <li>
                            {" "}
                            Administracja systemem zarządzania stacjami
                            dealerskimi DMS
                          </li>
                          <li> Marketing usług</li>
                          <li>
                            {" "}
                            Analiza efektywności kampanii internetowych - Google
                            Analytics
                          </li>
                        </ul>
                      </Tab.Pane>
                    ) : (
                      <Tab.Pane className="inDown" eventKey="tree">
                        <p> AMICAR (2007-2014)</p>
                        <br />
               
                        <p className="textUp">IT Specialist - Marketing</p>
                        <ul>
                          <li> Administration of dealership websites.</li>
                          <li> Implementation of an online store.</li>
                          <li>
                            {" "}
                            Search engine optimization (SEO) - Google Adwords.
                          </li>
                          <li>
                            {" "}
                            Development of internal identity materials (business
                            cards, ID badges, letterhead, etc.).
                          </li>
                          <li>
                            {" "}
                            Administration of Dealership Management System
                            (DMS).
                          </li>
                          <li> Service marketing.</li>
                          <li>
                            {" "}
                            Analysis of internet campaign effectiveness - Google
                            Analytics.
                          </li>
                        </ul>
                      </Tab.Pane>
                    )}
                    {props.show ? (
                      <Tab.Pane className="inDown" eventKey="four">
                        <p> Foto A.G.A (1997-2006)</p>
                        <br />
                        <p> LABORANT FOTOGRAF</p>

                        <ul>
                          <li> Obsługa minilaba Noritsu 3001</li>
                          <li> Obsługa Klienta</li>
                          <li> Testy dzienne, miesięczne</li>
                        </ul>
                      </Tab.Pane>
                    ) : (
                      <Tab.Pane className="inDown" eventKey="four">
                        <p> Photo A.G.A (1997-2006)</p>
                        <br />
                        <p className="textUp"> Photography Laboratory Technician</p>

                        <ul>
                          <li> Operation of the Noritsu 3001 minilab.</li>
                          <li> Customer service.</li>
                          <li> Daily and monthly testing.</li>
                        </ul>
                      </Tab.Pane>
                    )}
                  </Tab.Content>
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
