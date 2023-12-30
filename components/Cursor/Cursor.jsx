"use client"
import gsap from 'gsap';
import './Cursor.css'
import { useGSAP } from '@gsap/react';
import { ArrowUpRight, ArrowUpRightSquare } from 'lucide-react';

export default function Cursor() {

    useGSAP(() => {
        var cur = document.querySelector('.cursor');
        var curScale = document.querySelectorAll('.cursor-scale');
        var navigate = document.querySelectorAll('.navigate');
        var open = document.querySelector('#open');
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
                cur.classList.remove('Openproject');
            });
            link.addEventListener('mousemove', () => {
                cur.classList.add('grow');

                if (link.classList.contains('small')) {
                    cur.classList.remove('grow')
                    cur.classList.remove('Openproject');
                    cur.classList.add('grow-small');
                } else if (link.classList.contains('navigate')) {
                    cur.classList.remove('grow')
                    cur.classList.remove('grow-small');
                    cur.classList.add('Openproject');
                }
            });
        });

        navigate.forEach((elem) => {
            elem.addEventListener('mousemove', () => {
                open.classList.add('openVisible');
                open.classList.remove('openHidden');
            })
            elem.addEventListener('mouseleave', () => {
                open.classList.add('openHidden');
                open.classList.remove('openVisible');
            })
        })

    }, [])

    return (
        <div className="cursor flex justify-center items-center max-sm:hidden">
            <div id="open" className='openHidden text-white dark:text-black'>
                <ArrowUpRight />
            </div>
        </div>
    )
}
