"use client"
import React, { useEffect, useState } from 'react';
import styles from './header.module.css';
import Image from 'next/image';
import Button from '../Button';
import { useDispatch, useSelector } from '@/lib/store';
import { useAppSelector } from '@/lib/hooks';
import { setActivePage } from '@/lib/features/header/headerSlice';

export default function Header() {

    const dispatch = useDispatch();
    const [isSticky, setIsSticky] = useState(false);
    const { activePage } = useSelector((state) => state.header);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    function handleHome(): void {
        dispatch(setActivePage('home'))
    }

    function handleAbout(): void {
        dispatch(setActivePage('about'))
    }

    function handleResume(): void {
        dispatch(setActivePage('resume'))
    }

    function handleContact(): void {
        dispatch(setActivePage('contact'))
    }

    return (
        <>
            <header className={`${styles.header} ${isSticky ? styles.sticky : ''}`}>
                <div className='flex justify-between items-center h-[100px] px-[100px] text-[18px] font-exo_2 bg-[#212529]'>
                    <div className='flex flex-row items-center space-x-[10px]'>
                        <Image
                            src={'/profilepic/fuad.png'}
                            width={50}
                            height={50}
                            alt=''
                        />
                        <p className='text-[20px] font-semibold'>Fuad</p>
                    </div>
                    <div className='flex flex-row space-x-2'>
                        <Button text="Home"
                            className={`${activePage === 'home' ? 'text-[#fffcfa]' : 'text-[#878584]'}`}
                            onClick={handleHome}
                        />
                        <Button text="About"
                            className={`${activePage === 'about' ? 'text-[#fffcfa]' : 'text-[#878584]'}`}
                            onClick={handleAbout} />
                        <Button text="Resume"
                        className={`${activePage === 'resume' ? 'text-[#fffcfa]' : 'text-[#878584]'}`}
                            onClick={handleResume} />

                        <Button text="Contact"
                            className={`${activePage === 'contact' ? 'text-[#fffcfa]' : 'text-[#878584]'}`}
                            onClick={handleContact} />
                    </div>
                </div>
            </header >
            <div className={styles['hdr-cover']}></div>
        </>
    );
}
