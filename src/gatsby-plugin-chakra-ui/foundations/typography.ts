const typography = {
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },

  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem",
  },

  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },

  fonts: {
    heading: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
  },

  // To convert from px, divide by 2
  fontSizes: {
    "1": "0.125rem",
    "2": "0.25rem",
    "3": "0.375rem",
    "4": "0.5rem",
    "5": "0.625rem",
    "6": "0.75rem",
    "7": "0.875rem",
    "8": "1rem",
    "9": "1.125rem",
    "10": "1.25rem",
    "12": "1.5rem",
    "14": "1.75rem",
    "15": "1.875rem",
    "16": "2rem",
    "18": "2.25rem",
    "20": "2.5rem",
    "22": "2.75rem",
    "24": "3rem",
    "26": "3.25rem",
    "28": "3.5rem",
    "30": "3.75rem",
    "32": "4rem",
    "36": "4.5rem",
    "40": "5rem",
    "44": "5.5rem",
    "48": "6rem",
    "52": "6.5rem",
    "56": "7rem",
    "60": "7.5rem",
    "64": "8rem",
  },
};

export type Typography = typeof typography;

export default typography;
