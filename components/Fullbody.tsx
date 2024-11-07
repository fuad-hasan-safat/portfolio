"use client";
import React, { useEffect, useRef } from 'react';
import HomePage from './HomePage';
import { useDispatch } from '@/lib/store';
import { setActivePage } from '@/lib/features/header/headerSlice';
import Header from './header/Header';
import Resume from './Resume';
import styles from '../components/header/header.module.css'

export default function Fullbody() {
    const dispatch = useDispatch();
    const sectionRefs = {
        home: useRef(null),
        about: useRef(null),
        resume: useRef(null),
        contact: useRef(null),
    };

    useEffect(() => {
        const handleIntersection = (entries: any[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    dispatch(setActivePage(entry.target.id));
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            threshold: 0.7,
        });

        Object.values(sectionRefs).forEach((ref) => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => {
            Object.values(sectionRefs).forEach((ref) => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, [dispatch]);

    return (
        <>
            <Header sectionRefs={sectionRefs} />
            <div id='fullcombinepage' className='px-[200px] relative'>

                <h1 className='fixed top-[50%] right-[-42px] px-[15px] py-[5px]  text-[26px]  text-slate-400 hover:text-white font-exo_2 shadow-sm  shadow-gray-400 hover:shadow-md hover:shadow-gray-200 z-[99999] tracking-[10px] rotate-[90deg] cursor-pointer'> Fuad </h1>

                <section id="home" ref={sectionRefs.home} className="pt-[110px]">
                    <HomePage />
                </section>

                <section id="about" ref={sectionRefs.about} className="pt-[110px]">
                    <h1>ABOUT</h1>
                    <HomePage />
                </section>

                <section id="resume" ref={sectionRefs.resume} className="pt-[110px] ">
                    <div className='flex justify-center items-center'>
                        <div>
                            <h6 className='text-yellow-400 font-thin text-[16px]'>1 year of  experience in web development</h6>
                            <h1 className={`text-4xl font-semibold text-slate-300 tracking-[10px] pt-[10px]`}>My Resume</h1>
                        </div>
                    </div>
                    <Resume />
                </section>

                <section id="contact" ref={sectionRefs.contact} className="pt-[110px]">
                    <h1>CONTACT</h1>
                    <HomePage />
                </section>
            </div>

        </>
    );
}
