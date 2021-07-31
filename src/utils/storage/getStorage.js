const today = new Date().getDate();

export const getStorage = () => {
  const storageData = JSON.parse(localStorage.getItem("data") || "[]")
    .filter((i) => new Date(i.date).getDate() === today)
    .sort((a, b) => a.id - b.id);

  return storageData;
};
