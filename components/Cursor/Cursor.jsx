"use client"
import gsap from 'gsap';
import './Cursor.css'
import { useGSAP } from '@gsap/react';

export default function Cursor() {

    useGSAP(() => {
        var cur = document.querySelector('.cursor');
        var curScale = document.querySelectorAll('.cursor-scale');
        var mouseX = 0;
        var mouseY = 0;

        gsap.to({}, 0.016, {
            repeat: -1,
            onRepeat: function () {
                gsap.set(cur, {
                    css: {
                        left: mouseX,
                        top: mouseY
                    }
                })
            }
        });


        window.addEventListener('mousemove', e => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        curScale.forEach((link) => {
            link.addEventListener('mouseleave', () => {
                cur.classList.remove('grow')
                cur.classList.remove('grow-small')
            });
            link.addEventListener('mousemove', () => {
                cur.classList.add('grow');
                if (link.classList.contains('small')) {
                    cur.classList.remove('grow')
                    cur.classList.add('grow-small');
                }
            });
        });

    }, [])

    return (
        <div className="cursor"></div>
    )
}
