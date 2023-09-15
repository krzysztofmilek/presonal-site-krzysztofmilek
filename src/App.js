import "./App.css";
import Social from "./components/Social";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Expirance from "./components/Expirance";
import Contact from "./components/Contact";
import React from "react";
import { useRef, useState, useMemo, useEffect } from "react";
import { Container } from "react-bootstrap";
import "animate.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import OverlayTrig from "./components/overLay/OverlayTrig";
import {
  /* Fade, Bounce, Flip, JackInTheBox, Rotate, Slide, */ Zoom,
} from "react-awesome-reveal";
import Projects from "./components/Projects";
import ItRoad from "./components/ItRoad";

function App() {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [show, setShow] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };
  const options = useMemo(() => {
    return {
      threshold: 0.3,
    };
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);
    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef, options]);
  return (
    <div className="App">
      <div id="home">
        <div className="navBarPosition">
          <Navbar
            collapseOnSelect
            expand="lg"
            variant="dark"
            position="sticky"
            className="contactDown "
            border="1px sold red"
          >
            <Container fluid>
              <Navbar.Brand className="logo" href="#home">
                K2<span className="orange">web</span>dev
              </Navbar.Brand>
              <span>
                {show ? (
                  <OverlayTrig
                    imagePath="https://img.icons8.com/color/20/great-britain.png"
                    toltip="EN"
                    onClick={(e) => {
                      setShow(!show);
                    }}
                  />
                ) : (
                  <OverlayTrig
                    imagePath="https://img.icons8.com/color/20/poland.png"
                    toltip="PL"
                    onClick={(e) => {
                      setShow(!show);
                    }}
                  />
                )}
              </span>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav" className="menuRight">
           
                {show ? (
                  <Nav className="pe-5">
                    <Nav.Link href="#home" className="about">
                      <span className="orange"></span> Home
                    </Nav.Link>
                    <Nav.Link href="#about" className="about">
                      <span className="orange">01.</span> O mnie
                    </Nav.Link>
                      <Nav.Link href="#itroad" className="course">
                      <span className="orange">02.</span> My IT Road{" "}
                    </Nav.Link> 
                    <Nav.Link href="#education" className="course">
                      <span className="orange">03.</span> Edukacja{" "}
                    </Nav.Link>
                    <Nav.Link href="#projects" className="projects">
                      <span className="orange">04.</span> Projekty
                    </Nav.Link>
               {/*      <Nav.Link href="#expirance" className="expirance">
                      <span className="orange">05.</span> Doświadczenie
                    </Nav.Link> */}
                    <Nav.Link href="#contact" className="contact">
                      <span className="orange">05.</span> Kontakt{" "}
                    </Nav.Link>
                  </Nav>
                ) : (
                  <Nav className="pe-5">
                    <Nav.Link href="#home" className="about">
                      <span className="orange"></span> Home
                    </Nav.Link>
                    <Nav.Link href="#about" className="about">
                      <span className="orange">01.</span> About Me
                    </Nav.Link>
                      <Nav.Link href="#itroad" className="course">
                      <span className="orange">02.</span> My IT Road{" "}
                    </Nav.Link> 
                    <Nav.Link href="#education" className="course">
                      <span className="orange">03.</span> Education{" "}
                    </Nav.Link>
                    <Nav.Link href="#projects" className="projects">
                      <span className="orange">04.</span> Projects
                    </Nav.Link>
                   {/*  <Nav.Link href="#expirance" className="expirance">
                      <span className="orange">05.</span> Expirance
                    </Nav.Link> */}
                    <Nav.Link href="#contact" className="contact">
                      <span className="orange">05.</span> Contact{" "}
                    </Nav.Link>
                  </Nav>
                )}
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <Zoom>
          {show ? (
            <Container className="containerTextInsaid ">
              <div className="orange containerText heartBeat" ref={targetRef}>
                <span className={isVisible ? "hi" : ""}>
                  Cześć, nazywam się
                </span>
              </div>
              <div className="name containerText ">Krzysztof Miłek.</div>
              <div className="containerText fullStack">
                FullStack MERN Developer, inżynier, fotograf, nurek.
              </div>

              <p className="pStack">
                <b>PROGRAMOWANIE</b>
                <br />
                {/* Specjalizuję się w tworzeniu oprogramowania dla Klientów indywidualnych, małych firm a także dużych korporacji.<br /> */}
                Pasjonuje mnie tworzenie oprogramowania skracającego czas
                dostępu do dokumentów poprzez digitalizację i standaryzację
                procesów a także tworzenie aplikacji ułatwiających codzienne
                czynności.
              </p>

              <p className="pStack">
                <b>FOTOGRAFIA</b>
                <br />
                Mój konik to packshoty oraz fotografia produktowa
              </p>

              <p className="pStack">
                <b> NURKOWANIE</b>
                <br />
                LifeStyl, forma spędzania wolnego czasu z rodziną i
                przyjaciółmi. Żródło ekstremalnych przeżyć oraz wielu nowych
                znajomości. Jedyna znana mi dziedzina w której osiągnięcie dna
                to sukces :-)
              </p>
            </Container>
          ) : (
            <Container className="containerTextInsaid">
              <div className="orange containerText heartBeat" ref={targetRef}>
                <span className={isVisible ? "hi" : ""}>
                  {" "}
                  Hello, my name is{" "}
                </span>
              </div>
              <div className="name containerText ">Krzysztof Miłek.</div>
              <div className="containerText fullStack">
                {" "}
                I'm a FullStack MERN Developer, engineer, photographer, and
                diver.
              </div>

              <p className="pStack">
                <b>PROGRAMMING</b>
                <br />I am passionate about creating software that streamlines
                access to documents through digitalization and process
                standardization, as well as developing applications that
                simplify everyday tasks.
              </p>

              <p className="pStack">
                <b>PHOTOGRAPHY</b>
                <br />
                My passion lies in packshots and product photography
              </p>

              <p className="pStack">
                <b> DIVING</b>
                <br />
                Diving is a lifestyle, a way to spend leisure time with family
                and friends. It's a source of extreme experiences and many new
                acquaintances. It's the only field I know of where reaching the
                bottom is a success :-)
              </p>
            </Container>
          )}
        </Zoom>
      </div>
      <Social show={show} />
      <AboutMe show={show} />
      <ItRoad show={show} />
      <Education show={show} />
      <Projects show={show} />
   {/*  <Expirance show={show} /> */}
      <Contact show={show} />
    </div>
  );
}

export default App;
