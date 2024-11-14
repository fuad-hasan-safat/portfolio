import React from 'react';
import InformationCard from '../InformationCard';
import Link from 'next/link';

const ProfessionalSkill = () => {
  return (
   <>
   <div className='pt-[20px]'>
        <div  className="education">
            
        <InformationCard title={'React Js'} subtitleInfo={'Live Media Ltd'}   >
            <p>I started learning React Js. And <Link className='text-amber-300 hover:text-amber-500' href="https://lekharpoka.com" target="_blank" rel="noopener noreferrer">Lekharpoka</Link>  is my first project where I used React Js.</p>
            <p>Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
        </InformationCard>

        <InformationCard title={'St. Joseph Higher Secondary School'} subtitleInfo={'Intermideate school'} cgpa={'5/5'}  >
            <p> Here i complete My BSc</p>
            <p>Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>

        </InformationCard>


        <InformationCard title={'Rowmari C.G Zaman High School'} subtitleInfo={'Secondary School'} cgpa={'5/5'}  >
            <p> Here i complete My BSc</p>
            <p>Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>

        </InformationCard>

        </div>
   </div>
   </>
  );
};

export default ProfessionalSkill;
