"use client"
import Projects from '@/components/projects/Projects'
import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './page.module.css'


export default function page() {


  const heroRef = useRef();
  const SkillsRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  const MainWrapperRef = useRef();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggers = [
      { "start": "top 80px", "end": "bottom 80px", "class": styles.heroColorClass, "trigger": heroRef.current, "target": MainWrapperRef.current },
      { "start": "top 80px", "end": "bottom 80px", "class": styles.aboutColorClass, "trigger": SkillsRef.current, "target": MainWrapperRef.current },
      { "start": "top 80px", "end": "bottom 80px", "class": styles.projectsColorClass, "trigger": projectsRef.current, "target": MainWrapperRef.current },
      { "start": "top 80px", "end": "bottom 80px", "class": styles.contactColorClass, "trigger": contactRef.current, "target": MainWrapperRef.current },
    ];

    triggers.forEach((trigger) => {
      ScrollTrigger.create(
        {
          start: trigger.start,
          end: trigger.end,
          // markers: true,
          trigger: trigger.trigger,
          toggleClass: {
            className: trigger.class,
            targets: trigger.target
          }
        }
      )
    })

  }, [])


  return (
    <div ref={MainWrapperRef} style={{ transition: 'background-color ease 0.4s' }}>
      <div className='p-5' ref={heroRef}>
        Other Components
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe vel, ut vitae voluptatem praesentium corporis. Cum rerum praesentium, placeat optio possimus eaque nostrum exercitationem esse ducimus est sunt suscipit vitae dolor sit? Repellat repellendus nulla, aperiam nam laudantium atque, molestiae recusandae voluptate fugiat soluta nobis itaque reiciendis reprehenderit unde quibusdam molestias, qui odit quos commodi eos minus sunt quas tenetur error. Error laborum aliquam alias, dicta in corrupti cupiditate vero excepturi enim provident fugiat hic architecto voluptatem tempore et ratione, velit doloremque quibusdam quia, quasi odit sequi neque asperiores. Fugiat, assumenda eos repudiandae ex molestias atque beatae unde dolor esse? Dolorum dolorem cupiditate quos fugiat molestiae aspernatur, tempora animi, eos, cum deleniti voluptatum enim dignissimos sed ipsam architecto laborum id a reprehenderit vitae modi sequi? Facere necessitatibus quod nulla doloribus velit sequi est. Dolorem nihil nam ab possimus porro placeat, neque molestias recusandae expedita perspiciatis assumenda illum voluptatum consequuntur commodi totam atque quos autem blanditiis itaque sapiente! Consectetur repellat autem dolore, odio quos ipsa reiciendis excepturi illum aperiam voluptate facilis libero quam consequatur. Vero eveniet qui magni aliquid consectetur dolor nisi eaque doloremque quas! Enim perferendis ullam earum, velit a assumenda, voluptatum odit recusandae harum, exercitationem laboriosam totam iure itaque veritatis corporis. Similique in ipsum laborum molestiae. Inventore mollitia odit quia eius assumenda ratione corporis aliquam hic laborum, neque beatae vitae suscipit asperiores atque magnam ex omnis odio quibusdam totam? Iusto corporis minima odit doloribus ut asperiores omnis aliquid veritatis minus at quas necessitatibus quasi, recusandae reprehenderit nesciunt similique doloremque enim ducimus consequatur, inventore laudantium perspiciatis accusamus. Ex, voluptatibus delectus! Iste sequi, eveniet odio laborum aliquam, incidunt quasi ducimus consequatur voluptates ipsam hic cumque recusandae dolor ad adipisci quam repellendus. Unde magnam labore nam fugiat numquam cum consequuntur quo distinctio impedit reiciendis necessitatibus suscipit vitae excepturi, sint cupiditate enim dolorum temporibus optio dolores odit tenetur ipsa. Fugiat saepe assumenda velit reprehenderit at ut enim. Mollitia libero nesciunt quas ipsam dolorem quam suscipit assumenda quibusdam, error quidem delectus fuga sunt nemo est! Porro omnis, earum non, dolores reiciendis nemo, nulla vitae fugiat est et voluptate pariatur odio. Nesciunt vero vel ipsum magni molestias! Sunt vitae asperiores consequuntur nulla ab debitis deserunt quia ad ut fuga dicta vero, nostrum reprehenderit tenetur. Odit facilis aliquam beatae minima aut eos expedita, libero alias aperiam nesciunt quos, quis voluptate aspernatur rerum esse. Ipsam eveniet aliquam eligendi ab quis? Adipisci esse asperiores incidunt mollitia labore in.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure quos nulla quidem laboriosam labore dolores sapiente dicta culpa cumque ducimus illum, optio quod totam qui nisi expedita repellendus aspernatur.lorem300
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, alias. Atque reiciendis labore culpa reprehenderit tempora neque iure eum cum, rerum perferendis soluta obcaecati minus, illo, vel sequi omnis! Eveniet incidunt laboriosam suscipit, sit natus iusto amet sunt fugiat facilis. Iusto perferendis saepe sit maiores excepturi nam quasi non, voluptatum eveniet molestias recusandae illum accusantium ipsam rem quis asperiores aut commodi est qui officia? Tempore aperiam iste nisi consequatur, non, aliquam voluptas cum odio a perspiciatis praesentium doloribus? Corrupti ut fugit distinctio perferendis hic eveniet aut eligendi dolores sed eius, ipsa architecto rerum dolor corporis vero consequatur quibusdam perspiciatis. Officiis beatae ipsam eos aspernatur illum, quibusdam a corrupti aliquam aperiam nostrum rerum maxime excepturi praesentium dolore accusantium assumenda! Quod odio quos in hic impedit numquam vel magni facere exercitationem laudantium sequi nihil assumenda voluptas necessitatibus corrupti, repellat neque explicabo! Fugit perferendis, ab dolorem, corporis eaque aperiam fuga ducimus nisi beatae architecto rem consequatur cumque suscipit illo nesciunt totam nihil explicabo autem, aut nulla saepe id ut quidem. Hic nostrum ut totam iste dolores eius. Ipsam suscipit excepturi, fuga sed doloremque veniam accusantium, cumque incidunt maxime sint, earum dolorem adipisci nulla molestias voluptatum ratione aperiam illum corrupti totam modi perferendis? Ab reiciendis, maiores neque vitae eius quasi non asperiores. Hic cum nostrum reiciendis repellat ipsum laborum nobis doloribus porro ipsa culpa atque placeat quas, rem similique sed ducimus dolores at accusantium enim saepe cumque! Repudiandae magnam, minima hic similique obcaecati expedita soluta. Est ipsam laboriosam provident at velit, reiciendis obcaecati fugiat consequuntur deleniti a debitis ipsum aut dolor, dolores aliquam! Recusandae explicabo libero dolore quisquam. Quo suscipit dolorem dolores, veritatis ipsam, recusandae non fugiat omnis provident numquam ullam? Dolore, suscipit! Explicabo sequi quaerat at fuga provident hic nesciunt laborum itaque expedita? Impedit voluptatum tempora autem vitae. Nihil ex earum repellat eligendi?
      </div>
      <Projects SkillsRef={SkillsRef} projectsRef={projectsRef} contactRef={contactRef} />
    </div>
  )
}
