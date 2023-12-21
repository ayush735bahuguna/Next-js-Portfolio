"use client"
import Projects from '@/components/projects/Projects'
import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import styles from './page.module.css'
import Skills from '@/components/skills/Skills'


import { useTheme } from "next-themes"
export default function page() {
  // const { setTheme, resolvedTheme } = useTheme();

  // const changeThemeFunction = () => {
  //   if (resolvedTheme !== undefined) {
  //     if (resolvedTheme === 'light') {
  //       setTheme('dark');
  //     } else {
  //       setTheme('light')
  //     }
  //   }
  // }

  const MainWrapperRef = useRef();
  const heroRef = useRef();
  const SkillsRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();


  useGSAP(() => {
    // gsap.registerPlugin(ScrollTrigger);

    // const triggers = [
    //   { "start": "top 80px", "end": "bottom 80px", "class": styles.heroColorClass, "trigger": heroRef.current, "target": MainWrapperRef.current },
    //   { "start": "top 80px", "end": "bottom 80px", "class": styles.aboutColorClass, "trigger": SkillsRef.current, "target": MainWrapperRef.current },
    //   { "start": "top 80px", "end": "bottom 80px", "class": styles.projectsColorClass, "trigger": projectsRef.current, "target": MainWrapperRef.current },
    //   { "start": "top 80px", "end": "bottom 80px", "class": styles.contactColorClass, "trigger": contactRef.current, "target": MainWrapperRef.current },
    // ];

    // triggers.forEach((trigger) => {
    //   ScrollTrigger.create(
    //     {
    //       start: trigger.start,
    //       end: trigger.end,
    //       trigger: trigger.trigger,
    //       toggleClass: {
    //         className: trigger.class,
    //         targets: trigger.target
    //       }
    //     }
    //   )
    // })



    gsap.set('.cursor', { xPercent: -50, yPercent: -50 });

    var cur = document.querySelector('.cursor');

    window.addEventListener('mousemove', e => {
      gsap.to(cur, 0.05, { x: e.clientX, y: e.clientY });
    });


  }, [])


  return (
    <div ref={MainWrapperRef} style={{ transition: 'background-color ease 0.4s' }}>
      <div className="cursor"></div>

      <div ref={heroRef}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatibus possimus nulla cum ducimus suscipit sapiente perferendis dignissimos inventore eius id reiciendis placeat temporibus enim magni aspernatur iste velit esse adipisci consectetur hic doloribus, minus aliquam. Laboriosam cupiditate explicabo possimus vero optio praesentium alias. Non iusto aspernatur hic temporibus exercitationem, quia, consequatur tempora vero nesciunt ea fugit ipsam quaerat alias quidem sequi voluptas, quasi soluta blanditiis. Accusamus quibusdam tenetur recusandae cumque voluptate odit officia aspernatur nobis, nemo perspiciatis harum esse deserunt vero fugiat temporibus porro culpa. Quam quaerat id blanditiis suscipit laborum esse. Consectetur ullam, atque tempora recusandae quos ea vel perspiciatis suscipit quia, labore voluptatibus. Quibusdam voluptatibus perspiciatis est deserunt eos dolore a maxime numquam molestiae, earum cupiditate corrupti praesentium possimus voluptate officiis aut iure aspernatur. Fugiat nostrum id cum cumque sint molestiae ratione. Exercitationem, facilis! Ea maiores, voluptatum fugit ratione perferendis voluptatem doloremque assumenda cupiditate praesentium molestias debitis, deleniti asperiores nulla magni modi natus dolor, magnam nobis neque quasi dolores eveniet ad porro. Nobis dolor fuga, voluptatum alias laboriosam voluptatem sapiente perspiciatis, magnam veniam doloribus commodi ab autem eos consectetur incidunt. Fugit, sed praesentium officiis culpa atque error voluptates odit eum. Veniam mollitia, iure cum aut nulla harum explicabo consequatur corporis eius, aspernatur culpa quidem. Dignissimos quas facere sequi nihil voluptatibus dolorum totam, eum quae aperiam tempore tempora aspernatur ab labore ipsam modi numquam iste atque consequuntur laudantium assumenda repellat velit sint, distinctio vitae. Rerum harum sint eligendi voluptatibus tempora, ipsa reprehenderit quidem, voluptate incidunt iure molestiae nobis, delectus facilis? Numquam alias nihil nobis dolorum mollitia eaque doloremque consequuntur. Ratione, reiciendis aliquid? Optio recusandae placeat maxime, consectetur quis adipisci culpa eum hic omnis laborum iste deleniti, reiciendis eligendi. Minima, ut ullam! Ex ducimus incidunt excepturi odit ipsam, neque qui quibusdam tempora, assumenda vel rerum veniam pariatur temporibus esse.
      </div>
      <Skills SkillsRef={SkillsRef} />
      <Projects projectsRef={projectsRef} contactRef={contactRef} />
    </div>
  )
}


// https://ahrefs.com/
