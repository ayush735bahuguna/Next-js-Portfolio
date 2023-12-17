import React from 'react'
import ModeToggle from './ModeToggle'

export default function Header() {
    return (
        <div className='w-full p-5 flex justify-between bg-slate-100/50'>
            Header
            <ModeToggle />
        </div>
    )
}
