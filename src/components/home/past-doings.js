import {
  Heading,
  Flex,
  Box,
  Text,
  useMediaQuery,
  Divider,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import React from "react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import TextLink from "./text-link";

export default function PastDoings() {
  const [desktopQuery] = useMediaQuery("(min-width: 700px)");
  const [isMinWidth, setIsMinWidth] = useState(false);

  useEffect(() => {
    if (desktopQuery !== isMinWidth) {
      setIsMinWidth(desktopQuery);
    }
  }, [isMinWidth, desktopQuery]);

  return (
    <Flex direction="column">
      <Box mb={3}>
        <Heading fontSize="3xl" fontWeight="bold">
          {/* Past experiences 🚌 */}
          Previously...
        </Heading>
      </Box>

      <UnorderedList>
        {/* <ListItem>
          <Box textAlign="left" my={1}>
            <Text>
              <strong>{"Campus Ambassador"}</strong>
              {" @ "}
              <TextLink
                link="https://simplify.jobs/"
                name="Simplify"
                icon={<ExternalLinkIcon />}
              ></TextLink>
            </Text>
          </Box>
        </ListItem> */}

        {/* <Divider my={1.5} /> */}
        <ListItem>
          <Box textAlign="left" my={1}>
            <Text>
              <strong>{"Best Valentine's Day Hack & Best Design (UI)"}</strong>
              {" out of 160+ participants at"}
              <TextLink
                link="https://hackbu.org"
                name="HackBU 2022"
                // icon={<ExternalLinkIcon />}
              ></TextLink>
              {" for creating "}
              <TextLink
                link="https://github.com/xinwng/HACKBU2022"
                name="Spotability"
                // icon={<ExternalLinkIcon />}
              ></TextLink>
              {
                " - an app that attempts to discover and match couples based on each other's music taste, using technologies including React.js, Python, Django, MongoDB."
              }
            </Text>
          </Box>
        </ListItem>

        {/* <Divider my={1.5} /> */}
        <ListItem>
          <Box textAlign="left" my={1}>
            <Text>
              <strong>Invited Contestant for</strong> {""}{" "}
              <strong>{"JP Morgan Chase & Co.'s"}</strong>{" "}
              <TextLink
                link="https://careers.jpmorgan.com/us/en/students/programs/code-for-good"
                name="Code for Good"
                // icon={<ExternalLinkIcon />}
              ></TextLink>
              {
                " - where me and 3 other colleagues created a full-stack application utilizing: Flask, React.js, and SQLite to iterate, develop, and provide an interface for non-profit organization, GLSEN. Our goal was to source bullying and harassment policies across education agencies nationwide."
              }
            </Text>
          </Box>
        </ListItem>

        {/* <Divider my={1.5} /> */}
        <ListItem>
          <Box textAlign="left" my={1}>
            <Text>
              <strong>{"Software Engineer Intern at "}</strong>
              <TextLink
                link="https://vistendo.com/"
                name="Vistendo"
                // icon={<ExternalLinkIcon />}
              ></TextLink>
              {
                " - this is where I received lots of guidance and mentorship practicing full-stack development. This experience allowed me to prosper an expertise within React.js, provided me with exposure in utilizing various AWS solutions, and also led me in grasping intricate knowledge of SFTP & SCP protocols. Combining all of this new information along with the innovative tech stack allowed me to guide Vistendo further along their PWA development progress."
              }
            </Text>
          </Box>
        </ListItem>

        {/* <Divider my={1.5} /> */}
        <ListItem>
          <Box textAlign="left" my={1}>
            <Text>
              <strong>{"Computer Scientist & Subteam Co-Lead at "}</strong>
              <TextLink
                link="https://www.lspace.asu.edu/"
                name="NASA L'Space MCA"
                // icon={<ExternalLinkIcon />}
              />
              {
                ", where I researched and designed a payload system with a group of students, exploring the Venusian atmosphere while abiding by a $250 million budget constraint"
              }
            </Text>
          </Box>
        </ListItem>

        {/* <Divider my={1.5} /> */}
      </UnorderedList>
    </Flex>
  );
}
