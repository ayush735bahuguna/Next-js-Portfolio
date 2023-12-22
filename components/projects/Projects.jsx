"use client"
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './projects.css';

import ContactUs from '../Contact us/ContactUs';

import project from '../../asset/home images/project.svg';
import project1 from '../../asset/projects/quick-link.png';
import project2 from '../../asset/projects/Magic-pictures.png';
import project3 from '../../asset/projects/Social-link.png';
import project4 from '../../asset/projects/chat-link.png';
import project5 from '../../asset/projects/movie-adda.png';
import Image from 'next/image';
import Services from '../Services/Services';

export default function Projects() {

    useGSAP(
        () => {
            gsap.registerPlugin(ScrollTrigger);

            let sections = gsap.utils.toArray(".panel");

            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: ".container",
                    pin: true,
                    scrub: 1,
                    snap: 1 / (sections.length - 1),
                    end: () => "+=" + document.querySelector(".container").offsetWidth
                }
            });

        },
        [],
    );

    return (
        <>

            <div className="firstContainer">
                <Services />
            </div>

            <div className="container">

                <section className="panel ">
                    <p className='text-8xl content cursor-scale'>My Projects</p>
                    <Image src={project} alt='' style={{ width: '55vw' }} />
                    <div className="box">
                    </div>
                </section>

                <section className="panel ">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflowY: "scroll", height: '90vh', flexDirection: 'column' }}>

                        <div className="box">
                            <Image src={project1} style={{ width: '100%' }} alt='' />
                        </div>
                        <div className="text-4xl m-5 content">
                            MERN Notes App
                        </div>

                    </div>


                </section>
                <section className="panel ">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflowY: "scroll", height: '90vh', flexDirection: 'column' }}>

                        <div className="box">
                            <Image src={project2} style={{ width: '100%' }} alt='' />
                        </div>
                        <div className="text-4xl m-5 content">
                            Magic Pictures
                        </div>

                    </div>


                </section>
                <section className="panel ">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflowY: "scroll", height: '90vh', flexDirection: 'column' }}>

                        <div className="box">
                            <Image src={project3} style={{ width: '100%' }} alt='' />
                        </div>
                        <div className="text-4xl m-5 content">
                            Social Media App
                        </div>

                    </div>


                </section>
                <section className="panel ">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflowY: "scroll", height: '90vh', flexDirection: 'column' }}>

                        <div className="box">
                            <Image src={project5} style={{ width: '100%' }} alt='' />
                        </div>
                        <div className="text-4xl m-5 content">
                            Movie-adda
                        </div>

                    </div>


                </section>
                <section className="panel ">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflowY: "scroll", height: '90vh', flexDirection: 'column' }}>

                        <div className="box">
                            <Image src={project4} style={{ width: '100%' }} alt='' />
                        </div>
                        <div className="text-4xl m-5 content">
                            MERN Chat App
                        </div>

                    </div>


                </section>



            </div >

            <div className="lastContainer">
                <ContactUs />
            </div>

        </>
    )
}


