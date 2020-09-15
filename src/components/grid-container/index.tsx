import React, { FC } from "react";
import {
  Container,
  ContainerProps,
  SimpleGrid,
  SimpleGridProps,
  Grid,
  GridProps,
  useTheme,
} from "@chakra-ui/core";

import type { Theme } from "gatsby-plugin-chakra-ui/theme";

export const GridContainer: FC<ContainerProps & SimpleGridProps> = (props) => (
  <Container
    as={SimpleGrid}
    maxW={["full", "sm", "md", "lg", "xl"]}
    columns={12}
    gap={4}
    {...props}
  />
);

export const BreakoutGridContainer: FC<ContainerProps & GridProps> = (
  props
) => {
  const theme = useTheme<Theme>();

  const four = theme.space[4];

  const { sm, md, lg, xl } = theme.sizes.container;

  const getColSize = (size: string) =>
    // total available space minus 13 gaps; divided into 12 columns
    `minmax(auto, calc((${size} - ${four} * 13) / 12))`;

  const getGridTemplateColumns = (size: string) =>
    `1fr ${four} repeat(12, ${getColSize(size)} ${four}) 1fr`;

  return (
    <Container
      as={Grid}
      maxW="unset"
      templateColumns={[sm, sm, md, lg, xl].map(getGridTemplateColumns)}
      px={0}
      {...props}
    />
  );
};
