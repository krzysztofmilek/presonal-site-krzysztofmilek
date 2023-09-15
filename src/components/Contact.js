import React from 'react'
import { Button, Container } from 'react-bootstrap';
import 'animate.css';
import { useRef, useState, useMemo, useEffect } from 'react';
import { Zoom } from 'react-awesome-reveal';


export default function Contact(props) {
    const targetRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false);

    const callbackFunction = entries => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    }
    const options = useMemo(() => {
        return {
            threshold: 0.3
        }
    }, []);
    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options);
        const currentTarget = targetRef.current;
        if (currentTarget) observer.observe(currentTarget);
        return () => {
            if (currentTarget) observer.unobserve(currentTarget)
        }
    }, [targetRef, options])

    return (
        <Container className="containerTextContact">

            <div className="containerText aboutMe" id="contact">

                <div className="aboutOne" >
                    <div className="titlle">
                        <Zoom> <div> <span className='orange smallText'>05. </span>{props.show? "W Kontakcie":"Contact"} <hr /></div></Zoom>
                    </div>
                    <div className="textAboutMe">


                        <p className="getCenter contactDown">
                        {props.show? "Jeśli Twój zespół szuka kreatywnego fullstacka, to jestem zawsze otwarty na rozmowę.":
                        "If your team is looking for a creative fullstack, I'm always open to a conversation."}


                        </p><br />
                        <p className="getCenter ">{props.show? "KONTAKT:":"CONTACT"}</p>
                        <p className="getCenter">{props.show? "Krzysiek" : "Krzysiek"}</p>
                        <p className="getCenter">tel. +48 607 605 417</p>
                        <br />


                        <div ref={targetRef} className="getCenter" >
                            <Button variant="outline-light" className={isVisible ? 'pulse' : ''} size="sm" href='mailto:k@k2webdev.pl'>k@k2webdev.pl</Button>
                        </div>
                        <br />
                   

                        <div className="con_hor">

                            <span>
                                <img onClick={() => window.open("https://github.com/krzysztofmilek", "_blank")} className='img_stack_horizontal' src="https://img.icons8.com/ios-filled/60/cccccc/github.png" alt='GITHub' />
                            </span>

                            <span>
                                <img onClick={() => window.open("https://www.linkedin.com/in/krzysztof-mi%C5%82ek-010694198/", "_blank")} className='img_stack_horizontal' src="https://img.icons8.com/ios-glyphs/60/cccccc/linkedin-circled--v1.png" alt='Linkedin' />
                            </span>
                            <span>
                                <img onClick={() => window.open("https://www.facebook.com/krzysztof.milek", "_blank")} className='img_stack_horizontal' src="https://img.icons8.com/ios-filled/100/cccccc/facebook-new.png" alt='Facebook' />
                            </span>

                            <span>
                                <img onClick={() => window.open("https://www.youtube.com/channel/UCDK0ZRhllZS0vHPuolF98fA", "_blank")} className='img_stack_horizontal' src="https://img.icons8.com/ios-filled/100/cccccc/youtube-play.png" alt='Youtube' />
                            </span>




                        </div>



                    </div>
                </div>
                <div className="aboutTwo">

                </div>



            </div>

        </Container>

    )
}



