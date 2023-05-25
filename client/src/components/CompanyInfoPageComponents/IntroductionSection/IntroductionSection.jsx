import * as SC from './IntroductionSection.styled';

export const IntroductionSection = () => {
  return (
    <SC.IntroductionSection>
      <SC.TitleIntroduction>
        Ми <span>MaxiBud Expert</span>
      </SC.TitleIntroduction>
      <SC.DescriptionIntroduction>
        компанія, що займається ремонтом квартир, будинків та комерційних приміщень
      </SC.DescriptionIntroduction>
      {/* <SC.HashLinkStyled smooth to="#form-section">
        Замовити дзвінок
      </SC.HashLinkStyled> */}
    </SC.IntroductionSection>
  );
};
