import React from 'react'
import "./ContactUs.css"
import { Input } from "@/components/ui/input"
import { Button } from '../ui/button'
import Link from 'next/link'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Send } from 'lucide-react'



export default function ContactUs() {
    return (
        <section id='Contact' className='p-5'>
            <div id='layout' className='gap-4'>
                <p id="section" className='Heading cursor-scale'>Ready? <br />Let’s get started.</p>

                <div id="form" className="shadow-xl rounded-xl overflow-hidden" >
                    <Card className='border-none outline-none'>
                        <CardHeader>
                            <p className='text-slate-600/100 dark:text-white flex'>I am also interested in freelance opportunities, especially ambitious projects. However, if you have any other requests or questions, please don&apos;t hesitate to contact me.</p>
                        </CardHeader>
                        <CardContent>
                            <form target="_self"
                                action="https://docs.google.com/forms/d/e/1FAIpQLSdti5JRGiwbsstAroKUebg9yKJ1mdCG5EKZpgsj48Y8H6bPrQ/formResponse"
                                method="POST">
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Input type="email" placeholder="Enter your e-mail" name="entry.243773728" required={true} />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Input type="text" name="entry.1876194739" placeholder="Message" required={true} />
                                    </div>
                                </div>
                                <div className='flex justify-end mt-3'>
                                    <Button type={'submit'}> Send <span className="rotate-45 ms-2"><Send /></span> </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <footer className='flex justify-between items-start p-5 mt-10 mb-30'>
                <p>Made By Ayush Bahuguna</p>
                <Link href='/#Hero'>Home</Link>
            </footer>
        </section>
    )
}
