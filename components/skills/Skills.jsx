import './Skills.css'
import { Button } from '../ui/button';
import { Download } from 'lucide-react';
import Link from 'next/link';

export default function Skills() {
    const Skills = [
        { "name": "Next Js", },
        { "name": "React Js", },
        { "name": "Node Js", },
        { "name": "express Js", },
        { "name": "GSAP", },
        { "name": "Tailwind", },
        { "name": "Bootstrap", },
        { "name": "Photoshop", },
        { "name": "Mongo DB", },
        { "name": "Html", },
        { "name": "Css", },
        { "name": "Js", },
        { "name": "Netlify", },
        { "name": "Render", },
        { "name": "API", },
        { "name": "Github", },
        { "name": "Git", },
        { "name": "VS code", },
        { "name": "Postman", },

    ]
    return (
        <section id='About' className='p-5'>
            <p className='Heading cursor-scale'>About me</p>

            <div className='TextAnimationStop flex items-strech justify-around flex-wrap pb-24'>
                <p className='sm:w-1/3'>
                    <p className='text-5xl cursor-scale small mt-10'>Get to know me</p>
                    <br />
                    Hello, my name is Ayush Bahuguna, and I am currently pursuing a Bachelor&apos;s degree in Electronics and Communication Engineering from
                    <Link href={'https://www.gbpuat.ac.in/'} className='cursor-scale small' target='_blank'> GBPUAT Pantnagar</Link>, Uttrakhand. As an aspiring engineer, I have a keen interest in leveraging technology to create innovative solutions.
                    <br />
                    <br />
                    Driven by a curiosity to learn and grow, I actively seek new challenges to expand my skillset and contribute to meaningful projects.
                    Additionally, I was chosen for the Siemens Scholarship Program 2021, where only 200 students are chosen from all around India.
                </p>

                <div className='sm:w-1/2 flex items-start justify-between flex-col mt-10'>
                    <div>
                        <p className='text-5xl cursor-scale small pb-4'>My skills and tool</p>
                        <div className='flex items-center justify-start flex-wrap' >
                            {Skills?.map((Skill, index) => {
                                return (
                                    <Button key={index} variant={'outline'} className="m-2">{Skill.name}</Button>
                                )
                            })}
                        </div>
                    </div>
                    <Link href={'https://drive.google.com/file/d/1hegdSp6lI4kw-sEzMG6tnjKGj3JYP0oq/view?usp=sharing'} target='_blank' className='max-sm:mt-20'>
                        <Button variant={'outline'} className={'m-2'} > <Download /> &nbsp; Resume </Button>
                    </Link>

                </div>
            </div>

        </section>

    )
}
