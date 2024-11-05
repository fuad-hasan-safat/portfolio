"use client"
import React, { useEffect, useState } from 'react';
import styles from './header.module.css';
import Image from 'next/image';
import Button from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { activePage, setCurrentPage } from '@/store/slices/page_slice';


export default function Header() {
    const dispatch = useDispatch();
    const activepage = useSelector(activePage);
    const [isSticky, setIsSticky] = useState(false);

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
        dispatch(setCurrentPage('home'))
    }

    function handleAbout(): void {
        dispatch(setCurrentPage('about'))
    }

    function handleResume(): void {
    }

    function handleContact(): void {
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
                            className={`${activepage === 'home' ? 'text-yellow-200' : null}`}
                            onClick={handleHome}
                        />
                        <Button text="About"
                            className={`${activepage === 'about' ? 'text-yellow-200' : null}`}

                            onClick={handleAbout} />
                        <Button text="Resume"
                            onClick={handleResume} />

                        <Button text="Contact"
                            onClick={handleContact} />
                    </div>
                </div>
            </header >
            <div className={styles['hdr-cover']}></div>
        </>
    );
}
