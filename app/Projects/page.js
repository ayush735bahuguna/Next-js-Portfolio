import PanelSectionSm from '@/components/projects/PanelSectionSm'

import project1 from '../../asset/projects/quick-link.png';
import project2 from '../../asset/projects/Magic-pictures.png';
import project3 from '../../asset/projects/Social-link.png';
import project4 from '../../asset/projects/chat-link.png';
import project5 from '../../asset/projects/movie-adda.png';
import project6 from '../../asset/projects/dropbox-clone1.png';

export default function page() {
    return (
        <section id='Projects' className='mb-24 mt-10'>

            <div className='Heading p-6'>My Projects</div>

            <div className="flex items-center justify-center flex-wrap mt-10">

                <div style={{ maxWidth: '400px' }}>
                    <PanelSectionSm
                        Name={'MERN Notes App'}
                        Description={' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, sit?'}
                        imgUrl={project1}
                        url={'https://note-quick.netlify.app/'}
                    />
                </div>

                <div style={{ maxWidth: '400px' }}>

                    <PanelSectionSm
                        Name={'Dropbox-clone'}
                        Description={' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, sit?'}
                        imgUrl={project6}
                        url={'https://dropbox-app-clone.netlify.app/'}
                    />
                </div>

                <div style={{ maxWidth: '400px' }}>

                    <PanelSectionSm
                        Name={'MERN Chat App'}
                        Description={' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, sit?'}
                        imgUrl={project4}
                        url={'https://chat-link.netlify.app/'}
                    />
                </div>

                <div style={{ maxWidth: '400px' }}>

                    <PanelSectionSm
                        Name={'Social Media App'}
                        Description={' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, sit?'}
                        imgUrl={project3}
                        // url={'https://social-link-app.netlify.app/'}
                        url={'#'}
                    />
                </div>

                <div style={{ maxWidth: '400px' }}>

                    <PanelSectionSm
                        Name={'Movie-adda'}
                        Description={' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, sit?'}
                        imgUrl={project5}
                        url={'https://movie-adda.netlify.app/'}
                    />
                </div>

                <div style={{ maxWidth: '400px' }}>

                    <PanelSectionSm
                        Name={'Magic Pictures'}
                        Description={' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, sit?'}
                        imgUrl={project2}
                        url={'https://magic-pictures.netlify.app/'}
                    />
                </div>

            </div>

        </section>
    )
}
