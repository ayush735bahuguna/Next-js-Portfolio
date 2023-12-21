import React from 'react'
import ModeToggle from './ModeToggle'
import { Code2 } from 'lucide-react'
import { Button } from '../ui/button'
import Navbar from './Navbar/Navbar'
// import Navbar from './Navbar/Navbar'

export default function Header() {
    return (
        <>
            <Navbar />
            <div className='w-full p-3 flex items-center justify-between rounded-lg'>
                <Button variant={'ghost'} className='flex gap-2'><Code2 />Ayush</Button>
                <ModeToggle />
            </div>
        </>
    )
}
