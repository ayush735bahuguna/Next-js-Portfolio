import Image from 'next/image'
import Link from 'next/link'

export default function PanelSection({ Name, url, Description, imgUrl }) {
    return (
        <section className="panel">
            <Link href={url} target='_blank'>
                <div className='cursor-scale navigate hover:scale-105' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflowY: "scroll", height: '90vh', flexDirection: 'column', transition: 'all 0.1s ease' }}>


                    <Image src={imgUrl} style={{ width: '100%', borderRadius: '10px' }} alt='' />
                    <div className="m-5 content">
                        <p className='text-3xl'>
                            {Name}
                        </p>
                        <p className='text-slate-600'>
                            {Description}
                        </p>
                    </div>

                </div>
            </Link>
        </section>
    )
}
