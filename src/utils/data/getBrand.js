export const getBrand = (props) => {
  const map = new Map();
  props.forEach((element) => {
    map.set(element.brand, true);
  });

  return map;
};
