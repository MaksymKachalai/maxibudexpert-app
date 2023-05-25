import * as SC from './ServicesList.styled';
import { servicesData } from './data/servicesData';

import { ServiceItemCard } from './ServiceItemCard/ServiceItemCard';

export const ServicesList = () => {
  return (
    <SC.ServicesListSection>
      <SC.Title>Наші послуги</SC.Title>
      <SC.ServicesList>
        {servicesData.map((el) => {
          return <ServiceItemCard imageURL={el.imageURL} title={el.title} description={el.description} key={el.id} />;
        })}
      </SC.ServicesList>
    </SC.ServicesListSection>
  );
};
