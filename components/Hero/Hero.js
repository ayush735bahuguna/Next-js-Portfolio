import { GithubIcon, Instagram, Linkedin } from "lucide-react";

export default function Hero() {
    return (
        <div className='flex flex-col' style={{ paddingLeft: '10%', paddingTop: '10%', minHeight: '100vh', position: 'relative' }}>
            <div className='p-5 gap-4 pt-10' style={{ position: 'absolute', top: '0px', right: '0px', width: '100vw', height: '10px', display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                <GithubIcon size={'35px'} strokeWidth={1.3} className='cursor-scale small' />
                <Instagram size={'35px'} strokeWidth={1.3} className='cursor-scale small' />
                <Linkedin size={'35px'} strokeWidth={1.3} className='cursor-scale small' />
            </div>

            <span className='text-9xl font-semibold cursor-scale'>Hey,</span>
            <span className='text-9xl font-semibold cursor-scale'>I&apos;m Ayush</span>
            <p className='text-5xl font-semibold cursor-scale small' style={{ paddingLeft: '30%', paddingRight: '10%' }}>- a Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, fugiat!</p>
        </div>
    )
}
