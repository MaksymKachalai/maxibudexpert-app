import { ExtendedPrioritiesSection } from './ExtendedPrioritiesSection/ExtendedPrioritiesSection';
import { IntroductionSection } from './IntroductionSection/IntroductionSection';
import { PrioritiesSection } from './PrioritiesSection/PrioritiesSection';

export const CompanyInfo = () => {
  return (
    <>
      <IntroductionSection />
      <PrioritiesSection />
      <ExtendedPrioritiesSection />
    </>
  );
};
