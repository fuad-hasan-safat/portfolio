"use client";
import React, { useEffect, useRef } from 'react'
import HomePage from './HomePage'
import { useDispatch } from '@/lib/store';
import { setActivePage } from '@/lib/features/header/headerSlice';

export default function Fullbody() {

    const dispatch = useDispatch();
    const sectionRefs = {
        home: useRef(null),
        about: useRef(null),
        resume: useRef(null),
        contact: useRef(null),
    };

    // Intersection Observer to track section visibility
    useEffect(() => {
        console.log(sectionRefs); const handleIntersection = (entries: any[]) => {
            entries.forEach((entry) => {
                console.log("Observing:", entry.target.id, "Is intersecting:", entry.isIntersecting);
                if (entry.isIntersecting) {
                    dispatch(setActivePage(entry.target.id));
                }
            });
        };
        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: "0px 0px 0px 0px", // Offset by 110px from the top
            threshold: 0.7, // Trigger when at least 10% of the element is visible
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

            <section id="home" ref={sectionRefs.home} className="w-full h-screen pt-[110px]">
                <HomePage />
            </section>

            
            <section id="about" ref={sectionRefs.about} className="w-full h-screen pt-[110px]">
            <h1>ABOUT</h1>
                <HomePage />
            </section>

           
            <section id="resume" ref={sectionRefs.resume} className="w-full h-screen pt-[110px]">
            <h1>Resume</h1>
                <HomePage />
            </section>

            
            <section id="contact" ref={sectionRefs.contact} className="w-full h-screen pt-[110px]">
            <h1>CONTACT</h1>
                <HomePage />
            </section>
        </>
    )
}
