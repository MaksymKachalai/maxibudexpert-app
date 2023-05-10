import React from 'react';
import { Hero } from '../../components/HomepageComponents/Hero/Hero';
import { ServicesSection } from '../../components/HomepageComponents/ServicesSection/ServicesSection';
import { AboutUsSection } from '../../components/HomepageComponents/AboutUs/AboutUsSection';
import { ProccessSection } from '../../components/HomepageComponents/ProccessSection/ProccessSection';
import { FormSection } from '../../components/HomepageComponents/FormSection/FormSection';
import { PartnersSection } from '../../components/HomepageComponents/PartnersSection/PartnersSection';

export const Homepage = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutUsSection />
      <ProccessSection />
      <FormSection />
      <PartnersSection />
    </>
  );
};
