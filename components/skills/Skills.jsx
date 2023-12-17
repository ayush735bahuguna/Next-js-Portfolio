import React from 'react'
import Card from './Card'
import './Skills.css'

export default function Skills() {
    return (
        <>
            <h1>Skills</h1>
            <div class="wrapper">

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

                {/* <div class="one innerBox"></div>
                <div class="two innerBox"></div>
                <div class="three innerBox"></div>
                <div class="four innerBox"></div>
                <div class="five innerBox"></div>
                <div class="six innerBox"></div>
                <div class="seven innerBox"></div>
                <div class="eight innerBox"></div>
                <div class="nine innerBox"></div>
                <div class="ten innerBox"></div>
                <div class="eleven innerBox"></div>
                <div class="twelve innerBox"></div> */}
            </div>
        </>

    )
}
