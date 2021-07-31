export const getStorage = () => {
  const storageData = JSON.parse(localStorage.getItem("data")) || [];

  return storageData;
};
