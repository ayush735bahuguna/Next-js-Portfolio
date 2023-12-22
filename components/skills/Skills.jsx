import './Skills.css'
import { Button } from '../ui/button';

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
        <section id='About'>
            <p className='text-8xl cursor-scale p-5'>About me</p>
            <div style={{ width: '100vw' }} className='TextAnimationStop flex items-start justify-around p-4'>
                <p className='w-1/3'>
                    <p className='text-5xl cursor-scale small'>Get to know me</p>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dolore esse illo voluptatum ipsam, eligendi quibusdam hic ipsa minima accusantium commodi corporis quam recusandae odit, similique aspernatur enim cumque distinctio.
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dolore esse illo voluptatum ipsam, eligendi quibusdam hic ipsa minima accusantium commodi corporis quam recusandae odit, similique aspernatur enim cumque distinctio.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dolore esse illo voluptatum ipsam, eligendi quibusdam hic ipsa minima accusantium commodi corporis quam recusandae odit, similique aspernatur enim cumque distinctio.
                </p>

                <div className='w-1/2'>
                    <p className='text-5xl cursor-scale small pb-5'>My skills and tool</p>
                    <div className='flex items-center justify-start flex-wrap' >
                        {Skills?.map((Skill, index) => {
                            return (
                                <Button key={index} variant={'outline'} className="m-2">{Skill.name}</Button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>

    )
}
