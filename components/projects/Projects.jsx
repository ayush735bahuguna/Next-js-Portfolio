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

export default function Projects({ SkillsRef, projectsRef, contactRef }) {

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

            <div className="firstContainer" ref={SkillsRef}>
                <Services />
            </div>

            <div className="container" ref={projectsRef} >

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
                        <div className="content">
                            Project Features :<br />
                            1️⃣ Create, Update, Delete, Search Notes: Seamlessly manage your notes with intuitive CRUD operations. <br />
                            2️⃣ Dark Mode: Embrace a sleek and stylish interface with Dark Mode feature.<br />
                            3️⃣ Layout Change: Customize your workspace with different layout options, ensuring a personalized and comfortable user experience. <br />
                            4️⃣ Custom Login / Sign-Up Page <br />
                            <br />
                            🔗 **Check it out here:** [ https://lnkd.in/d379p3T3 ]
                        </div>

                    </div>


                </section>
                <section className="panel ">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflowY: "scroll", height: '90vh', flexDirection: 'column' }}>

                        <div className="box">
                            <Image src={project2} style={{ width: '100%' }} alt='' />
                        </div>
                        <div className="content">
                            Project Features :<br />
                            1️⃣ Create, Update, Delete, Search Notes: Seamlessly manage your notes with intuitive CRUD operations. <br />
                            2️⃣ Dark Mode: Embrace a sleek and stylish interface with Dark Mode feature.<br />
                            3️⃣ Layout Change: Customize your workspace with different layout options, ensuring a personalized and comfortable user experience. <br />
                            4️⃣ Custom Login / Sign-Up Page <br />
                            <br />
                            🔗 **Check it out here:** [ https://lnkd.in/d379p3T3 ]
                        </div>

                    </div>


                </section>
                <section className="panel ">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflowY: "scroll", height: '90vh', flexDirection: 'column' }}>

                        <div className="box">
                            <Image src={project3} style={{ width: '100%' }} alt='' />
                        </div>
                        <div className="content">
                            Project Features :<br />
                            1️⃣ Create, Update, Delete, Search Notes: Seamlessly manage your notes with intuitive CRUD operations. <br />
                            2️⃣ Dark Mode: Embrace a sleek and stylish interface with Dark Mode feature.<br />
                            3️⃣ Layout Change: Customize your workspace with different layout options, ensuring a personalized and comfortable user experience. <br />
                            4️⃣ Custom Login / Sign-Up Page <br />
                            <br />
                            🔗 **Check it out here:** [ https://lnkd.in/d379p3T3 ]
                        </div>

                    </div>


                </section>
                <section className="panel ">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflowY: "scroll", height: '90vh', flexDirection: 'column' }}>

                        <div className="box">
                            <Image src={project5} style={{ width: '100%' }} alt='' />
                        </div>
                        <div className="content">
                            Project Features :<br />
                            1️⃣ Create, Update, Delete, Search Notes: Seamlessly manage your notes with intuitive CRUD operations. <br />
                            2️⃣ Dark Mode: Embrace a sleek and stylish interface with Dark Mode feature.<br />
                            3️⃣ Layout Change: Customize your workspace with different layout options, ensuring a personalized and comfortable user experience. <br />
                            4️⃣ Custom Login / Sign-Up Page <br />
                            <br />
                            🔗 **Check it out here:** [ https://lnkd.in/d379p3T3 ]
                        </div>

                    </div>


                </section>
                <section className="panel ">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflowY: "scroll", height: '90vh', flexDirection: 'column' }}>

                        <div className="box">
                            <Image src={project4} style={{ width: '100%' }} alt='' />
                        </div>
                        <div className="content">
                            Project Features :<br />
                            1️⃣ Create, Update, Delete, Search Notes: Seamlessly manage your notes with intuitive CRUD operations. <br />
                            2️⃣ Dark Mode: Embrace a sleek and stylish interface with Dark Mode feature.<br />
                            3️⃣ Layout Change: Customize your workspace with different layout options, ensuring a personalized and comfortable user experience. <br />
                            4️⃣ Custom Login / Sign-Up Page <br />
                            <br />
                            🔗 **Check it out here:** [ https://lnkd.in/d379p3T3 ]
                        </div>

                    </div>


                </section>



            </div >

            <div className="lastContainer" ref={contactRef}>
                <ContactUs />
            </div>

        </>
    )
}


