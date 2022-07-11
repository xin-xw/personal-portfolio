import { Flex, Stack } from "@chakra-ui/react";
import { useState } from "react";
import ProjectCardItem from "./project-card-template";

function ProjectList() {
  const [isMinWidth, setIsMinWidth] = useState(false);

  return (
    <Flex>
      <Stack>
        <Stack
          direction={isMinWidth ? "column" : "column"}
          spacing={5}
          align="center"
        >
          <ProjectCardItem
            title="ment-to-be"
            desc={
              "An application that aims to match computer science students with industry professionals. Our goal for this platform was to provide an open space for students to gain more clarity and guidance towards their future. Students can gain more information about specific fields within the industry such as: front-end, back-end, full stack, machine learning, and more! This is also an open space for any career advice as well as any questions they may have throughout their job/internship recruiting process."
            }
            icon="/media/home/projects-menttobe-icon.png"
            tags={["React.js", "Express.js", "MongoDB", "ChakraUI"]}
            gh_link={"https://github.com/xinwng/ment-to-be"}
          ></ProjectCardItem>

          <ProjectCardItem
            title="Spotability"
            desc={
              "Ideated with 3 other colleagues a dating platform based on similarities detected through each other's music taste. Our application received 2 awards: Best Valentine's Day Hack and Best Design (UI) in competition against 160+ other participants at Binghamton University’s HackBU 2022. "
            }
            icon="/media/home/projects-spotability-icon.png"
            tags={[
              "React.js",
              "Django",
              "MongoDB",
              "ChakraUI",
              "Python3",
              "Figma",
            ]}
            gh_link={"https://github.com/xinwng/Spotability"}
          ></ProjectCardItem>

          <ProjectCardItem
            title="Explorify"
            desc="Explorify aims to unleash the potential of Spotify's Recommendation API. Provided your favorite songs along with specific track attributes such as: tempo, valence, energy, popularity, and more - the application aims to recommend you other similar tracks."
            icon="/media/home/projects-explorify-icon.png"
            tags={[
              "Express.js",
              "React.js",
              "AWS EC2",
              "PM2",
              "Nginx",
              "CI/CD",
            ]}
            gh_link={"https://github.com/xinwng/explorify"}
          ></ProjectCardItem>

          <ProjectCardItem
            title="$plice"
            desc="Splice was envisioned through yearning for a way that can easily split the bill when dining out with friends or family. Users can select the restaurant they are dining at and the menu for the respective restaurant will display. Each user will select the food they ordered and pass on the device to the next person. At the end, individualized bills will be generated for each user."
            icon="/media/home/projects-splice-icon.png"
            tags={[
              "C++",
              "Google Test Framework",
              "CI/CD",
              "Prototype",
              "Composite",
            ]}
            gh_link={"https://github.com/xinwng/splice"}
          ></ProjectCardItem>
        </Stack>
      </Stack>
    </Flex>
  );
}

export default ProjectList;
