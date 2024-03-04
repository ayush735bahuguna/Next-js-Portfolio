"use client"
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './projects.css';

import ContactUs from '../Contact us/ContactUs';

import project from '../../asset/home images/project.svg';
import project1 from '../../asset/projects/quick-link.png';
import project4 from '../../asset/projects/chat-link.png';
import project3 from '../../asset/projects/Social-link.png';
import Image from 'next/image';
import Services from '../Services/Services';
import PanelSection from './PanelSection';
import PanelSectionSm from './PanelSectionSm';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';



export default function Projects() {

    const Data = [
        {
            Name: 'Social Media App',
            Description: 'Developed a full-stack social media web application utilizing the MERN stack ( MongoDB, Express.js, React.js, Node.js ). This application allows users to: Create and manage profiles - Create, edit, and delete posts - Like and comment on other users posts - Follow , Unfollow other users - Search for users and posts',
            imgUrl: project3,
            url: 'https://social-link-app.vercel.app/',
        },
        {
            Name: 'MERN Notes App',
            Description: 'Developed a single-page web application for note-taking utilizing the MERN stack (MongoDB, Express.js, React.js, Node.js). This application allows users to: Create and manage profiles - Create, edit, and delete notes - Search notes by title - Securely store notes in a database',
            imgUrl: project1,
            url: 'https://note-quick.netlify.app/',
        },
        {
            Name: 'MERN Chat App',
            Description: 'A chat app using React in frontend and Node js in backend with mongodb database',
            imgUrl: project4,
            url: 'https://chat-link.netlify.app/',
        }
    ]

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
            <section className='lg:hidden' >
                <div className='mb-24'>
                    <Services />
                </div>
                <section id='Projects' className='mb-24'>
                    <div >

                        <section style={{ flexWrap: 'wrap', width: '100vw' }}>
                            <div className='Heading p-5'>My <br /> Projects</div>
                            <Image src={project} alt='' style={{ width: '90%', margin: '30px 5%' }} />
                        </section>

                        {Data?.map((e, i) => {
                            return <PanelSectionSm
                                key={i}
                                Name={e.Name}
                                Description={e.Description}
                                imgUrl={e.imgUrl}
                                url={e.url}
                            />
                        })}



                        <Link href='/Projects' className='mt-10 cursor-scale navigate flex items-center justify-center'>
                            <div className="text-3xl flex gap-2 items-center">
                                More projects
                                <ArrowRight size={'40px'} />
                            </div>
                        </Link>

                    </div >
                </section>
                <ContactUs />
            </section>

            <section className='max-lg:hidden' >

                <div className="firstContainer">
                    <Services />
                </div>

                <section className="container" id='Projects'>

                    <section className="panel" style={{ flexWrap: 'wrap', width: '100vw' }}>

                        <span>
                            <div className='Heading content cursor-scale'>My <br /> Projects</div>
                            <Link href='/Projects' className='pt-5 text-3xl flex items-center text-slate-600'>
                                More projects
                                <ArrowRight size={'40px'} />
                            </Link>
                        </span>

                        <Image src={project} alt='' style={{ width: '100vw', height: 'auto' }} />
                    </section>

                    {Data?.map((e, i) => {
                        return <PanelSection
                            key={i}
                            Name={e.Name}
                            Description={e.Description}
                            imgUrl={e.imgUrl}
                            url={e.url}
                        />
                    })}

                </section >

                <div className="lastContainer">
                    <ContactUs />
                </div>

            </section>
        </>
    )
}


