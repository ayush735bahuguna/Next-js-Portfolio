import Projects from '@/components/projects/Projects'
import React, { useRef } from 'react'
import Skills from '@/components/skills/Skills'
import { ArrowBigUp, ArrowUpFromDot, Github, GithubIcon, Instagram, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Cursor from '@/components/Cursor/Cursor'
export default function page() {

  return (
    <div style={{ transition: 'background-color ease 0.4s' }}>
      <Cursor />
      <Button size={'icon'} variant={'ghost'} style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: '99' }} className='rounded-full' onClick={() => { window.scrollTo(0, 0) }}> <ArrowUpFromDot /> </Button>

      <div className='flex flex-col' style={{ paddingLeft: '10%', paddingTop: '10%', minHeight: '100vh', position: 'relative' }}>
        <div className='p-5 gap-4 pt-10' style={{ position: 'absolute', top: '0px', right: '0px', width: '100vw', height: '10px', display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
          <GithubIcon size={'35px'} strokeWidth={1.3} className='cursor-scale small' />
          <Instagram size={'35px'} strokeWidth={1.3} className='cursor-scale small' />
          <Linkedin size={'35px'} strokeWidth={1.3} className='cursor-scale small' />
        </div>

        <span className='text-9xl font-semibold cursor-scale'>Hey,</span>
        <span className='text-9xl font-semibold cursor-scale'>I'm Ayush</span>
        <p className='text-5xl font-semibold cursor-scale small' style={{ paddingLeft: '30%', paddingRight: '10%' }}>- a Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, fugiat!</p>
      </div>
      <Skills />
      <Projects />
    </div>
  )
}
