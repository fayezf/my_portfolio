import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../../../assets/projects2/home.png';
import img2 from '../../../assets/projects2/login.png';
import img3 from '../../../assets/projects2/addToy.png';
import img4 from '../../../assets/projects2/myToy.png';

const Projects2 = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div>
            <div className='md:flex gap-4 my-16 px-8' data-aos = "fade-up">
                <div className="carousel w-1/4 ml-80 ">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={img1} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="text-slate-500 text-2xl bg-transparent border-none">❮</a>
                            <a href="#slide2" className="text-slate-500 text-2xl bg-transparent border-none">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={img2} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="text-slate-500 text-2xl bg-transparent border-none">❮</a>
                            <a href="#slide3" className="text-slate-500 text-2xl bg-transparent border-none">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={img3} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="text-slate-500 text-2xl bg-transparent border-none">❮</a>
                            <a href="#slide4" className="text-slate-500 text-2xl bg-transparent border-none">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={img4} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="text-slate-500 text-2xl bg-transparent border-none">❮</a>
                            <a href="#slide1" className="text-slate-500 text-2xl bg-transparent border-none">❯</a>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='text-2xl text-slate-400 font-montserrat'>Kid Toy</h2>
                    <h2 className='text-teal-400 font-montserrat'>This is a kids toy based website.</h2>
                    <li className='text-slate-400 font-montserrat'>Have admin and user different dashboard.</li>
                    <li className='text-slate-400 font-montserrat'>Admin can delete,add and manage users.</li>
                    <li className='text-slate-400 font-montserrat'>Admin can make admin also</li>
                    <li className='text-slate-400 font-montserrat'>User can Login via (Google Sign-in)</li>
                    <li className='text-slate-400 font-montserrat'><span className='text-slate-400'>Front-end technology:</span>React js, Tailwind,React Router, Firebase Authentication</li>
                    <li className='text-slate-400 font-montserrat'><span className='text-slate-400'>Back-end technology:</span>Node js,Express js, MongoDB</li>
                    <div className='md:flex gap-4'>
                        <button className='btn btn-primary border-none btn-sm text-white bg-teal-600'><a href="https://education-learning-toys.web.app/">Live Preview</a></button>
                        <button className='btn btn-primary border-none btn-sm text-white bg-teal-600'><a href="https://github.com/fayezf/kid-toy-client">Client Code</a></button>
                        <button className='btn btn-primary border-none btn-sm text-white bg-teal-600'><a href="https://github.com/fayezf/kid-toy-server">Server Code</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects2;