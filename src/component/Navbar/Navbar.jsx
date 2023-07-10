


// eslint-disable-next-line react/prop-types
const Navbar = ({ allref }) => {
    console.log(allref)

    const {
        skillsRef,
        projectsRef,
        aboutRef,
        contactRef
    } = allref
    const scrollToRef = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };
    <li onClick={() => scrollToRef(projectsRef)}></li>
    return (
        <nav className='hidden md:static lg:block'>
            <ul className='text-white'>
                <li onClick={() => scrollToRef(aboutRef)}>
                    <div className='group flex items-center py-3 '>
                        <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                        <span className=' text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>About</span>
                    </div>

                </li>
                <li onClick={() => scrollToRef(skillsRef)}>

                    <div className='group flex items-center py-3 '>
                        <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                        <span className=' text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>Skills</span>
                    </div>

                </li>
                <li onClick={() => scrollToRef(projectsRef)}>

                    <div className='group flex items-center py-3 '>
                        <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                        <span className=' text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>Projects</span>
                    </div>
                </li>
                <li onClick={() => scrollToRef(contactRef)}>

                    <div className='group flex items-center py-3 '>
                        <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                        <span className=' text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>Contact</span>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
