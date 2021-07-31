import { ITEMS_PER_PAGE } from 'utils/config';

export const paginate = (products) => {
  const pages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const newProducts = Array.from({ length: pages }, (_, index) => {
    const start = ITEMS_PER_PAGE * index;

    return products.slice(start, start + ITEMS_PER_PAGE);
  });

  return newProducts;
};
