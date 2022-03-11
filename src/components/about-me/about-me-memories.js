import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { Image, Text } from "@chakra-ui/react";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Flex, Box, Heading } from "@chakra-ui/react";

function AboutMeMemories({ memories }) {
  return (
    <Flex direction="column">
      <Box my={4}>
        <Heading fontSize="3xl" fontWeight={"bold"}>
          Memories
        </Heading>
      </Box>
      {memories ? <Text> Yes </Text> : <Text> No</Text>}

      <Box>
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
            {memories?.map((img, idx) => {
              <Box>
                <Slide key={img} index={idx}>
                  <Image
                    width="300px"
                    height="500px"
                    src={img.src}
                    alt={img.alt}
                  ></Image>
                </Slide>
              </Box>;
            })}
            <Slide index={0}>
              <Box>
                <Image
                  width="300px"
                  height="500px"
                  src={"/media/about-me/memories/1.jpeg"}
                  alt={"s"}
                ></Image>
              </Box>
            </Slide>
          </Slider>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
      </Box>
    </Flex>
  );
}

export default AboutMeMemories;
