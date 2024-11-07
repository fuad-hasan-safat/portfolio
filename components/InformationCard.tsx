import React from "react";

interface CardProps {
    title: string;
    subtitleInfo: string;
    cgpa: string;
    children: React.ReactNode;
  }
  
  export default function InformationCard({ title, subtitleInfo, cgpa, children } : CardProps ){
    return (
      <div className={`w-full max-w-[650px] bg-gradient-to-r from-slate-900 from-10% via-black via-30% to-gray-900 to-90% rounded-md z-[999] shadow-md shadow-slate-900 my-[25px] py-[30px] px-[20px] font-exo_2 relative`}>
        <h1 className={`text-3xl pr-[50px]`}>{title}</h1>
        <h2 className={`text-sm pt-[15px] text-slate-500`}>{subtitleInfo}</h2>
        <div  className={` absolute top-[35px] right-[15px] text-red-400`}>
          <span>{cgpa}</span>
        </div>
        <div className={`pt-[25px] text-[18px] text-slate-500`}>
          {children}
        </div>
      </div>
    );
  };