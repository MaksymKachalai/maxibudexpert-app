import React from 'react';
import { Hero } from '../../components/Hero/Hero';
import { ServicesSection } from '../../components/ServicesSection/ServicesSection';
import { AboutUsSection } from '../../components/AboutUs/AboutUsSection';
import { FormSection } from '../../components/FormSection/FormSection';

export const Homepage = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutUsSection />
      <FormSection />
    </>
  );
};
