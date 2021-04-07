import breakpointsMedia from '../breakpointsMedia';

function propToStyle(propName) {
  return (props) => {
    const propValue = props[propName];

    if (typeof propValue === 'string' || typeof propValue === 'number') {
      return {
        // textAlign: props.textAlign
        [propName]: propValue,
      };
    }

    if (typeof propValue === 'object') {
      const breakpoints = {};

      if (propValue.xs) breakpoints.xs = { [propName]: propValue.xs };
      if (propValue.md) breakpoints.md = { [propName]: propValue.md };
      if (propValue.xl) breakpoints.xl = { [propName]: propValue.xl };

      return breakpointsMedia(breakpoints);

      // return breakpointsMedia({
      //   xs: {
      //     [propName]: propValue.xs,
      //   },
      //   sm: {
      //     [propName]: propValue.sm,
      //   },
      //   md: {
      //     [propName]: propValue.md,
      //   },
      //   lg: {
      //     [propName]: propValue.lg,
      //   },
      //   xl: {
      //     [propName]: propValue.xl,
      //   },
      // });
    }
    return {};
  };
}

export default propToStyle;
