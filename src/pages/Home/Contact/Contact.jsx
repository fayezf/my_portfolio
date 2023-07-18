import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_kzch1kw',
            'template_51xdnua',
            form.current,
            'WYXuP9WUzaqzl_jrP')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
            <h2 className='text-4xl text-center text-teal-400 font-bold font-montserrat my-12'>Contact Us</h2>
            <div className='md:flex justify-center'>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="form-control w-full text-center mb-4">
                        <input type="text" placeholder="Your Name" name='from_name' className="input input-bordered bg-slate-50 text-slate-400 font-semibold text-center w-full " />
                    </div>
                    <div className="form-control w-full mb-4">
                        <input type="email" placeholder="Your Email" name='from_email' className="input input-bordered w-full text-center bg-slate-50 text-slate-400 font-semibold" />
                    </div>
                    <div className="form-control w-full mb-4">
                        <textarea name='message' className="textarea textarea-bordered h-32 w-full text-center bg-slate-50 text-slate-400 font-semibold" placeholder="Type your message"></textarea>
                    </div>
                    <div className='text-center'>
                        <input className='btn btn-sm btn-accent mt-4 bg-teal-500 text-white' type="submit" value="Send Message" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;