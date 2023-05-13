import React, { useState } from 'react';
import * as SC from './ServicesList.styled';
import { FcBiotech, FcElectroDevices, FcFeedIn, FcCloth, FcPanorama, FcFullTrash } from 'react-icons/fc';

import { SwitchTags } from './SwitchTags/SwitchTags';
import { ServiceItemCard } from './ServiceItemCard/ServiceItemCard';

export const ServicesList = () => {
  const [activeItem, setActiveItem] = useState('flat');

  const handleButtonClick = (e) => {
    const { name } = e.target;
    if (activeItem === name) {
      return;
    }
    setActiveItem(name);
  };

  return (
    <SC.ServicesListSection>
      <h2>Наші послуги</h2>
      <SwitchTags handleButtonClick={handleButtonClick} activeItem={activeItem} />
      <SC.ImageTitle>
        <h3>Ремонт квартир</h3>
      </SC.ImageTitle>
      <SC.ServicesList>
        <ServiceItemCard
          title="Проектування"
          description="наші дизайнери та архітектори допоможуть вам розробити проект, який буде відповідати вашим потребам та бюджету."
        >
          <FcBiotech size={30} />
        </ServiceItemCard>
        <ServiceItemCard
          title="Розбірка та підготовка"
          description="ми здійснюємо розбірку старого покриття, підготовку стін та стель до подальшого ремонту."
        >
          <FcCloth size={35} />
        </ServiceItemCard>
        <ServiceItemCard
          title="Електромонтажні роботи"
          description="ми проводимо повний комплекс електромонтажних робіт, що дозволяє створити зручну та безпечну систему електропостачання."
        >
          <FcElectroDevices size={35} />
        </ServiceItemCard>
        <ServiceItemCard
          title="Гідроізоляція та сантехніка"
          description="наші спеціалісти проводять гідроізоляцію приміщення та встановлюють сантехніку, яка відповідатиме всім вашим потребам."
        >
          <FcFeedIn size={35} />
        </ServiceItemCard>
        <ServiceItemCard
          title="Оздоблювальні роботи"
          description="ми проводимо малярні роботи, кладку плитки, установку вікон та дверей, що дозволяє створити затишний та комфортний інтер'єр."
        >
          <FcPanorama size={35} />
        </ServiceItemCard>
        <ServiceItemCard
          title="Прибирання"
          description="наші дизайнери та архітектори допоможуть вам розробити проект, який буде відповідати вашим потребам та бюджету."
        >
          <FcFullTrash size={35} />
        </ServiceItemCard>
      </SC.ServicesList>
    </SC.ServicesListSection>
  );
};
