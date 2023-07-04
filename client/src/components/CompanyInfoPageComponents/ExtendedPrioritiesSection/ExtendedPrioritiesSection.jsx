import * as SC from './ExtendedPrioritiesSection.styled';
import peopleImage from 'images/companyinfopage/peopleImage.jpg';
import qualityImage from 'images/companyinfopage/qualityImage.jpg';
import innovationImage from 'images/companyinfopage/innovationImage.jpg';

export const ExtendedPrioritiesSection = () => {
  return (
    <SC.ExtendedPrioritiesSection>
      <SC.ListTextBoxes>
        <SC.TextBox>
          <SC.TitleTextBox>Наше бачення</SC.TitleTextBox>
          <SC.InfoTextBox>
            Ми віримо, що процес ремонту і модернізації нерухомості може бути легким, швидким і, як результат,
            ефективним.
          </SC.InfoTextBox>
        </SC.TextBox>
        <SC.TextBox>
          <SC.TitleTextBox>Наша місія</SC.TitleTextBox>
          <SC.InfoTextBox>
            Місія, фундамент, цемент нашої компанії - це добробут і комфорт наших клієнтів кожного дня!
          </SC.InfoTextBox>
        </SC.TextBox>
      </SC.ListTextBoxes>
      <SC.MissionList>
        <SC.MissionItem>
          <SC.MissionImage src={peopleImage} alt="Двоє людей, що дивляться на план" />
          <SC.MissionCaption backgroundColor="#bf0138">
            <SC.CaptionTitle>Люди</SC.CaptionTitle>
            <SC.CaptionDescription>
              Люди - наша найбільша цінність. Працюючи пліч о пліч один з одним, ми маємо змогу забезпечувати відмінний
              результат.
            </SC.CaptionDescription>
          </SC.MissionCaption>
        </SC.MissionItem>
        <SC.MissionItem>
          <SC.MissionImage src={qualityImage} alt="фарбування дерева" />
          <SC.MissionCaption backgroundColor="#82beed">
            <SC.CaptionTitle>Якість</SC.CaptionTitle>
            <SC.CaptionDescription>
              Якість - запорука успіху нашої компанії. На протязі багатьох років, ми гарантували і давали якість нашим
              клієнтам.
            </SC.CaptionDescription>
          </SC.MissionCaption>
        </SC.MissionItem>
        <SC.MissionItem>
          <SC.MissionImage src={innovationImage} alt="Люди за ноутбуками досліджують графіки" />
          <SC.MissionCaption backgroundColor="#b6794b">
            <SC.CaptionTitle>Інновації</SC.CaptionTitle>
            <SC.CaptionDescription>
              Ми використовуємо нові технології в галузі будівництва та ремонту, що дає змогу збільшити час експлуатації
              та комфортного використання приміщення.
            </SC.CaptionDescription>
          </SC.MissionCaption>
        </SC.MissionItem>
      </SC.MissionList>
    </SC.ExtendedPrioritiesSection>
  );
};
