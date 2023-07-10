

import Typewriter from 'typewriter-effect';

const Header = () => {
    return (
        <div className="">

            <a className="text-4xl font-bold text-slate-200 sm:text-5xl"> Md. Titumir Anan </a>
            <div>
                <h1 className="text-3xl mt-4 max-w-xs leading-normal text-slate-300 font-bold mb-4  w-full">
                    <span>Asalamualikum </span> <br />
                    I&apos;m a
                    <Typewriter
                        options={{
                            strings: ['Web Devloper', 'Java Script Devloper', 'Web Pentester', 'Ethical Hacker', ' Full Stack Developer', 'Frontend Engineer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>
            </div>
        </div>
    );
};

export default Header;