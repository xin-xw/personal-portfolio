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
      <Box mb={3}>
        <Heading fontSize="3xl" fontWeight="bold">
          Current
        </Heading>
      </Box>

      <UnorderedList>
        <ListItem>
          <Box textAlign="left" my={1}>
            <Text>
              <strong>{"Software Engineer"}</strong>
              {" @ "}
              <TextLink
                link="https://www.vmware.com/"
                name="VMware"
                icon={<ExternalLinkIcon />}
              ></TextLink>
              {
                " on the VMware on Cloud (VMC) POD Team part of the Cloud Business Infrastructure Group (CIBG). Throughout my time here, my objective is to develop software-defined data center (SDDC) lifecycle management services (POD) supporting SDDC bring-up, auto-scaling, software-update, and configuration for a variety of cloud platforms including AWS, Alibaba Cloud, Google Cloud Platform, and more"
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

        <Divider my={1.5} />
        <ListItem>
          <Box textAlign="left" my={1}>
            <Text>
              <strong>{"Content Developer"}</strong>
              {" @ "}
              <TextLink
                link="https://www.zybooks.com/about-us/"
                name="zyBooks"
                icon={<ExternalLinkIcon />}
              ></TextLink>
            </Text>
          </Box>
        </ListItem>

        <Divider my={1.5} />
      </UnorderedList>
    </Flex>
  );
}
