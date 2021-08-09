import React from 'react';
import Title from '../Components/Title';
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';

function AboutPage() {
  return (
    <div className="AboutPage">
      <Title title={'About Me'} span={'About Me'} />
      <ImageSection />
      <Title title={'My Skills'} span={'My Skills'} />
      <div className="skills-container">
        <SkillsSection skill={'JavaScript'} progress={'60%'} width={'60%'} />
        <SkillsSection skill={'TypeScript'} progress={'30%'} width={'30%'} />
        <SkillsSection skill={'React JS'} progress={'70%'} width={'70%'} />
        <SkillsSection skill={'Node JS'} progress={'25%'} width={'25%'} />
        <SkillsSection skill={'HTML'} progress={'50%'} width={'50%'} />
        <SkillsSection skill={'CSS'} progress={'50%'} width={'50%'} />
      </div>
    </div>
  )
}

export default AboutPage;
