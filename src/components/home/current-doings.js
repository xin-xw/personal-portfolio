import {
  Heading,
  Flex,
  Box,
  Text,
  useMediaQuery,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import React from "react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import TextLink from "./text-link";
import NextLink from "next/link";
import ActionButton from "../action-button";

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
      <Box mt={0} mb={3}>

      </Box>

      <UnorderedList>
        <ListItem>
          <Box textAlign="left" my={1}>
            <Text>
              <strong>{"Software Engineer, "}</strong>
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
              <strong>{"Content Developer, "}</strong>
              <TextLink
                link="https://www.zybooks.com/about-us/"
                name="zyBooks"
                // icon={<ExternalLinkIcon />}
              ></TextLink>
            </Text>
          </Box>
        </ListItem>

        {/* <Divider my={1.5} /> */}
      </UnorderedList>


    </Flex>
  );
}
