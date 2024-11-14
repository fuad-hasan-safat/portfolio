import React from 'react';
import Button from './Button';
import { RootState, useDispatch, useSelector } from '@/lib/store';
import { setResumeButton } from '../lib/features/resume/resume-slice'
import Education from './resume/Education';
import ProfessionalSkill from './resume/ProfessionalSkill';
import Exprience from './resume/Exprience';
export default function Resume() {
    const dispatch = useDispatch();
    const selectedButton = useSelector((state: RootState) => state.resume.selectedButton);

    const buttonDesign = 'px-[10px] py-[15px] transition duration-900 ease-in-out w-[33.33%]';
    const hoverEffect = 'hover:text-yellow-400 hover:z-[999]  hover:rounded-md hover:shadow-md hover:shadow-slate-500 hover:bg-gradient-to-br from-slate-100 via-sky-200 to-slate-200 ';
    const selectedButtonCss = 'text-yellow-400 z-[999] bg-slate-100 rounded-md shadow-md shadow-slate-500';

    return (
        <section>
            <div
                id='resumebuttonlist'
                className="flex w-full justify-center items-center mt-[25px] text-[22px] text-lime-500 bg-gradient-to-br from-slate-100 via-sky-200 to-slate-200 rounded-md shadow-2xl shadow-teal-200 hover:shadow-[8px_8px_15px_rgba(0,0,0,0.25)] transform hover:translate-y-1 transition-all duration-500 ease-in-out"
            >
                <Button
                    className={`${buttonDesign} ${hoverEffect} ${selectedButton === 'education' ? selectedButtonCss : ''} `}
                    text='Education'
                    onClick={() => dispatch(setResumeButton('education'))}
                />
                <Button
                    className={`${buttonDesign} ${hoverEffect} ${selectedButton === 'experience' ? selectedButtonCss : ''} `}
                    text='Experience'
                    onClick={() => dispatch(setResumeButton('experience'))}
                />
                <Button
                    className={`${buttonDesign} ${hoverEffect} ${selectedButton === 'skill' ? selectedButtonCss : ''} `}
                    text='Professional Skill'
                    onClick={() => dispatch(setResumeButton('skill'))}
                />
            </div>

            <div className='flex justify-center'>
            {selectedButton === 'education' && <Education/>  }
            {selectedButton === 'experience' && <Exprience/>  }
            {selectedButton === 'skill' && <ProfessionalSkill/>  }
            </div>


        </section>
    );
}
