
const range = (start : number = 0, end : number | undefined = undefined, step : number = 1) => (
  Array.apply(0, Array(end || start)).map((_element, index) => index * step + (end ? start : 0))
);

export default range;
