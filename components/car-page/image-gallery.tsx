"use client";

import React, { FC } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ContainNextImage from "../contain-next-image";

interface Props {
  colors: { color: string; colorImg: string; colorText: string }[];
}

const ImageGallery: FC<Props> = ({ colors }): JSX.Element => {
  const carImages = colors.map((color) => color.colorImg);
  const carColors = colors.map((color) => color.color);
  const carColorsText = colors.map((color) => color.colorText);
  return (
    <div className="w-full">
      <Carousel
        emulateTouch
        infiniteLoop
        showIndicators={false}
        showArrows={false}
        // autoPlay
        renderThumbs={() =>
          carColors.map((color, index) => (
            <div
              key={index}
              style={{ backgroundColor: color }}
              className="h-full w-full rounded-full"
            />
          ))
        }
      >
        {carImages.map((image, index) => (
          <div key={image} className="relative h-[300px] w-full cursor-pointer">
            <ContainNextImage
              key={image}
              src={image}
              alt={`${image} preview`}
              priority={index === 0}
            />

            <div className="absolute -bottom-[5px] left-1/2 -translate-x-1/2">
              Màu sắc :{" "}
              <strong
                style={{
                  color:
                    carColors[index] === "#ffffff"
                      ? "#2b2b2b"
                      : carColors[index],
                }}
                className="uppercase"
              >
                {carColorsText[index]}
              </strong>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageGallery;
