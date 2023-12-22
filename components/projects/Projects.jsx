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
import PanelSection from './PanelSection';

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
        <section>

            <div className="firstContainer">
                <Services />
            </div>

            <div className="container" id='Projects'>

                <section className="panel" style={{ flexWrap: 'wrap', width: '100vw' }}>
                    <div className='text-8xl content cursor-scale '>My <br /> Projects</div>
                    <Image src={project} alt='' style={{ width: '100vw', height: 'auto' }} />
                </section>

                <PanelSection
                    Name={'MERN Notes App'}
                    Description={' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, sit?'}
                    imgUrl={project1}
                    url={'https://note-quick.netlify.app/'}
                />

                <PanelSection
                    Name={'MERN Chat App'}
                    Description={' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, sit?'}
                    imgUrl={project4}
                    url={'https://movie-adda.netlify.app/'}
                />

                <PanelSection
                    Name={'Social Media App'}
                    Description={' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, sit?'}
                    imgUrl={project3}
                    url={'https://social-link-app.netlify.app/'}
                />


                <PanelSection
                    Name={'Movie-adda'}
                    Description={' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, sit?'}
                    imgUrl={project5}
                    url={'https://chat-link.netlify.app/'}
                />

                <PanelSection
                    Name={'Magic Pictures'}
                    Description={' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, sit?'}
                    imgUrl={project2}
                    url={'https://magic-pictures.netlify.app/'}
                />
            </div >

            <div className="lastContainer">
                <ContactUs />
            </div>

        </section>
    )
}


