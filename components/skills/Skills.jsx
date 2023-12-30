import './Skills.css'
import { Button } from '../ui/button';
import { Download } from 'lucide-react';
import Link from 'next/link';

export default function Skills() {
    const Skills = [
        { "name": "Node Js", },
        { "name": "React Js", },
        { "name": "Next Js", },
        { "name": "express Js", },
        { "name": "Js", },
        { "name": "Html", },
        { "name": "Css", },
        { "name": "Tailwind", },
        { "name": "Bootstrap", },
        { "name": "Photoshop", },
        { "name": "Mongo DB", },
        { "name": "Rest full API", },
        { "name": "Netlify", },
        { "name": "Github", },
        { "name": "Git", },
        { "name": "GSAP", },
        { "name": "VS code", },

    ]
    return (
        <section id='About' className='p-5'>
            <p className='Heading cursor-scale'>About me</p>

            <div className='TextAnimationStop flex items-strech justify-around flex-wrap'>
                <p className='sm:w-1/3'>
                    <p className='text-5xl cursor-scale small mt-10'>Get to know me</p>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dolore esse illo voluptatum ipsam, eligendi quibusdam hic ipsa minima accusantium commodi corporis quam recusandae odit, similique aspernatur enim cumque distinctio.
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dolore esse illo voluptatum ipsam, eligendi quibusdam hic ipsa minima accusantium commodi corporis quam recusandae odit, similique aspernatur enim cumque distinctio.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dolore esse illo voluptatum ipsam, eligendi quibusdam hic ipsa minima accusantium commodi corporis quam recusandae odit, similique aspernatur enim cumque distinctio.
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
