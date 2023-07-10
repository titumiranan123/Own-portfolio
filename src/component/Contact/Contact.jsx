import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { FaTelegramPlane } from "react-icons/fa";
const ContactForm = () => {

    const form = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form.current)
        // Configure EmailJS
        emailjs.sendForm(`service_4tss188`, 'template_qfb2f2p', form.current, 'q8RDHIyZYREhD86kY')
            .then((result) => {
                e.target.reset();

                console.log('Email sent successfully', result.text);
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    };

    return (

        <div className="group w-full mx-auto py-8 px-4 sm:px-6   lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="relative bg-slate-900 overflow-hidden shadow-sm sm:rounded-lg">

                <div className="w-full hover:border-slate-500 p-8 hover:border p-6bg-slate-900">

                    <h2 className="text-2xl text-center  font-bold mb-4 text-slate-400">GET In TOUCH</h2>
                    <form className="flex flex-col gap-2" ref={form} onSubmit={handleSubmit}>
                        <label htmlFor="name" className="sr-only text-slate-400" >Name</label>
                        <input
                            autoComplete="name"
                            required
                            className="form-input rounded-md bg-slate-200 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-5"
                            placeholder="Name"
                            type="text" name="user_name" />
                        <label htmlFor="email" className="sr-only text-slate-400">Email</label>
                        <input
                            id="email"
                            autoComplete="email"
                            required
                            className="form-input rounded-md bg-slate-200 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-5"

                            placeholder="Email address"
                            type="email" name="user_email" />
                        <label htmlFor="name" className="sr-only text-slate-400" >Message</label>
                        <textarea
                            rows="4"
                            className="form-textarea rounded-md bg-slate-200 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "
                            name="message" />
                        <button className="bg-teal-400 text-center text-white font-bold py-2 px-4 flex justify-center items-center text-2xl gap-2 rounded"
                            type="submit"  > Send<FaTelegramPlane className="font-bold text-center text-white" /></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
