export const getData = (brand, _data) => {
  const data = _data.filter((item) => {
    return brand.get(item.brand);
  });

  return data;
};
