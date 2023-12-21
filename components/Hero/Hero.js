import { useGSAP } from '@gsap/react'
import './Hero.css'
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import Image from 'next/image';
import Aysuh from '../../asset/Ayush.svg';

export default function Hero() {


    useGSAP(() => {
        gsap
            .from("#text-scale", {
                width: "70vw",
                transformOrigin: "left length",
                rotation: 0.1,
                ease: 'none',
                top: '50px',
                scrollTrigger: {
                    trigger: ".hero",
                    start: "top top",
                    endTrigger: '.TextAnimationStop',
                    pin: ".hero",
                    scrub: 1,
                }
            });
        gsap.from(".hero", {
            height: "fit-content",
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                scrub: 1,
            }
        })


    }, [])


    return (
        <div className="hero">
            <span className="text big-text" id="text-scale">
                <Image src={Aysuh} alt='' style={{ width: '100%' }} />
            </span>
        </div>
    )
}
