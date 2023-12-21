import { Accessibility, ArrowRight, ArrowRightFromLine, Code2, Shield, User } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

import ServicesImg1 from '../../asset/home images/service/one.svg'
import ServicesImg2 from '../../asset/home images/service/two.svg'
import ServicesImg3 from '../../asset/home images/service/three.svg'

export default function Services() {
    return (
        <div className='p-5' style={{ display: 'flex', justifyContent: 'space-between', height: '100vh' }}>

            <div style={{ minWidth: '350px' }} className='flex justify-between flex-col items-start'>
                <div></div>
                <div>
                    <p className='text-8xl'>Services</p>
                    <p className='text-2xl'>We work with you to build your business.</p>
                </div>

                <div className='pt-10'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique </p>
                    <div className='p-1 flex gap-2 m-2 ml-0'> <Code2 color='blue' /> Website Design & Development</div>
                    <div className='p-1 flex gap-2 m-2 ml-0'> <Accessibility color='blue' /> Website Audit & Accessibility</div>
                    <div className='p-1 flex gap-2 m-2 ml-0'> <Shield color='blue' />Security and privacy</div>
                    <div className='p-1 flex gap-2 m-2 ml-0'> <User color='blue' />User Experience & User Interface Design</div>
                </div>
                <Button className="text-lg flex gap-2">Work with me <ArrowRight /> </Button>
                <div></div>
            </div>

            <div style={{ position: "relative", width: '100%', height: '100%' }} >
                <Image src={ServicesImg1} style={{ position: "absolute", right: '0px', bottom: '0px' }} alt='' />
                <Image src={ServicesImg2} style={{ position: "absolute", right: '200px', bottom: '30px' }} alt='' />
                <Image src={ServicesImg3} style={{ position: "absolute", right: '70px', bottom: '250px' }} alt='' />
            </div>
        </div>
    )
}
