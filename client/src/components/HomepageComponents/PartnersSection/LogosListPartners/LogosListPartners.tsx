import { useState, useEffect } from 'react';
import { FcPrevious, FcNext } from 'react-icons/fc';
import { useMediaQuery } from '../../../../hooks/UseMediaQuery/UseMediaQuery';
import { partnersImages } from '../../../../images/partners/partnersImages';
import * as SC from './LogosListPartners.styled';

export const LogosListPartners = () => {
  const [visibleAmount, setVisibleAmount] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const matchesMobile = useMediaQuery('(min-width: 290px) and (max-width: 640px)');
  const matchesTablet = useMediaQuery('(min-width: 641px) and (max-width: 1024px)');
  const matchesDesktop = useMediaQuery('(min-width: 1025px) and (max-width: 1440px)');
  const matchesDesktopLarge = useMediaQuery('(min-width: 1441px)');

  useEffect(() => {
    switch (true) {
      case matchesMobile:
        setVisibleAmount(1);
        break;
      case matchesTablet:
        setVisibleAmount(3);
        break;
      case matchesDesktop:
        setVisibleAmount(4);
        break;
      case matchesDesktopLarge:
        setVisibleAmount(5);
        break;
      default:
        setVisibleAmount(1);
        break;
    }
    setCurrentIndex(0);
  }, [matchesDesktop, matchesDesktopLarge, matchesMobile, matchesTablet]);

  const nextLogo = () => {
    const switchesAllowed = partnersImages.length - visibleAmount;
    if (currentIndex < switchesAllowed) {
      setCurrentIndex(currentIndex + 1);
      return;
    }
    setCurrentIndex(0);
  };

  const prevLogo = () => {
    const switchesAllowed = partnersImages.length - visibleAmount;
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      return;
    }
    setCurrentIndex(switchesAllowed);
  };

  const getLogos = () => {
    const emptyArray = Array(visibleAmount).fill(0);

    return emptyArray.map((_, index) => {
      let k = index + currentIndex;

      return (
        <SC.Item key={partnersImages[k].id}>
          <SC.Image src={partnersImages[k].image} alt={partnersImages[k].alt} />
        </SC.Item>
      );
    });
  };

  return (
    <SC.ListContainer>
      <SC.List>{getLogos()}</SC.List>
      {matchesDesktopLarge || (
        <SC.ControlsButtons>
          <SC.LeftButton type="button" onClick={prevLogo}>
            <FcPrevious size={30} />
          </SC.LeftButton>
          <SC.RightButton type="button" onClick={nextLogo}>
            <FcNext size={30} />
          </SC.RightButton>
        </SC.ControlsButtons>
      )}
    </SC.ListContainer>
  );
};
