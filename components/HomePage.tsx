"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';

const words = ['developer', 'programmer', 'Professional Coder'];


export default function HomePage(){
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


    return (
        <div className="flex w-full content-between">
        <div className="w-[50%] text-left">
            <h6 className='font-playwrite text-[16px] text-slate-200'>Welcome to My World</h6>
            <h1 className="text-3xl font-bold font-exo_2">
                Hi, I’m <span className="text-[#cf3232] text-5xl font-dancing_script">Fuad Hasan</span><br />
                a <span className='transition-all ease-in-out duration-300'>{currentWord}</span>
                <span className="ml-1 typing-cursor text-gray-400 font-extralight">|</span>
            </h1>
        </div>
        <div className="w-[50%] text-right">
            <Image src="/profilepic/fuadhome.jpeg" alt="fuad" width={400} height={700} />
        </div>
    </div>
    );
};
