import { Accessibility, ArrowRight, ArrowRightFromLine, Code2, Shield, User } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

import ServicesImg from '../../asset/home images/Services.svg'

export default function Services() {
    return (
        <section className='p-5'>
            <p className='text-8xl cursor-scale lg:w-2/3'>Here’s what you can expect from me...</p>

            <div className='flex justify-between items-start flex-wrap'>

                <div style={{ margin: 'auto' }} className='flex justify-between flex-col items-start'>
                    <span className='mt-10' >Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit. Sapiente, recusandae?</span>
                    <div className='p-1 flex gap-2 m-2 ml-0'> <Code2 color='blue' /> Website Design & Development</div>
                    <div className='p-1 flex gap-2 m-2 ml-0'> <Accessibility color='blue' /> Website Audit & Accessibility</div>
                    <div className='p-1 flex gap-2 m-2 ml-0'> <Shield color='blue' />Security and privacy</div>
                    <div className='p-1 flex gap-2 m-2 ml-0'> <User color='blue' />User Experience & User Interface Design</div>
                    <Button className="text-lg flex gap-2 mt-5">Work with me <ArrowRight /> </Button>
                </div>

                <Image src={ServicesImg} alt='' style={{ margin: 'auto' }} className='pt-10' />


            </div>

        </section>
    )
}
