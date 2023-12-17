import React from 'react'

export default function Navbar() {
    return (
        <nav style={{ width: '100vw', position: 'fixed', top: '0px', height: '100px', display: 'flex', alignItems: 'center', zIndex: '99', justifyContent: 'center' }}>

            <div style={{ borderRadius: '20px', width: 'fit-content', boxShadow: '0 2px 10px rgba(0, 0, 0, .1)', backgroundColor: 'whitesmoke', padding: '5px 10px' }}>
                <ul style={{ display: 'flex', textDecoration: 'none', flexDirection: 'row', listStyleType: 'none', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', margin: '0px', padding: '0px' }}>
                    <li className='m-2 mx-3'>Home</li>
                    <li className='m-2 mx-3'>About</li>
                    <li className='m-2 mx-3'>Skills</li>
                    <li className='m-2 mx-3'>Projects</li>
                    <li className='m-2 mx-3'>
                        <a href='https://acknowledgment.netlify.app'>Contact    </a>
                    </li>
                </ul>
            </div>

        </nav>
    )
}
