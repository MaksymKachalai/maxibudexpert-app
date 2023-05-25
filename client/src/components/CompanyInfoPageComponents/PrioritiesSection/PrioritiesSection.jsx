import React from 'react';
import * as SC from './PrioritiesSection.styled';

export const PrioritiesSection = () => {
  return (
    <SC.PrioritiesSection>
      <SC.ListPriorities>
        <SC.ItemPriorities>Наша місія</SC.ItemPriorities>
        <SC.ItemPriorities>Наше бачення</SC.ItemPriorities>
        <SC.ItemPriorities>Наші цінності</SC.ItemPriorities>
      </SC.ListPriorities>
    </SC.PrioritiesSection>
  );
};
