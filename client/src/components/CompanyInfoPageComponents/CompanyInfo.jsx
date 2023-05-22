import * as SC from './CompanyInfo.styled';
import image from '../../images/companyInfo_background.jpg';

export const CompanyInfo = () => {
  return (
    <SC.CompanyInfoSection>
      <SC.Introduction>
        <SC.TitleIntroduction>
          Будуємо довгострокові відносини з нашими клієнтами за рахунок <span>відмінної якості робіт</span>
        </SC.TitleIntroduction>
        <SC.SeparationLine></SC.SeparationLine>
        <SC.DescriptionIntroduction>
          У першу чергу ми орієнтуємся на надання якісних послуг і гарні відгуки від замовників, а не великий потік
          клієнтів.
          <br />
          Таким чином, більш ніж 70% відсотків клієнтів повертаються до нас, розповідаючи про компанію друзям або
          знайомим.
        </SC.DescriptionIntroduction>
      </SC.Introduction>
      <div>
        <SC.Image src={image} alt="картинка з матеріалами для дизайну" />
      </div>
    </SC.CompanyInfoSection>
  );
};
