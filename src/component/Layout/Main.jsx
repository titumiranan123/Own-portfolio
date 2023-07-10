import { useRef, useState } from "react";
import About from "../About/About";

import useProject from "../CustomHook.jsx/CustomHook";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Projects from "../Project/Project";
import Skill from "../Skill/Skill";
import Socialmedia from "../Socialmedia/Socialmedia";
import { Helmet } from "react-helmet";
import SunlightEffect from "../Cursor/Cursor";
import ContactForm from "../Contact/Contact";
import Footer from "../Footer/Footer";
import ResumePage from "../Resume/Resume";

const Main = () => {
    const [showAnotherComponent, setShowAnotherComponent] = useState(false);
    const data = useProject()
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    const allref = {
        skillsRef,
        projectsRef,
        aboutRef,
        contactRef
    }
    const handleClick = () => {
        setShowAnotherComponent(true);
    };

    if (showAnotherComponent) {
        return <ResumePage />;
    }

    return (
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
            <Helmet>
                <title>Home | Titumir Anan</title>
            </Helmet>

            <div className='lg:flex lg:justify-between lg:gap-4'>
                <div className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24'>
                    <Header />
                    <div className="text-white bg-teal-300 w-[80px] text-center mt-5 mb-5 py-1 px-2 rounded-md shadow-2xl">
                        <button className="btn" onClick={handleClick}>Resume</button>
                    </div>
                    <Navbar allref={allref} />
                    <Socialmedia />

                </div>
                <div className="pt-24 lg:w-1/2 lg:py-24">
                    <div className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" ref={aboutRef}>
                        <About />
                    </div>
                    <div className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" ref={skillsRef}>
                        <Skill />
                    </div>
                    <div ref={projectsRef} className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">

                        <div className='sticky top-0 p-4 lg:grid-cols-2 md:grid-cols-1   bg-[rgb(16,24,44)]  font-bold uppercase tracking-widest lg:hidden text-xl text-slate-300 z-30  '>Projects</div>
                        {
                            data.map((project, index) => <Projects key={index}
                                project={project}
                            >
                            </Projects>)
                        }
                    </div>
                    <div ref={contactRef}>
                        <ContactForm />
                    </div>


                </div>
            </div>
            <Footer />
            <SunlightEffect />
        </div>

    );
};

export default Main;