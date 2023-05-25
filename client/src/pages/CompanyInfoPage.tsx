import { CompanyInfo } from '../components/CompanyInfoPageComponents/CompanyInfo';
import { FormSection } from '../components/FormSection/FormSection';
import { AboutUsSection } from '../components/HomepageComponents/AboutUs/AboutUsSection';

export const CompanyInfoPage = () => {
  return (
    <main>
      <CompanyInfo />
      <AboutUsSection />
      <FormSection />
    </main>
  );
};
