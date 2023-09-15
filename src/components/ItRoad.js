import React from "react";
import { useRef, useState, useMemo, useEffect } from "react";
import { Container } from "react-bootstrap";
import "animate.css";
import { ReactComponent as WorkIcon } from "../img/work.svg";
import { ReactComponent as SchoolIcon } from "../img/school.svg";
import timeLineElementsEN from "./data/timeLineElementsEN.js";
import timeLineElementsPL from "./data/timeLineElementsPL.js";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import {
  /* Fade, Bounce, Flip, JackInTheBox, Rotate, Slide, */ Zoom,
} from "react-awesome-reveal";

export default function ItRoad(props) {
  const targetRef = useRef(null);
  //eslint-disable-next-line
  const [isVisible, setIsVisible] = useState(false);

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

  let worksIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };
  let data;
  props.show ?(data = timeLineElementsPL) : (data = timeLineElementsEN)
  return (
<Container className="containerTextExpirance" id="itroad">
      <div className="containerText">
        <div className="aboutOne">
          <div className="titlle">
            <Zoom>
              {" "}
              <div>
                {" "}
                <span className="orange smallText">02. </span>
                {props.show ? "My IT Road" : "My IT Road"} <hr />
              </div>
            </Zoom>
          </div>
          <div className="textAboutMe">
            <p>GITHUB STATISTIC</p>

            <img
              src="https://github-readme-stats.vercel.app/api?username=krzysztofmilek&show_icons=true&theme=dark"
              alt=""
              width="50%"
            />
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs?username=krzysztofmilek&layout=compact&theme=dark"
              alt=""
              width="38%"
            />
          </div>
          <div className="textAboutMe" >
            <VerticalTimeline  lineColor={ 'orange'}  >
              {     
              data.map((element) => {
                let isWorkIcon = element.icon === "work";
                let showButton =
                  element.buttonText !== undefined &&
                  element.buttonText !== null &&
                  element.buttonText !== "";
                return (
                  <VerticalTimelineElement
                  contentStyle={{ background: '#282c34' , color: '#ccc' }} 
                  className="myItRoadBody"
                    key={element.key}
                    date={element.date}
                    dateClassName="date"
                    iconStyle={isWorkIcon ? worksIconStyles : schoolIconStyles}
                    icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                  >
                    <h3 className="vertical-timeline-element-title myItRoaH3">
                      {element.title}
                    </h3>
                    <h5 className="vertical-timeline-element-subtitle myItRoaH5">
                      {element.location}
                    </h5>
                    <p id="description" className="myItRoaDescription">{element.description}</p>
                    { showButton &&< a  href={`http://${element.buttonText} `}  className={`button ${isWorkIcon? "workButton" : "schoolButton"}`}>{element.buttonText}</a>}
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </Container>
  );
}
