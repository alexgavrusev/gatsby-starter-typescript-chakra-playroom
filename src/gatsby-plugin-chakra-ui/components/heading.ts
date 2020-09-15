const baseStyle = {
  fontFamily: "heading",
  lineHeight: "shorter",
  fontWeight: "bold",
};

const sizes = {
  "2xl": {
    fontSize: ["4xl", null, "5xl"],
  },
  xl: {
    fontSize: ["3xl", null, "4xl"],
  },
  lg: {
    fontSize: ["2xl", null, "3xl"],
  },
  md: { fontSize: 10 },
  sm: { fontSize: 8 },
  xs: { fontSize: 7 },
};

const defaultProps = {
  size: "xl",
};

export default {
  baseStyle,
  sizes,
  defaultProps,
};
