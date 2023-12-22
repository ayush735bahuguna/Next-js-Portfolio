import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function PanelSection({ Name, url, Description, imgUrl }) {
    return (
        <section className="panel">
            <Link href={url} target='_blank'>
                <div className='cursor-scale navigate' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflowY: "scroll", height: '90vh', flexDirection: 'column', transition: 'all 0.1s ease' }}>


                    <div className="box">
                        <Image src={imgUrl} style={{ width: '100%' }} alt='' />
                    </div>
                    <div className="m-5 content">
                        <p className='text-4xl'>
                            {Name}
                        </p>
                        <p>
                            {Description}
                        </p>
                    </div>

                </div>
            </Link>
        </section>
    )
}
