import React from 'react';
import InformationCard from '../InformationCard';

const Exprience = () => {
  return (
   <>
   <div className='pt-[20px]'>
        <div  className="education">
            
        <InformationCard title={'Ahsanullah University of science and technology'} subtitleInfo={'BSc in Computer Science'} cgpa={'3.33/4'}  >
            <p> Here i complete My BSc</p>
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

export default Exprience;
