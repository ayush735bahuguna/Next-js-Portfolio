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
import Cursor from '@/components/Cursor/Cursor'
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


  }, [])


  return (
    <div ref={MainWrapperRef} style={{ transition: 'background-color ease 0.4s' }}>
      <Cursor />
      <Button size={'icon'} variant={'ghost'} style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: '99' }} className='rounded-full' onClick={() => { window.scrollTo(0, 0) }}> <ArrowUpFromDot /> </Button>

      <div ref={heroRef} className='flex flex-col' style={{ paddingLeft: '10%', paddingTop: '10%', minHeight: '100vh', position: 'relative' }}>
        <div className='p-5 gap-4 pt-10' style={{ position: 'absolute', top: '0px', right: '0px', width: '100vw', height: '10px', display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
          <GithubIcon size={'35px'} strokeWidth={1.3} className='cursor-scale small' />
          <Instagram size={'35px'} strokeWidth={1.3} className='cursor-scale small' />
          <Linkedin size={'35px'} strokeWidth={1.3} className='cursor-scale small' />
        </div>

        <span className='text-9xl font-semibold cursor-scale'>Hey,</span>
        <span className='text-9xl font-semibold cursor-scale'>I'm Ayush</span>
        <p className='text-5xl font-semibold cursor-scale small' style={{ paddingLeft: '30%', paddingRight: '10%' }}>- a Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, fugiat!</p>
      </div>
      <Skills SkillsRef={SkillsRef} />
      <Projects projectsRef={projectsRef} contactRef={contactRef} />
    </div>
  )
}


// https://ahrefs.com/
