import PanelSectionSm from '@/components/projects/PanelSectionSm'

import project1 from '../../asset/projects/quick-link.png';
import project2 from '../../asset/projects/Magic-pictures.png';
import project3 from '../../asset/projects/Social-link.png';
import project4 from '../../asset/projects/chat-link.png';
import project5 from '../../asset/projects/movie-adda.png';
import project6 from '../../asset/projects/dropbox-clone1.png';

export default function page() {
    const Data = [
        {
            Name: 'MERN Notes App',
            Description: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, sit?',
            imgUrl: project1,
            url: 'https://note-quick.netlify.app/'
        },
        {
            Name: 'Dropbox-clone',
            Description: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, sit?',
            imgUrl: project6,
            url: 'https://dropbox-app-clone.netlify.app/'
        },
        {
            Name: 'MERN Chat App',
            Description: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, sit?',
            imgUrl: project4,
            url: 'https://chat-link.netlify.app/'
        },
        {
            Name: 'Social Media App',
            Description: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, sit?',
            imgUrl: project3,
            url: 'https://social-link-app.vercel.app/'
        },
        {
            Name: 'Movie-adda',
            Description: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, sit?',
            imgUrl: project5,
            url: 'https://movie-adda.netlify.app/'
        },
        {
            Name: 'Magic Pictures',
            Description: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, sit?',
            imgUrl: project2,
            url: 'https://magic-pictures.netlify.app/'
        },
    ]

    return (
        <section id='Projects' className='mb-24 mt-10'>
            <div className='Heading p-6'>My Projects</div>
            <div className="flex items-center justify-center flex-wrap mt-10">
                {Data?.map((e, i) => {
                    return <div key={i} style={{ maxWidth: '400px' }}>
                        <PanelSectionSm
                            Name={e.Name}
                            Description={e.Description}
                            imgUrl={e.imgUrl}
                            url={e.url}
                        />
                    </div>
                })}
            </div>

        </section>
    )
}
