import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import './skills.scss';
import { skills } from "../../Data";
import { skillsData } from './SkillData';
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
        <section className="skill sm:h-screen h-5/6 sm:w-10/12 w-full relative text-white sm:bg-[#111132] bg-transparent ">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn sm:w-full h-auto rounded-3xl text-center bg-[#ffffff1c] rounded-5xl sm:px-10 sm:py-10 sm:mt-16 flex items-center justify-center flex-col">
                            <h2 className='text-5xl font-bold uppercase tracking-widest'>Skills</h2>
                            <p className='w-3/4 text-center text-white text-lg tracking-wider leading-normal my-8 mx-5'>"I specialize in web development, UI/UX design, and full stack solutions. <br /> With experience working with real-time clients, I deliver responsive, user-focused designs and efficient, scalable backend systems."</p>
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                className="owl-carousel owl-theme skill-slider w-3/4 relative"
                            >
                                {
                                    skillsData.map(({ name, icon }, index) => {
                                        return (
                                            <div className="item h-full w-full flex items-center justify-center flex-col" key={index}>
                                                <div className='w-28 mb-3 h-full'> {icon} </div>
                                                <h5 className=' text-base font-medium tracking-wide'>{name}</h5>
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