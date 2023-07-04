import * as SC from './Hero.styled';

export const Hero = () => {
  return (
    <SC.Hero>
      <SC.HeroTitle>Ремонт квартир та будинків</SC.HeroTitle>
      <SC.HeroSubtitle>Повний спектр послуг з ремонту квартир, будинків та промислових об'єктів</SC.HeroSubtitle>
      <SC.HeroButtonMain type="button">
        <SC.HashLinkStyled smooth to="#form-section">
          Замовити дзвінок
        </SC.HashLinkStyled>
      </SC.HeroButtonMain>
    </SC.Hero>
  );
};
