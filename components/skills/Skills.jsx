import React from 'react'
import './Skills.css'
import { Button } from '../ui/button';

export default function Skills() {
    const Skills = [
        { "name": "Node Js", },
        { "name": "Node Js", },
        { "name": "Node Js", },
        { "name": "Node Js", },
        { "name": "Node Js", },
        { "name": "Node Js", },
        { "name": "Node Js", },
        { "name": "Node Js", },
        { "name": "Node Js", },
        { "name": "Node Js", },
        { "name": "Node Js", },
        { "name": "Node Js", },
        { "name": "Node Js", },
        { "name": "Node Js", },
        { "name": "Node Js", },

    ]

    return (
        <>
            <p className='text-8xl cursor-scale w-1/3'>About me</p>
            <div style={{ minHeight: '100vh', width: '100vw' }} className='TextAnimationStop flex items-center justify-center p-4'>
                <p className='w-1/3'>
                    <p className='text-5xl cursor-scale small'>Get to know me</p>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dolore esse illo voluptatum ipsam, eligendi quibusdam hic ipsa minima accusantium commodi corporis quam recusandae odit, similique aspernatur enim cumque distinctio.</p>

                <div className='flex items-center justify-center flex-wrap w-1/3'>
                    <p className='text-5xl cursor-scale small'>My skills and tool</p>
                    {Skills?.map((Skill, index) => {
                        return (
                            <Button key={index} variant={'outline'} className="m-2">{Skill.name}</Button>
                        )
                    })}
                </div>
            </div>
        </>

    )
}
