import React, { FC } from "react";
import { Box, BoxProps } from "@chakra-ui/core";
import GatsbyImage, { GatsbyImageProps } from "gatsby-image";
import GatsbyBackgroundImage, {
  IBackgroundImageProps,
} from "gatsby-background-image";

export const Image: FC<BoxProps & GatsbyImageProps> = (props) => (
  <Box as={GatsbyImage} {...props} />
);

export const BackgroundImage: FC<BoxProps & IBackgroundImageProps> = (
  props
) => <Box as={GatsbyBackgroundImage} {...props} />;
