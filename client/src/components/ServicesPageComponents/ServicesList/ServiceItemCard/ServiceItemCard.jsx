import * as SC from './ServiceItemCard.styled';

export const ServiceItemCard = ({ title, description, imageURL }) => {
  return (
    <SC.Card>
      <SC.ImageBox>
        <SC.Image src={imageURL} alt={title} />
      </SC.ImageBox>
      <SC.CardBox>
        <SC.Title>{title}</SC.Title>
        <SC.Description>{description}</SC.Description>
      </SC.CardBox>
    </SC.Card>
  );
};
