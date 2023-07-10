
const Skill = () => {
    return (
        <div >
            <div className='sticky top-0 p-4 lg:grid-cols-2 md:grid-cols-1   bg-[rgb(16,24,44)]  font-bold uppercase tracking-widest lg:hidden text-xl text-slate-300 z-30 '>Skills</div>
            <div className="group relative mt-10 text-slate-400 grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0   rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">

                </div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="">
                        <span className="absolute -inset-x-4 -inset-y-2.5   rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>Programing Language</span>
                    </a>
                    <p className="mt-2 text-sm leading-normal">
                        JavaScript , TypeScript, HTML , CSS
                    </p>

                </div>
            </div>
            <div className="group relative grid mt-10 text-slate-400 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0   rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">

                </div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="">
                        <span className="absolute -inset-x-4 -inset-y-2.5   rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>Libraries & Frameworks</span>
                    </a>
                    <p className="mt-2 text-sm leading-normal">
                        React js , Next js, Tailwind , Bootstrap ,Node Js , Mongo Db
                    </p>

                </div>
            </div>
            <div className="group relative mt-10 text-slate-400 grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0   rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">

                </div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="">
                        <span className="absolute -inset-x-4 -inset-y-2.5   rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>Tools & Platforms</span>
                    </a>
                    <p className="mt-2 text-sm leading-normal">
                        Git , Github, Netlify , Vercel, Firebase, Figma
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Skill;