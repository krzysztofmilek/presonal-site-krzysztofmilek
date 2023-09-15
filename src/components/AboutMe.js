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
                <p className="text-justified"> Jestem inżynierem o profilu informatyczno-ekonometrycznym z pasją do  nurkowania. 
                <br />Moja edukacja obejmuje podyplomowe studia na SGH "Manager Motoryzacji", 
                a także uzyskanie stopnia nurkowego Dive Master i nurka technicznego.
                <br /> Interesuję się literaturą Stephen Kinga i Clive'a Cusslera, a w muzyce przewijają się takie zespoły jak The Rolling Stones, 
                Alice in Chains, Kabe Mo, Pink Floyd i Dżem. <br />
</p><br />
<p><b>Umiejętności i cechy osobiste</b></p>
<p className="text-justified">Hobby, takie jak modelarstwo i gra na instrumencie, nauczyły mnie cierpliwości w osiąganiu celów oraz czerpania radości z nagrody odroczonej w czasie.
Nurkowanie wpłynęło na moją odpowiedzialność, ścisłe przestrzeganie procedur, weryfikację umiejętności oraz permanentną analizę błędów,
 które staram się eliminować poprzez ćwiczenia<br /><br />
Te cechy kształtują moją wręcz obsesyjną potrzebę rozwiązywania problemów, zarówno w implementacji logiki systemów, jak i w codziennych sytuacjach. 
Podchodzę do każdego problemu analitycznie i metodycznie. Dla mnie każdy problem rozwiązany, przeanalizowany i zaimplementowany stanowi cenne  doświadczenie.
</p>
<br /><br />
<p><b>Przebranżowienie? </b></p>
<p className="text-justified">Moja edukacja kierowała się w kierunku zarządzania serwerami oraz tworzeniem aplikacji i witryn wwww.< br /> Po skończeniu studiów znalazłem pracę zgodną z moim wykształceniem.
 Jednak zostałem kierownikiem sprzedaży w wyniku tzw. życiowych okazji, które w tamtym momencie wydawały mi się bardziej perspektywiczne. <br />
 Obecne zmiany na rynku motoryzacyjnym stały się impulsem do głębszych refleksji nad moją ścieżką zawodową i w oczywisty sposób powrotem  do moich wcześniejszych pasji i
  obszaru zainteresowań.</p>
 <br /> 
Wybór ścieżki Full Stack MERN pozwala mi nie tylko na programowaĆ na różnych płaszczyznach czy też dostarczać szybciej efektywne rozwiązania, ale także na poszerzenie 
zakresu moich umiejętności.
Nadal wierzę, że mam wiele do zaoferowania. Moja determinacja, pasja do nauki oraz do ciągłego doskonalenia moich umiejętności stanowią klucz do przygotowania się na wyzwania, 
jakie przyniesie mi  przyszłość.

              </span>
            ) : (
              <span>
                {" "}
                <img className="img01" src={img01} alt="" />
                <p>Hi!&nbsp;My name is Krzysiek, I'm from Poland.</p>
                <br />
                <p className="text-justified">I'm an engineer with a background in computer science and econometrics, and a passion for diving. My education includes postgraduate studies in "Automotive Management" at SGH, as well as achieving the Dive Master and technical diving certifications. I have a keen interest in literature, 
                particularly Stephen King and Clive Cussler, and my music preferences range from The Rolling Stones and Alice in Chains to Keb' Mo', Pink Floyd, and Dżem. <br />
</p><br />
<p><b>Skills and Personal Qualities</b></p>
<p className="text-justified">My hobbies, such as modeling and playing a musical instrument, have taught me patience in achieving goals and finding joy in delayed rewards. Scuba diving has instilled in me a sense of responsibility, strict adherence to procedures, skill verification, and ongoing error analysis, which I strive to eliminate through practice.
<br /> These qualities shape my almost obsessive need to solve problems, both in implementing system logic and in everyday situations. I approach every problem analytically and methodically. For me, every problem solved, analyzed, and implemented represents valuable experience.
</p>
<br /><br />
<p><b>Career Transition? </b></p>
<p className="text-justified">

 My education led me towards server management and web application development. After completing my studies, I found a job that aligned with my education. However, I became a sales manager due to what could be described as "life opportunities" that seemed more promising at that time. Recent changes in the automotive market have prompted deeper reflection on my career path, leading me back to my previous passions and areas of interest.
 <br /> 
Choosing the Full Stack MERN path not only allows me to programming on various levels and deliver efficient solutions more quickly but also broadens my skill set. I still believe that I have a lot to offer. My determination, passion for learning, and continuous improvement of my skills are the keys to preparing for the challenges the future holds..
    </p>          </span>
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
