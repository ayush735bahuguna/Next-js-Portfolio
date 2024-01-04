import Image from 'next/image'
import Link from 'next/link'

export default function PanelSectionSm({ Name, url, Description, imgUrl }) {
    return (
        <section >
            <Link href={url} target='_blank'>
                <div className='cursor-scale navigate hover:scale-105 mt-4' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflowY: "scroll", flexDirection: 'column', transition: 'all 0.1s ease' }}>


                    <Image src={imgUrl} style={{ width: '90%', borderRadius: '10px' }} alt='' />
                    <div className="m-5">
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
