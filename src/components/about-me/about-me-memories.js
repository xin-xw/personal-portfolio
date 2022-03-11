import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { Image } from "@chakra-ui/react";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Flex, Box, Heading } from "@chakra-ui/react";

function AboutMeMemories({ images }) {
  return (
    <Flex direction="column">
      <Box my={4}>
        <Heading fontSize="3xl" fontWeight={"bold"}>
          Memories
        </Heading>
      </Box>

      <CarouselProvider
        naturalSlideWidth={300}
        naturalSlideHeight={500}
        totalSlides={6}
        dragEnabled={true}
        touchEnabled={true}
        // visibleSlides={isMinWidth ? 2 : 1}
        isPlaying={false}
        isIntrinsicHeight={true}
        style={{ cursor: "grabbing" }}
      >
        <Slider>
          {images?.map((i) => {
            <Slide index={0}>
              <Image width="500px" height="300" src={i.src} alt={i.alt}></Image>
            </Slide>;
          })}
        </Slider>
        <ButtonBack>B</ButtonBack>
      </CarouselProvider>
    </Flex>
  );
}

export default AboutMeMemories;
