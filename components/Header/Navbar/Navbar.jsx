import { FileJson2, Home, Menu, MessageSquareShare, Sparkles, User } from 'lucide-react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import ModeToggle from '../ModeToggle'


export default function Navbar() {
    return (
        <nav style={{ width: '100vw', position: 'fixed', bottom: '0px', height: '100px', display: 'flex', alignItems: 'center', zIndex: '99', justifyContent: 'center' }}>

            <div className='bg-slate-100 dark:bg-slate-800' style={{ borderRadius: '20px', width: 'fit-content', boxShadow: '0 2px 10px rgba(0, 0, 0, .1)', padding: '5px 10px' }}>
                <ul style={{ display: 'flex', textDecoration: 'none', flexDirection: 'row', listStyleType: 'none', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', margin: '0px', padding: '0px' }}>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <li className='m-2 mx-3'> <Home /> </li>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Home </p>
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <li className='m-2 mx-3'> <User /></li>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>About me </p>
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <li className='m-2 mx-3'><Sparkles /></li>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Skills </p>
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <li className='m-2 mx-3'><FileJson2 /></li>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Projects </p>
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <li className='m-2 mx-3'><MessageSquareShare /></li>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Contact </p>
                            </TooltipContent>
                        </Tooltip>

                        <ModeToggle />
                    </TooltipProvider>
                </ul>
            </div>

        </nav>
    )
}
