"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { GithubIcon, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";


export default function Hero() {

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('.logo', {
            fontSize: '2rem',
            top: '18px',
            left: '10px',
            lineHeight: '25px',
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: "+=200",
                scrub: 0.5,
            }
        })

        gsap.to('#header', {
            // backgroundColor: 'blue',
            background: "rgba(255, 255, 255, 0.2)",
            borderRadius: "10px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.05)",
            backdropFilter: " blur(2px)",
            // border: "1px solid rgba(255, 255, 255, 0.3)",
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: "+=200",
                scrub: 0.5,
            }
        })

    }, [])

    return (
        <div id="Hero" className='flex flex-col  max-sm:item-center max-sm:justify-center' style={{
            paddingLeft: '10%', paddingTop: '10%', minHeight: '100vh', position: 'relative',
        }}>
            <div id="header" className='p-7 gap-4' style={{ position: 'fixed', top: '0px', right: '0px', width: '100vw', height: '10px', display: 'flex', alignItems: 'center', justifyContent: 'end', zIndex: '999', }}>

                <Link href={'https://github.com/ayush735bahuguna'} target="_blank">
                    <GithubIcon size={'35px'} strokeWidth={1.3} className='cursor-scale small   cursor-pointer' />
                </Link>
                <Link href={'https://www.linkedin.com/in/ayushbahuguna'} target="_blank">
                    <Linkedin size={'35px'} strokeWidth={1.3} className='cursor-scale small  cursor-pointer' />
                </Link>
                <Link href={'https://www.instagram.com/ayush.bahuguna.a?igsh=emw1bzFvZGZiZ3dm'} target="_blank">
                    <Instagram size={'35px'} strokeWidth={1.3} className='cursor-scale small  cursor-pointer' />
                </Link>
            </div>

            <span className='HeroText cursor-scale max-sm:text-7xl '>Hey,</span>
            <span className='HeroText cursor-scale max-sm:text-7xl'>I&apos;m

                <span id="Ayush" className="HeroText logo max-sm:text-8xl"
                    style={{ position: 'fixed', zIndex: '999' }}>&nbsp;Ayush
                </span>
                <span id="AyushStroke"
                    className="HeroTextStroke max-sm:text-8xl" style={{ mixBlendMode: 'none', WebkitTextFillColor: 'transparent' }}>&nbsp;Ayush
                </span>

            </span>
            <p className='HeroTextSmall font-semibold cursor-scale small max-sm:text-2xl' style={{ paddingLeft: '30%', paddingRight: '10%' }}>
                - A Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
        </div>
    )
}
