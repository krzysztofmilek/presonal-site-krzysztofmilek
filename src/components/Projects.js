import React from 'react'
import { Container, Button, Table, Carousel } from 'react-bootstrap';
import 'animate.css';
import { Zoom } from 'react-awesome-reveal';




export default function Projects(props) {


    return (
        <Container className="conProject" id="projects">

            <div className="containerText aboutMe" >
                <div className="aboutOne" >
                    <div className="titlle">
                        <Zoom> <div> <span className='orange smallText'>04. </span>{props.show? "Projekty":"Projects"} <hr /></div></Zoom>
                    </div>
                    <div className="textAboutMe">
                        <Carousel indicators={false} >

                            <Carousel.Item className="carouselBox" interval={4000}  >
                                <div className="caruselOne "><p className='patrycjaImg'></p> </div>
                                <div className="caruselTwo">
                                    <p className="getCenter">
                                        <Button href="https://www.patrycjaszindler.pl/" variant="outline-light" size="sm" className='m-3'
                                        target="_blank" >WWW.PATRYCJASZINDLER.PL</Button><br />
                                        <Button href="https://github.com/kmilek73/PatrycjaSzindler" variant="outline-light" size="sm" className='m-3'
                                            target="_blank" >GITHUB</Button>
                                    </p><br />
                                    <p className="getCenter stackText2">{props.show? "Stack Technologiczny":"Techmology Stack"}</p>
                                    <Table bordered={false}>
                                        <thead>
                                            <tr>
                                                <th>Frontend</th>
                                                <th>Backend</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><img src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png" alt="" /> JavaScript</td>
                                                <td><img src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png" alt="" /> MySQL</td>

                                            </tr>
                                            <tr>
                                                <td><img src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png" alt="" /> Wordpress</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td><img src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png" alt="" /> Elementor</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td><img src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png" alt="" /> HTML</td>
                                                <td> </td>
                                            </tr>
                                            <tr>
                                                <td><img src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png" alt="" /> CSS</td><td></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Carousel.Item>

                            <Carousel.Item className="carouselBox" interval={4000}  >
                            <div className="caruselOne "><p className='crudImg'></p> </div>
                                <div className="caruselTwo">
                                    <p className="getCenter">
                                        <Button href="https://crudapp.kmilek.usermd.net/" variant="outline-light" size="sm" className='m-3'
                                        target="_blank" >WWW.CRUDAPP.K2WEBDEV.PL</Button><br />
                                        <Button href="https://github.com/krzysztofmilek/react-simply-crud" variant="outline-light" size="sm" className='m-3'
                                            target="_blank" >GITHUB</Button>
                                    </p><br />
                                    <p className="getCenter stackText2">{props.show? "Stack Technologiczny":"Techmology Stack"}</p>
                                    <Table bordered={false}>
                                        <thead>
                                            <tr>
                                                <th>Frontend</th>
                                                <th>Backend</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><img src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png" alt="" /> JavaScript</td>
                                                <td><img src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png" alt="" /> ExpressJS</td>

                                            </tr>
                                            <tr>
                                                <td><img src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png" alt="" /> React</td>
                                                <td> <img src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png" alt="" /> NodeJS</td>
                                            </tr>
                                            <tr>
                                                <td><img src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png" alt="" /> Bootstrap</td>
                                                <td><img src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png" alt="" /> MongoDB</td>
                                            </tr>
                                            <tr>
                                                <td><img src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png" alt="" /> HTML</td>
                                                <td> </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>Testing: Postman</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Carousel.Item>


                            <Carousel.Item className="carouselBox" interval={2000}  >
                            <div className="caruselOne "><p className='bootImg'></p> </div>
                                <div className="caruselTwo">
                                    <p className="getCenter">
                                        <Button href="https://boottemplate.k2webdev.pl/" variant="outline-light" size="sm" className='m-3'
                                        target="_blank" >BOOTTEMPLATE</Button><br />
                                        <Button href="https://boottemplate.k2webdev.pl/" variant="outline-light" size="sm" className='m-3'
                                            target="_blank" >GITHUB</Button>
                                    </p><br />
                                    <p className="getCenter stackText2">{props.show? "Stack Technologiczny":"Techmology Stack"}</p>
                                    <Table bordered={false}>
                                        <thead>
                                            <tr>
                                                <th>Frontend</th>
                                                <th>Backend</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><img src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png" alt="" /> JavaScript</td>
                                                <td> </td>

                                            </tr>
                                            <tr>
                                                <td><img src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png" alt="" /> React</td>
                                                <td> </td>
                                            </tr>
                                            <tr>
                                                <td><img src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png" alt="" /> Bootstrap</td>
                                                <td> </td>
                                            </tr>
                                            <tr>
                                                <td><img src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png" alt="" /> HTML</td>
                                                <td> </td>
                                            </tr>
                                            <tr>
                                            <td><img src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png" alt="" /> CSS</td>
                                                <td> </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Carousel.Item>




                            <Carousel.Item className="carouselBox" interval={2000}  >
                            <div className="caruselOne "><p className='krzysiekImg'></p> </div>
                                <div className="caruselTwo">
                                    <p className="getCenter">
                                        <Button href="https://www.krzysztofmilek.pl/" variant="outline-light" size="sm" className='m-3'
                                        target="_blank" >WWW.KRZYSZTOFMILEK.PL</Button><br />
                                        <Button href="https://github.com/krzysztofmilek/presonal-site-krzysztofmilek" variant="outline-light" size="sm" className='m-3'
                                            target="_blank" >GITHUB</Button>
                                    </p><br />
                                    <p className="getCenter stackText2">{props.show? "Stack Technologiczny":"Techmology Stack"}</p>
                                    <Table bordered={false}>
                                        <thead>
                                            <tr>
                                                <th>Frontend</th>
                                                <th>Backend</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><img src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png" alt="" /> JavaScript</td>
                                                <td></td>

                                            </tr>
                                            <tr>
                                                <td><img src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png" alt="" /> React</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td><img src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png" alt="" /> Bootstrap</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td><img src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png" alt="" /> HTM</td>
                                                <td> </td>
                                            </tr>
                                            <tr>
                                                <td><img src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png" alt="" /> CSS</td><td></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Carousel.Item>

                            <Carousel.Item className="carouselBox" interval={2000}  >
                            <div className="caruselOne "><p className='stoOsiemImg'></p> </div>
                                <div className="caruselTwo">
                                    <p className="getCenter">
                                        <Button href="https://108template.k2webdev.pl/" variant="outline-light" size="sm" className='m-3'
                                        target="_blank" >108TEMPLATE</Button><br />
                                        <Button href="https://108template.k2webdev.pl/" variant="outline-light" size="sm" className='m-3'
                                            target="_blank" >GITHUB</Button>
                                    </p><br />
                                    <p className="getCenter stackText2">{props.show? "Stack Technologiczny":"Techmology Stack"}</p>
                                    <Table bordered={false}>
                                        <thead>
                                            <tr>
                                                <th>Frontend</th>
                                                <th>Backend</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><img src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png" alt="" /> JavaScript</td>
                                                <td></td>

                                            </tr>
                                            <tr>
                                                <td><img src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png" alt="" /> Bootstrap</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td><img src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png" alt="" /> HTML</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td><img src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png" alt="" /> CSS</td>
                                                <td> </td>
                                            </tr>
                                            <tr>
                                               <td><img src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png" alt="" /> </td>
                                                <td> </td>
                                             </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Carousel.Item>

                            <Carousel.Item className="carouselBox" interval={2000}  >
                            <div className="caruselOne "><p className='sassImg'></p> </div>
                                <div className="caruselTwo">
                                    <p className="getCenter">
                                        <Button href="https://WWW.SASSTEMPLATE.K2WEBDEV.PL/" variant="outline-light" size="sm" className='m-3'
                                        target="_blank" >SASSTEMPLETE.K2DEVWEB.PL</Button><br />
                                        <Button href="https://github.com/krzysztofmilek/react-simply-crud" variant="outline-light" size="sm" className='m-3'
                                            target="_blank" >GITHUB</Button>
                                    </p><br />
                                    <p className="getCenter stackText2">{props.show? "Stack Technologiczny":"Techmology Stack"}</p>
                                    <Table bordered={false}>
                                        <thead>
                                            <tr>
                                                <th>Frontend</th>
                                                <th>Backend</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><img src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png" alt="" /> JavaScript</td>
                                                <td> </td>

                                            </tr>
                                            <tr>
                                                <td><img src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png" alt="" /> SASS</td>
                                                <td> </td>
                                            </tr>
                                            <tr>
                                                <td><img src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png" alt="" /> Bootstrap</td>
                                                <td> </td>
                                            </tr>
                                            <tr>
                                                <td><img src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png" alt="" /> HTML</td>
                                                <td> </td>
                                            </tr>
                                            <tr>
                                            <td><img src="https://img.icons8.com/material-outlined/16/f79f1d/checked--v1.png" alt="" /> REACT</td>
                                                <td> </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Carousel.Item>

                        </Carousel>
                    </div>
                </div>
                <div className="aboutTwo">
                </div>
            </div>

        </Container >

    )
}



