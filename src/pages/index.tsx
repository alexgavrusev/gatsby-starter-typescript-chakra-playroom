import React from "react";
import { Heading, Button, Text } from "@chakra-ui/core";

import Layout from "components/layout";

const Index = () => (
  <Layout title="STARTER">
    <Heading size="2xl" p={3}>
      Starter
    </Heading>
    <Button size="xs">
      <Text as="span">Ok</Text>
    </Button>
    <Button size="sm">
      <Text as="span">Ok</Text>
    </Button>
    <Button size="md">
      <Text as="span">Ok</Text>
    </Button>
    <Button size="lg">
      <Text as="span">Ok</Text>
    </Button>
  </Layout>
);

export default Index;
