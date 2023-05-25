import { FormSection } from '../components/FormSection/FormSection';
import { ServicesList } from '../components/ServicesPageComponents/ServicesList/ServicesList';

export const ServicesPage = () => {
  return (
    <main
      style={{
        background: '#e9eaee',
      }}
    >
      <ServicesList />
      <FormSection />
    </main>
  );
};
