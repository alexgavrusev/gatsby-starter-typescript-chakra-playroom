import Input from "./input";

type Dict = Record<string, any>;

const baseStyle = {
  ...Input.baseStyle.field,
  textAlign: "center",
};

const sizes = {
  lg: {
    fontSize: 9,
    w: 12,
    h: 12,
    borderRadius: "md",
  },
  md: {
    fontSize: 8,
    w: 10,
    h: 10,
    borderRadius: "md",
  },
  sm: {
    fontSize: 7,
    w: 8,
    h: 8,
    borderRadius: "sm",
  },
};

const variants = {
  outline: (props: Dict) => Input.variants.outline(props).field,
  flushed: (props: Dict) => Input.variants.flushed(props).field,
  filled: (props: Dict) => Input.variants.filled(props).field,
  unstyled: Input.variants.unstyled.field,
};

const defaultProps = Input.defaultProps;

export default {
  baseStyle,
  sizes,
  variants,
  defaultProps,
};
