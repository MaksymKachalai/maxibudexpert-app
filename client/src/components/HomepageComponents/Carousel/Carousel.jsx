import React, { useState } from 'react';
import * as SC from './Carousel.styled';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import partner1 from '../../../images/partners/CeresitIcon.png';
import partner2 from '../../../images/partners/KnaufIcon.png';
import partner3 from '../../../images/partners/LegrandIcon.png';
import partner4 from '../../../images/partners/RehauIcon.png';
import partner5 from '../../../images/partners/ShnaiderIcon.png';

const images = [partner1, partner2, partner3, partner4, partner5];

export const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextImage = () => {
    currentImageIndex === images.length - 1 ? setCurrentImageIndex(0) : setCurrentImageIndex(currentImageIndex + 1);
  };

  const previousImage = () => {
    currentImageIndex === 0 ? setCurrentImageIndex(images.length - 1) : setCurrentImageIndex(currentImageIndex - 1);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // do your stuff here for left swipe
      previousImage();
    }

    if (touchStart - touchEnd < -75) {
      // do your stuff here for right swipe
      nextImage();
    }
  };

  return (
    <SC.Carousel>
      <SC.CarouselButton type="button" onClick={previousImage} side="left">
        <GrFormPrevious size={50} />
      </SC.CarouselButton>
      <SC.ImageContainer onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
        <SC.Image src={images[currentImageIndex]} alt="" />
      </SC.ImageContainer>
      <SC.CarouselButton type="button" onClick={nextImage} side="right">
        <GrFormNext size={50} />
      </SC.CarouselButton>
    </SC.Carousel>
  );
};
