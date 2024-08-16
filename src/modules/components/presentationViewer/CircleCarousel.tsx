import React, { useEffect, useState } from "react";
import styles from "./CircleCarousel.module.css";
import leftImg from "../../../images/icons/left.png";

interface CircleCarouselProps {
  items: JSX.Element[];
  setMode: React.Dispatch<React.SetStateAction<number>>;
  initIdx?: number;
  selectedHandler: (idx: number) => void;
  isRightItemViewEn?: boolean;
  isLeftItemViewEn?: boolean;
  rightR?: string;
  leftL?: string;
}

const CircleCarousel: React.FC<CircleCarouselProps> = (
  props: CircleCarouselProps
) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(
    props.initIdx ?? 0
  );

  useEffect(() => {
    props.setMode(currentImageIndex);
  }, [currentImageIndex]);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === props.items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? props.items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.navButtonLeft} style={{ left: props.leftL }}>
        <img
          src={leftImg}
          alt="Left Arrow"
          className={styles.navButtonImg}
          onClick={prevSlide}
        />
      </div>
      {props.items
        .filter((_, i) => i === currentImageIndex)
        .map((_, index) => {
          // console.log(`Circle Carousel currentImageIndex:${currentImageIndex}`);
          return (
            <div key={index} className={styles.carouselWrapper}>
              {/* Left Image */}
              {props.isLeftItemViewEn === true && (
                <div className={styles.carouselItem}>
                  {props.items[(currentImageIndex - 1) % props.items.length]}
                </div>
              )}
              {/* Main Image */}
              <div
                className={styles.carouselItem}
                onClick={() => props.selectedHandler(currentImageIndex)}
              >
                {props.items[currentImageIndex % props.items.length]}
              </div>
              {/* Right Image */}
              {props.isRightItemViewEn === true && (
                <div className={styles.carouselItem}>
                  {props.items[(currentImageIndex + 1) % props.items.length]}
                </div>
              )}
            </div>
          );
        })}
      <div className={styles.navButtonRight} style={{ left: props.rightR }}>
        <img
          src={leftImg}
          alt="Right Arrow"
          className={styles.navButtonImg}
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};

export default CircleCarousel;
