const baseStyle = {
  fontFamily: "heading",
  fontWeight: "bold",
};

const sizes = {
  "4xl": {
    fontSize: [30, null, 36],
    lineHeight: 1,
  },
  "3xl": {
    fontSize: [24, null, 30],
    lineHeight: 1,
  },
  "2xl": {
    fontSize: [18, null, 24],
    lineHeight: ["2.5rem", null, "1"],
  },
  xl: {
    fontSize: [15, null, 18],
    lineHeight: ["2.25rem", null, "2.5rem"],
  },
  lg: {
    fontSize: [12, null, 15],
    lineHeight: ["2rem", null, "2.25rem"],
  },
  md: { fontSize: 10, lineHeight: "1.75rem" },
  sm: { fontSize: 8, lineHeight: "1.5rem" },
  xs: { fontSize: 7, lineHeight: "1.25rem" },
};

const defaultProps = {
  size: "xl",
};

export default {
  baseStyle,
  sizes,
  defaultProps,
};
