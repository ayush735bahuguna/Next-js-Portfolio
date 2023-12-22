import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className='flex justify-between items-start p-5 pb-10'>
            <p>Made By Ayush Bahuguna</p>
            <Link href={'#Hero'}>Home</Link>
        </footer>
    )
}
