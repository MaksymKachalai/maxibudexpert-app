import React from 'react';
import { Hero } from '../../components/Hero/Hero';
import { ServicesSection } from '../../components/ServicesSection/ServicesSection';
import { AboutUsSection } from '../../components/AboutUs/AboutUsSection';
import { FormSection } from '../../components/FormSection/FormSection';
import { ProccessSection } from '../../components/ProccessSection/ProccessSection';
import { PartnersSection } from '../../components/PartnersSection/PartnersSection';

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
