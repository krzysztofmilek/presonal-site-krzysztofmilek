import React from "react";
import img01 from "../img/img01111.jpg";
import { Container } from "react-bootstrap";

import {
  /* Fade, Bounce, Flip, JackInTheBox, Rotate, Slide, */ Zoom,
} from "react-awesome-reveal";

export default function AboutMe(props) {
  return (
    <Container className="containerTextAboutMe" id="about">
      <div className="containerText aboutMe">
        <div className="aboutOne">
          <div className="titlle">
            {props.show ? (
              <Zoom>
                <div>
                  <span className="orange smallText">01. </span>O mnie <hr />
                </div>
              </Zoom>
            ) : (
              <Zoom>
                <div>
                  <span className="orange smallText">01. </span>About Me <hr />
                </div>
              </Zoom>
            )}
          </div>
          <div className="textAboutMe">
            {props.show ? (
              <span>
                {" "}
                <img className="img01" src={img01} alt="" /><p>Cześć, mam na imię Krzysiek</p><br />
                <p className="text-justified akapit"> Jestem inżynierem o profilu informatyczno-ekonometrycznym oraz pasjonatą świata podwodnego.
                W bieżącym roku ukończyłem bootcamp Full Stack MERN Developer oraz kilkanaście kursów głównie w zakresie React, Node, Express, MongoDB.<br />
Jestem absolwentem studów podyplomowych w SGH w Warszawie w zakresie zarządzania w sektorze motoryzacyjnym. <br />
Nieustannie rozwijam swoją ścieżkę nurkowania technicznego oraz kwalifikowanego przewodnika grup nurkowych (Dive Master).<br />
Wieczorami czytuję Stephana Kinga czy Clive'a Cusslera, a cisze i relaks znajduję w muzyce <br />
</p><br />

<br />
<p className="text-justified">
<b>Przebranżowienie?</b>
<br />
<p className="text-justified akapit"> Po ukończeniu studiów przez 7 lat pracowałem jako informatyk, administrator serwerów oraz wdrożeniowiec usług marketingowych w AMICAR. <br />
Świetnie rozumiejąc branże i mechanizmy sprzedażowe, skorzystałem z możliwości rozwoju w zakresie zarządzania sprzedażą bezpośrednią co 
ówcześnie dawało mi klarowną perspektywę rozwoju a także nabycie bezcennych umiejętności współpracy z Klientem.<br />
Obecnie, zmiany na rynku stały się impulsem do głębszych refleksji nad ścieżką kariery zawodowej i - w oczywisty sposób - powrotem do moich korzeni.<br /><br /></p>
<p className="text-justified akapit">
Wybór ścieżki Full Stack MERN pozwala mi nie tylko programować na różnych płaszczyznach czy też dostarczać efektywne rozwiązania na czas, 
ale także poszerza zakres moich umiejętności. Mam wiele do zaoferowania w tej dziedzinie. Determinacja, pasja do nauki oraz do 
ciągłego doskonalenia stanowią klucz do przygotowania się na wyzwania, jakie przyniesie mi przyszłość.</p>
<br /><br />
<p className="text-justified akapit">
Moje zainteresowania nauczyły mnie cierpliwości w osiąganiu celów oraz czerpania radości z nagrody odroczonej w czasie. 
Nurkowanie wpłynęło na moją odpowiedzialność, ścisłe przestrzeganie procedur, weryfikację umiejętności, analizę błędów i regularne ćwiczenia.<br /> <br />

Te cechy kształtują moją potrzebę rozwiązywania problemów, zarówno w implementacji logiki systemów, jak i w codziennych sytuacjach. Analityczny umysł, metodyka oraz konsekwencja w działaniu stały się moim kluczem do sukcesu.</p>
</p>

              </span>
            ) : (
              <span>
                {" "}
                <img className="img01" src={img01} alt="" />
                <p>Hi!&nbsp;My name is Krzysiek, I'm from Poland.</p>
                <br />
                <p className="text-justified akapit"> I am an engineer with a background in computer science and econometrics, as well as a passionate diver.
This year, I completed the Full Stack MERN Developer bootcamp and several courses mainly focused on React, Node, Express, and MongoDB.<br />
I am a graduate of postgraduate studies at SGH in Warsaw in the field of management in the automotive sector. <br />
I am constantly developing my technical and qualified diving skills as a Dive Master guide for diving groups.<br />
In the evenings, I enjoy reading Stephen King or Clive Cussler, and I find peace and relaxation in music. <br />
</p><br />

<br />
<p className="text-justified">
<b>Change of industry...?</b>
<br />
<p className="text-justified akapit"> After completing my studies, I worked as an IT specialist, server administrator, and marketing services implementer at AMICAR for 7 years. <br />
With a deep understanding of the industry and sales mechanisms, I took the opportunity to develop my skills in direct sales management, which at that time provided me with a clear career perspective and invaluable customer collaboration skills.<br />
Currently, changes in the market have prompted me to reflect more deeply on my career path and, quite naturally, to return to my roots.<br /><br /></p>
<p className="text-justified akapit">
Choosing the Full Stack MERN path not only allows me to program on various levels and deliver effective solutions on time but also broadens the scope of my skills. I have a lot to offer in this field. Determination, a passion for learning, and a commitment to continuous improvement are the keys to preparing for the challenges that the future will bring.

My interests have taught me patience in achieving goals and finding joy in delayed rewards. Diving has influenced my sense of responsibility, strict adherence to procedures, skill verification, error analysis, and regular practice.<br /><br />

These qualities shape my need to solve problems, both in implementing system logic and in everyday situations. An analytical mind, methodology, and consistency in action have become my keys to success.</p>
                </p></span>
            )}

            <Container className="stackAboutMe">
            {props.show ? (
              <div className="stackAboutMe">
                {" "}
                Poniżej kilka technologii z którymi miałem ostatnio okazję
                pracować:
              </div>):(<div className="stackAboutMe">
                {" "}
                Below are a few technologies I've had the opportunity to work with recently
              </div>)}

              <div className="stackText col-4 sm-6 pt-3">
                {" "}
                <img
                  src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png"
                  alt=""
                />{" "}
                JavaScript
              </div>
              <div className="stackText col-4 sm-6">
                {" "}
                <img
                  src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png"
                  alt=""
                />{" "}
                MySQL
              </div>
              <div className="stackText col-4 sm-6">
                {" "}
                <img
                  src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png"
                  alt=""
                />{" "}
                React
              </div>

              <div className="stackText col-4 sm-6">
                {" "}
                <img
                  src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png"
                  alt=""
                />{" "}
                MongoDB
              </div>
              <div className="stackText col-4 sm-6">
                {" "}
                <img
                  src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png"
                  alt=""
                />{" "}
                AXIOS
              </div>
              <div className="stackText col-4 sm-6">
                {" "}
                <img
                  src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png"
                  alt=""
                />{" "}
                NodeJs
              </div>

              <div className="stackText col-4 sm-6">
                {" "}
                <img
                  src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png"
                  alt=""
                />{" "}
                ExpressJS
              </div>
              <div className="stackText col-4 sm-6 ">
                {" "}
                <img
                  src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png"
                  alt=""
                />{" "}
                Bootstrap
              </div>
              <div className="stackText col-4 sm-6 ">
                {" "}
                <img
                  src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png"
                  alt=""
                />{" "}
                Sass
              </div>

              <div className="stackText col-4 sm-6 ">
                {" "}
                <img
                  src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png"
                  alt=""
                />{" "}
                Redux
              </div>
              <div className="stackText col-4 sm-6 ">
                {" "}
                <img
                  src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png"
                  alt=""
                />{" "}
                CSS
              </div>
              <div className="stackText col-4 sm-6 ">
                <img
                  src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png"
                  alt=""
                />{" "}
                HTML
              </div>
            </Container>
          </div>
        </div>

        <div className="aboutTwo"></div>
      </div>
    </Container>
  );
}
