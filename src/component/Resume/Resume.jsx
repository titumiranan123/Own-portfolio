import resume from '../../assets/Resume of Titumir.pdf'

const ResumePage = () => {

    const handleGoBack = () => {
        window.location.reload(false);
    };

    return (
        <div className="flex flex-col items-center ">
            <h2 className="text-2xl font-bold mb-4 text-slate-300">Resume Page</h2>
            <div>

                <button className="bg-green-500 text-white py-2 mb-5 px-4 rounded hover:bg-green-600" onClick={handleGoBack}>Go Back Previous Page</button>
            </div>
            <div className='w-full'>
                <iframe src={resume} width="100%" className='h-screen' title="Resume"></iframe>
            </div>

        </div>
    );
};

export default ResumePage;
