

export default function Card({ img, link }) {
    return (
        <a href={link} target="_blank">
            <div className="p-2 m-2 clicked">
                <img
                    src={img}
                    alt='skill'
                    loading="lazy"
                    style={{ width: '100px' }}
                />
            </div>
        </a>
    )
}
