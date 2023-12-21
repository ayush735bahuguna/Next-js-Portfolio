import Image from "next/image";


export default function Card({ img, link }) {
    return (
        <a href={link} target="_blank">
            <div className="p-2 m-2 clicked">
                <Image
                    src={img}
                    alt='skill'
                    loading="lazy"
                    style={{ width: '100px' }}
                />
            </div>
        </a>
    )
}
