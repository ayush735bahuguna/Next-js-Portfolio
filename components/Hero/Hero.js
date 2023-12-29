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
    }, [])

    return (
        <div id="Hero" className='flex flex-col' style={{ paddingLeft: '10%', paddingTop: '10%', minHeight: '100vh', position: 'relative' }}>
            <div className='p-5 gap-4' style={{ position: 'fixed', top: '10px', right: '0px', width: '100vw', height: '10px', display: 'flex', alignItems: 'center', justifyContent: 'end', zIndex: '999' }}>
                <Link href={'https://github.com/ayush735bahuguna'} target="_blank">
                    <GithubIcon size={'35px'} strokeWidth={1.3} className='cursor-scale small   cursor-pointer' />
                </Link>
                <Link href={'https://www.linkedin.com/in/ayushbahuguna'} target="_blank">
                    <Linkedin size={'35px'} strokeWidth={1.3} className='cursor-scale small  cursor-pointer' />
                </Link>
                <Link href={'https://www.instagram.com/ayush.jsx/?igshid=MzNlNGNkZWQ4Mg%3D%3D'} target="_blank">
                    <Instagram size={'35px'} strokeWidth={1.3} className='cursor-scale small  cursor-pointer' />
                </Link>
            </div>

            <span className='HeroText font-semibold cursor-scale '>Hey,</span>
            <span className='HeroText font-semibold cursor-scale '>I&apos;m

                <span id="Ayush" className="HeroText logo" style={{ position: 'fixed', zIndex: '999' }}>&nbsp;Ayush</span>
                <span id="AyushStroke" className="HeroTextStroke" style={{ mixBlendMode: 'none', WebkitTextFillColor: 'transparent' }}>&nbsp;Ayush</span>

            </span>
            <p className='HeroTextSmall font-semibold cursor-scale small' style={{ paddingLeft: '30%', paddingRight: '10%' }}>- a Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, fugiat!</p>
        </div>
    )
}
