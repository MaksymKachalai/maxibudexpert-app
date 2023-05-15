import * as SC from './ServiceItemCard.styled';

export const ServiceItemCard = ({ title, description, children }) => {
  return (
    <SC.Card>
      <SC.CardBox>
        <div>{children}</div>
        <SC.Title>{title}</SC.Title>
      </SC.CardBox>
      <SC.Description>{description}</SC.Description>
    </SC.Card>
  );
};
