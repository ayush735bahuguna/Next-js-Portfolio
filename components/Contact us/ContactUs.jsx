import React from 'react'
import svg from '../../asset/ContactUs.svg'
import "./ContactUs.css"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from '../ui/button'
import Link from 'next/link'


export default function ContactUs() {
    return (
        <section id='Contact' className='p-5'>
            <div id='layout'>
                <p id="section" className='Heading cursor-scale'>Ready? <br />Let’s get started.</p>

                <div id='form'>
                    <form target="_self"
                        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdEE23F1cVhir52GPPXtL7rPmb8_IHCuzB9UfNG2fIskDZJiA/formResponse"
                        method="POST">

                        <div className="mb-3">
                            <Input type="text" name="entry.1313705936" placeholder="Name" required />
                        </div>

                        <div className="mb-3">
                            <Input type="email" name="entry.2117149272" placeholder="Email address" required />
                        </div>

                        <div className="mb-3">
                            <Textarea placeholder="Type any Suggestions here." name="entry.280006415" />
                        </div>
                        <Button type="submit" className='m-1'>Submit</Button>
                        <Button type="reset" variant={'outline'} className='m-1'>Reset</Button>

                    </form>
                </div>

            </div>
            <footer className='flex justify-between items-start p-5 mt-10 mb-30'>
                <p>Made By Ayush Bahuguna</p>
                <Link href='#Hero'>Home</Link>
            </footer>
        </section>
    )
}
