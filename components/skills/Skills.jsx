import React from 'react'
import Card from './Card'
import './Skills.css'
import { Button } from '../ui/button';

export default function Skills({ SkillsRef }) {
    const Skills = [
        { "name": "Node Js", },
        { "name": "Node Js", },
        { "name": "Node Js", },
        { "name": "Node Js", },
        { "name": "Node Js", },
        { "name": "Node Js", },
        { "name": "Node Js", },
        { "name": "Node Js", },
        { "name": "Node Js", },
        { "name": "Node Js", },
        { "name": "Node Js", },
        { "name": "Node Js", },
        { "name": "Node Js", },
        { "name": "Node Js", },
        { "name": "Node Js", },

    ]
    return (
        <div style={{ height: '100vh' }} ref={SkillsRef} className='TextAnimationStop'>
            <p className='text-8xl cursor-scale'>Skills</p>
            {/* <div className="wrapper">

                <Card
                    img='https://icon-library.com/images/html-icon-png/html-icon-png-15.jpg'
                    link='https://developer.mozilla.org/en-US/docs/Web/HTML'
                />

                <Card
                    img='https://icon-library.com/images/css-icon-png/css-icon-png-0.jpg'
                    link='https://developer.mozilla.org/en-US/docs/Web/CSS'
                />
                <Card
                    img='https://icon-library.com/images/react_1353128.png'
                    link='https://react.dev/'
                />
                <Card
                    img='https://icon-library.com/images/bootstrap-icon-png/bootstrap-icon-png-10.jpg'
                    link='https://getbootstrap.com/'
                />
                <Card
                    img='https://icon-library.com/images/nodejs-icon/nodejs-icon-24.jpg'
                    link='https://nodejs.org/en'
                />
                <Card
                    img='https://icon-library.com/images/no-sql-icon/no-sql-icon-12.jpg'
                    link='https://www.mongodb.com/'
                />

                <Card
                    img='https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png'
                    link='https://expressjs.com/'
                />
                <Card
                    img='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1920px-Nextjs-logo.svg.png'
                    link='https://nextjs.org/'
                />

                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas delectus voluptate eaque modi officia beatae dolores animi quos molestiae porro vitae fugit, nobis ut obcaecati nulla ducimus, maxime tempora consequatur exercitationem, velit aut ex. Veniam architecto, sequi maiores, atque sit fugit ipsum ad possimus quisquam optio nemo laborum quam earum voluptatibus suscipit perspiciatis natus, repudiandae velit. Voluptatibus repellat, nam harum eum quo provident, sed soluta velit dolorum consequatur ad doloremque blanditiis. Exercitationem temporibus eaque aperiam earum reprehenderit quibusdam aspernatur officiis sequi, laudantium maxime officia hic repudiandae magnam, reiciendis dolor numquam at dicta autem facere natus neque possimus qui? Animi tempore dolorum natus quidem commodi, non officia facilis repudiandae laboriosam, consectetur dignissimos, sunt praesentium reiciendis laborum aliquam omnis labore blanditiis. Temporibus totam vitae sunt omnis similique molestiae ut, dolorem numquam amet laudantium fugit dolores eius, hic, eum soluta? Magni pariatur aut dolorem voluptates obcaecati, assumenda maiores repellendus nihil illo omnis aperiam labore quod fugit dolorum expedita quas earum qui libero consectetur sint laudantium reiciendis similique. Ea molestias minima ducimus consectetur fuga amet numquam est, dolorum nobis? Corporis recusandae nulla expedita, vitae iste neque, fuga eaque nesciunt nostrum quia aut impedit? Libero dolorem nostrum veritatis nihil at odio facere consequuntur nisi repudiandae?
            </div> */}
            <div className='flex items-center justify-center w-1/2'>
                {Skills?.map((Skill) => {
                    return (
                        <Button variant={'outline'} className="m-1">{Skill.name}</Button>
                    )
                })}
            </div>
        </div>

    )
}
