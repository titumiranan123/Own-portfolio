/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const Projects = ({ project }) => {
    const { usedTechnology, image, liveWebsiteLink, features, projectName } = project;
    return (
        <div className="group mt-10 relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-6 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">

            </div>
            <div className="z-10 sm:order-2 sm:col-span-6">
                <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="">
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>{projectName}</span>
                </a>
                <h2 className="text-bold text-slate-200">Feature :</h2>
                <p className="mt-2 text-sm text-slate-300 leading-normal">

                    <ul className="list-disc ms-4">
                        {
                            features?.map((f, idx) => <li key={idx}>
                                {f}
                            </li>)
                        }
                    </ul>
                </p>

                <div className="">
                    <ul className='mt-2 flex flex-wrap gap-3'>
                        {
                            usedTechnology.map((tech, index) => <li key={index}>
                                <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>{tech}</div>
                            </li>)
                        }

                    </ul>
                </div>

            </div>
            <img className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" src={image} alt="" />
        </div>
    );
};

export default Projects;