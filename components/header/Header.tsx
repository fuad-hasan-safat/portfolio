// Header.js
"use client";
import React, { useEffect, useState } from 'react';
import styles from './header.module.css';
import Image from 'next/image';
import Button from '../Button';
import { RootState, useDispatch, useSelector } from '@/lib/store';
import { setActivePage } from '@/lib/features/header/headerSlice';
import styles1 from './RotatingImageHeader.module.css';

type SectionRefs = {
    home: React.RefObject<HTMLElement>;
    about: React.RefObject<HTMLElement>;
    resume: React.RefObject<HTMLElement>;
    contact: React.RefObject<HTMLElement>;
};

interface HeaderProps {
    sectionRefs: SectionRefs;
}


export default function Header({ sectionRefs }: HeaderProps) {

    const dispatch = useDispatch();
    const [isSticky, setIsSticky] = useState(false);
    const activePage = useSelector((state: RootState) => state.header.activePage);

    const handleNavigation = (page: keyof SectionRefs) => {
        dispatch(setActivePage(page));
        
        // Smooth scroll to the section
        if (sectionRefs[page].current) {
            sectionRefs[page].current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };


    useEffect(() => {
        const handleScroll = () => setIsSticky(window.scrollY > 100);
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${isSticky ? styles.sticky : ''}`}>
            <div className="flex justify-between items-center h-[100px] px-[100px] text-[18px] font-exo_2">
                <div onClick={() => handleNavigation('home')} className="flex flex-row items-center space-x-[10px] cursor-pointer">
                    {/* <Image src={'/profilepic/fuad.png'} width={50} height={50} alt="" /> */}
                    <div className={styles1.imageContainer}>
                    <Image
                        className={`${styles1.profileImage} float-right`}
                        src="/profilepic/fuad.png"
                        alt="fuad"
                        width={50}
                        height={50}
                    />
                    <div className={`${styles1.ring}`}></div>
                    <div className={`${styles1.ring}`}></div>
                    <div className={`${styles1.ring}`}></div>
                    <div className={`${styles1.ring}`}></div>
                </div>
                    <p className={`text-[20px] font-semibold tracking-widest ${styles.text3d}`}>Fuad</p>
                </div>
                <div className={`flex flex-row space-x-2`}>
                    <Button text="Home" onClick={() => handleNavigation('home')}
                        className={activePage === 'home' ? 'text-[#f6e054]' : 'text-[#c8c5c5]'} />
                    <Button text="About" onClick={() => handleNavigation('about')}
                        className={activePage === 'about' ? 'text-[#f6e054]' : 'text-[#c8c5c5]'} />
                    <Button text="Resume" onClick={() => handleNavigation('resume')}
                        className={activePage === 'resume' ? 'text-[#f6e054]' : 'text-[#c8c5c5]'} />
                    <Button text="Contact" onClick={() => handleNavigation('contact')}
                        className={activePage === 'contact' ? 'text-[#f6e054]' : 'text-[#c8c5c5]'} />
                </div>
            </div>
        </header>
    );
}
