// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
import img from "/facebook.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './skills.scss';
import reactjs from '/reactjs.png'
import express from '/expressjs.png'
import mongodb from '/mongodb.png'
import node from '/nodejs.png'
import { skills } from "../../Data";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>"I specialize in web development, UI/UX design, and full stack solutions. <br /> With experience working with real-time clients, I deliver responsive, user-focused designs and efficient, scalable backend systems."</p>
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                className="owl-carousel owl-theme skill-slider"
                            >
                                {
                                    skills.map((skill, index) => {
                                        return (
                                            <div className="item" key={index}>
                                                <img src={skill.imgSrc} alt={skill.alt} />
                                                <h5>{skill.name}</h5>
                                            </div>
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
