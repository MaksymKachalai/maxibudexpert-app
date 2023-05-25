import * as SC from './PartnersSection.styled';
import { SectionContainer } from '../../../style/globalStyles';
import { LogosListPartners } from './LogosListPartners/LogosListPartners';

export const PartnersSection = () => {
  return (
    <SectionContainer>
      <SC.Title>Наші партнери</SC.Title>

      <LogosListPartners />
    </SectionContainer>
  );
};
