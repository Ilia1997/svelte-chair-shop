
export function prepareRatingData(reviewArr: any[]) {
  let actualItemsCount: number = 0;
  let actualItemsSum: number = 0;
  let starsCount: number = 0;
  
  for (let item of reviewArr) {
    if (item.rating) {
      if (+item.rating > 0 && +item.rating <= 5) {
        actualItemsCount++;
        actualItemsSum += +item.rating;
      }
    }
  }
  starsCount = Math.round(actualItemsSum / actualItemsCount);
  return {actualItemsCount, actualItemsSum, starsCount}
};


