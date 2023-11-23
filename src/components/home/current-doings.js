import {
  Box,
  Flex,
  ListItem,
  Text,
  UnorderedList,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import TextLink from "./text-link";

export default function CurrentDoings() {
  const [desktopQuery] = useMediaQuery("(min-width: 700px)");
  const [isMinWidth, setIsMinWidth] = useState(false);

  useEffect(() => {
    if (desktopQuery !== isMinWidth) {
      setIsMinWidth(desktopQuery);
    }
  }, [isMinWidth, desktopQuery]);

  return (
    <Flex direction="column">
      <Box mt={0} mb={3}></Box>

      <UnorderedList>
        <ListItem>
          <Box textAlign="left" my={1}>
            <Text>
              <strong>
                {"Pursuing a Master's degree in Computer Science at "}
              </strong>
              <TextLink
                link="https://www.gatech.edu/"
                name="Georgia Institute of Technology"
                // icon={<ExternalLinkIcon />}
              ></TextLink>
            </Text>
          </Box>
        </ListItem>
        <ListItem>
          <Box textAlign="left" my={1}>
            <Text>
              <strong>{"Software Engineer at "}</strong>
              <TextLink
                link="https://www.vmware.com/"
                name="VMware"
                // icon={<ExternalLinkIcon />}
              ></TextLink>
              {
                " - VMware Cloud (VMC) Pod Team, Cloud Infrastructure Business Group (CIBG). Throughout my time here, my objective is to further enable software-defined data center as a service (SDDCaaS)."
              }
            </Text>
          </Box>
        </ListItem>

        {/* <Divider my={1.5} /> */}
        {/* <ListItem>
          <Box textAlign="left" my={1}>
            <Text>
              <strong>{"Incoming Software Engineer"}</strong>
              {" @ "}
              <TextLink
                link="https://www.vmware.com/company.html"
                name="VMware"
                icon={<ExternalLinkIcon />}
              ></TextLink>
            </Text>
          </Box>
        </ListItem> */}

        {/* <Divider my={1.5} /> */}
        <ListItem>
          <Box textAlign="left" my={1}>
            <Text>
              <strong>{"Content Developer at "}</strong>
              <TextLink
                link="https://www.zybooks.com/about-us/"
                name="zyBooks"
                // icon={<ExternalLinkIcon />}
              ></TextLink>
              {
                " - where I review, evaluate, and ensure quality of learning materials including questions, solutions, modules, activities, and other integrated tools."
              }
            </Text>
          </Box>
        </ListItem>

        {/* <Divider my={1.5} /> */}
      </UnorderedList>
    </Flex>
  );
}
