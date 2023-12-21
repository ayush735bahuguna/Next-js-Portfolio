"use client"
import Projects from '@/components/projects/Projects'
import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import styles from './page.module.css'
import Skills from '@/components/skills/Skills'


import { useTheme } from "next-themes"
import { ArrowBigUp, ArrowUpFromDot, Github, GithubIcon, Instagram, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
export default function page() {
  // const { setTheme, resolvedTheme } = useTheme();

  // const changeThemeFunction = () => {
  //   if (resolvedTheme !== undefined) {
  //     if (resolvedTheme === 'light') {
  //       setTheme('dark');
  //     } else {
  //       setTheme('light')
  //     }
  //   }
  // }

  const MainWrapperRef = useRef();
  const heroRef = useRef();
  const SkillsRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();


  useGSAP(() => {
    // gsap.registerPlugin(ScrollTrigger);

    // const triggers = [
    //   { "start": "top 80px", "end": "bottom 80px", "class": styles.heroColorClass, "trigger": heroRef.current, "target": MainWrapperRef.current },
    //   { "start": "top 80px", "end": "bottom 80px", "class": styles.aboutColorClass, "trigger": SkillsRef.current, "target": MainWrapperRef.current },
    //   { "start": "top 80px", "end": "bottom 80px", "class": styles.projectsColorClass, "trigger": projectsRef.current, "target": MainWrapperRef.current },
    //   { "start": "top 80px", "end": "bottom 80px", "class": styles.contactColorClass, "trigger": contactRef.current, "target": MainWrapperRef.current },
    // ];

    // triggers.forEach((trigger) => {
    //   ScrollTrigger.create(
    //     {
    //       start: trigger.start,
    //       end: trigger.end,
    //       trigger: trigger.trigger,
    //       toggleClass: {
    //         className: trigger.class,
    //         targets: trigger.target
    //       }
    //     }
    //   )
    // })



    gsap.set('.cursor', { xPercent: -50, yPercent: -50 });

    var cur = document.querySelector('.cursor');

    window.addEventListener('mousemove', e => {
      gsap.to(cur, 0.05, { x: e.clientX, y: e.clientY });
    });


  }, [])


  return (
    <div ref={MainWrapperRef} style={{ transition: 'background-color ease 0.4s' }}>
      <div className="cursor"></div>
      <Button size={'icon'} variant={'ghost'} style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: '99' }} className='rounded-full' onClick={() => { window.scrollTo(0, 0) }}> <ArrowUpFromDot /> </Button>

      <div ref={heroRef} className='flex flex-col' style={{ paddingLeft: '10%', paddingTop: '10%', minHeight: '100vh', position: 'relative' }}>
        <div className='p-5 gap-4 pt-10' style={{ position: 'absolute', top: '0px', right: '0px', width: '100vw', height: '10px', display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
          <GithubIcon size={'35px'} strokeWidth={1.3} />
          <Instagram size={'35px'} strokeWidth={1.3} />
          <Linkedin size={'35px'} strokeWidth={1.3} />
        </div>

        <h1 className='text-9xl font-semibold'>Hey,</h1>
        <h1 className='text-9xl font-semibold'>I'm Ayush</h1>
        <p className='text-5xl font-semibold' style={{ paddingLeft: '30%', paddingRight: '10%' }}>- a Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, fugiat!</p>
      </div>
      <Skills SkillsRef={SkillsRef} />
      <Projects projectsRef={projectsRef} contactRef={contactRef} />
    </div>
  )
}


// https://ahrefs.com/
