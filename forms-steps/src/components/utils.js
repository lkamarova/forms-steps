export const prepareByDateArray = (arr) =>
  arr?.sort((a, b) => new Date(b.date) - new Date(a.date));

export const prepareDistanceArr = (arr, newObj) => {
  if (arr?.length === 0 || !arr.find((el) => el.date === newObj.date)) {
    return [...arr, newObj];
  }

  return arr?.map((el) => {
    if (el.date === newObj.date) {
      const dist = Number((el.distance + newObj.distance).toFixed(1));
      return { ...el, distance: dist };
    }

    return el;
  });
};
