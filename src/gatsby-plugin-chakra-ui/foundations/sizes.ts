import { spacing } from "./spacing";

const largeSizes = {
  full: "100%",
  "3xs": "14rem",
  "2xs": "16rem",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
};

const container = {
  sm: "33.75rem",
  md: "45rem",
  lg: "60rem",
  xl: "71.25rem",
};

const sizes = {
  ...spacing,
  ...largeSizes,
  container,
};

export type Sizes = typeof spacing &
  typeof largeSizes & { container: typeof container };

export default sizes;
