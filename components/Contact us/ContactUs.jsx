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

                {/* <div id='form'>
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
                </div> */}
                <div id="form" className="shadow-xl rounded-xl overflow-hidden" >
                    <Card className='border-none outline-none'>
                        <CardHeader>
                            <p className='text-slate-600/100 dark:text-white flex'>I am also interested in freelance opportunities, especially ambitious projects. However, if you have any other requests or questions, please don't hesitate to contact me.</p>
                        </CardHeader>
                        <CardContent>
                            <form>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Input type="email" placeholder="Enter your e-mail" />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Input type="text" placeholder="Message" />
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                        <CardFooter className="flex justify-end">
                            <Button> Send <span className="rotate-45 ms-2"><Send /></span> </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
            <footer className='flex justify-between items-start p-5 mt-10 mb-30'>
                <p>Made By Ayush Bahuguna</p>
                <Link href='#Hero'>Home</Link>
            </footer>
        </section>
    )
}
