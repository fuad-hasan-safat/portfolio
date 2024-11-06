// Header.js
"use client";
import React, { useEffect, useState } from 'react';
import styles from './header.module.css';
import Image from 'next/image';
import Button from '../Button';
import { useDispatch, useSelector } from '@/lib/store';
import { setActivePage } from '@/lib/features/header/headerSlice';
import { useRouter } from 'next/navigation';

export default function Header() {
    const router = useRouter();
    const dispatch = useDispatch();
    const [isSticky, setIsSticky] = useState(false);
    const { activePage } = useSelector((state) => state.header);

    const handleNavigation = (page : 'home' | 'about' | 'resume' | 'contact') => {
        dispatch(setActivePage(page));
        router.push(`#${page}`);
    };

    useEffect(() => {
        const handleScroll = () => setIsSticky(window.scrollY > 100);
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${isSticky ? styles.sticky : ''}`}>
            <div className="flex justify-between items-center h-[100px] px-[100px] text-[18px] font-exo_2 bg-[#212529]">
                <div className="flex flex-row items-center space-x-[10px]">
                    <Image src={'/profilepic/fuad.png'} width={50} height={50} alt="" />
                    <p className="text-[20px] font-semibold">Fuad</p>
                </div>
                <div className="flex flex-row space-x-2">
                    <Button text="Home" onClick={() => handleNavigation('home')}
                        className={activePage === 'home' ? 'text-[#fffcfa]' : 'text-[#878584]'} />
                    <Button text="About" onClick={() => handleNavigation('about')}
                        className={activePage === 'about' ? 'text-[#fffcfa]' : 'text-[#878584]'} />
                    <Button text="Resume" onClick={() => handleNavigation('resume')}
                        className={activePage === 'resume' ? 'text-[#fffcfa]' : 'text-[#878584]'} />
                    <Button text="Contact" onClick={() => handleNavigation('contact')}
                        className={activePage === 'contact' ? 'text-[#fffcfa]' : 'text-[#878584]'} />
                </div>
            </div>
        </header>
    );
}
