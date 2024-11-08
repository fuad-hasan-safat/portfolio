"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import IconContainer from './IconContainer';
import {
    RiFacebookBoxFill,
    RiInstagramFill,
    RiLinkedinBoxFill,
    RiJavascriptFill,
    RiReactjsFill,
    RiCodeFill,
    RiHtml5Fill,
    RiCss3Fill
} from '@remixicon/react';
import styles from './header/RotatingImage.module.css';


const words = ['developer', 'programmer', 'Professional Coder'];


export default function HomePage() {
    const [currentWord, setCurrentWord] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            const word = words[loopNum % words.length];
            setCurrentWord(isDeleting ? word.substring(0, charIndex - 1) : word.substring(0, charIndex + 1));
            setCharIndex(charIndex + (isDeleting ? -1 : 1));

            if (!isDeleting && charIndex === word.length) {
                setTimeout(() => setIsDeleting(true), 800); // Pause before deleting
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const typingSpeed = isDeleting ? 75 : 150; // Smoother speed adjustments
        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, loopNum]);



    const openFacebookProfile = () => {
        window.open('https://www.facebook.com/fuad.safat.7', '_blank');
    };
    const openInstagramProfile = () => {
        window.open('https://www.instagram.com/fuadsafat', '_blank');
    };

    const openLinkedInProfile = () => {
        window.open('https://www.linkedin.com/in/fuad-hasan-safat', '_blank');
    };

    return (
        <div className="flex w-full flex-wrap content-between items-center">
            <div className="w-[50%] float-left">
                <h6 className='font-inter text-[16px] text-slate-200 uppercase'>Welcome to My World</h6>
                <h1 className="text-4xl font-bold font-exo_2 pt-[10px] leading-[60px]">
                    Hi, I’m <span className="text-[#edf339] text-5xl font-dancing_script">Fuad Hasan</span><br />
                    a <span className='transition-all ease-in-out duration-300 uppercase text-slate-300'>{currentWord}</span>
                    <span className="ml-1 typing-cursor text-gray-400 font-extralight">|</span>
                </h1>
                <p className='text-[18px] font-exo_2 pt-[15px] '>
                    I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.
                </p>

                <section id='sociallink' className='flex w-full flex-wrap content-between items-center pt-[100px]'>
                    <div className="w-[50%]">
                        <h5 className="uppercase pb-[15px] tracking-[5px] font-semibold text-slate-400">Find with me</h5>

                        <IconContainer
                            customClass="animate-swapColors1 transition-all duration-300 ease-in-out"
                            isClickable={true}
                            onClick={openFacebookProfile}
                        >
                            <RiFacebookBoxFill />
                        </IconContainer>

                        <IconContainer
                            customClass="animate-swapColors2 transition-all duration-300 ease-in-out"
                            isClickable={true}
                            onClick={openInstagramProfile}
                        >
                            <RiInstagramFill />
                        </IconContainer>

                        <IconContainer
                            customClass="animate-swapColors3 transition-all duration-300 ease-in-out"
                            isClickable={true}
                            onClick={openLinkedInProfile}
                        >
                            <RiLinkedinBoxFill />
                        </IconContainer>
                    </div>
                    <div className='w-[50%]'>
                        <h5 className='uppercase pb-[15px] tracking-[5px] font-semibold text-slate-400'>Best Skills On</h5>

                        <IconContainer
                            customClass={'shadow-[#ddf95c] text-[#ddf95c]'}
                        >
                            <RiJavascriptFill
                            />

                        </IconContainer>

                        <IconContainer
                            customClass={'shadow-[#9ff95c] text-[#9ff95c]'}
                        >
                            <RiCodeFill
                            />
                        </IconContainer>


                        <IconContainer
                            customClass={'shadow-[#5cf99f] text-[#5cf99f]'}
                        >
                            <RiReactjsFill
                            />

                        </IconContainer>

                        <IconContainer
                            customClass={'shadow-[#5cf9d4] text-[#5cf9d4]'}
                        >
                            <RiHtml5Fill
                            />

                        </IconContainer>

                        <IconContainer
                            customClass={'shadow-[#f75cb1] text-[#f75cb1]'}
                        >
                            <RiCss3Fill
                            />

                        </IconContainer>



                    </div>
                </section>
            </div>
            <div className="w-[50%]">
                {/* <Image className='float-right' src="/profilepic/fuad.png" alt="fuad" width={400} height={400} /> */}
                <div className={`${styles.imageContainer} z-[999] shadow-lg shadow-slate-900 hover:shadow-slate-500`}>
                    <Image
                        className={`${styles.profileImage}`}
                        src="/profilepic/fuad.png"
                        alt="fuad"
                        width={400}
                        height={400}
                    />
                    <div className={`${styles.ring}`}></div>
                    <div className={`${styles.ring}`}></div>
                    <div className={`${styles.ring} `}></div>
                    <div className={`${styles.ring}`}></div>
                </div>
            </div>
        </div>
    );
};
