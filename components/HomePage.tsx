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
                setTimeout(() => setIsDeleting(true), 500); // Pause before deleting
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const typingSpeed = isDeleting ? 50 : 100;
        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, loopNum]);

    return (
        <div className='flex justify-between overflow-y-auto w-full place-content-center'>
            <div className='w-[50%]'>
                <h1 className='text-3xl font-bold w-full font-exo_2'>
                    Hi, I’m <span className='text-[#cf3232] text-5xl font-dancing_script'> Fuad Hasan </span> <br /> a {currentWord}.<span className='font-thin text-slate-500'>|</span>
                </h1>

                
            </div>
            <div className='w-[50%]'>
                <Image src={"/profilepic/fuadhome.jpeg"} alt="fuad" width={400} height={700} />
            </div>


        </div>
    );
};
