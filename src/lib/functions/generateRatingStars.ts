export function generateRatingStars(starsCount: number) {

    let starsContent: string = "";

    switch (starsCount) {
      case 1:
        starsContent = "★☆☆☆☆";
        break;
      case 2:
        starsContent = "★★☆☆☆";
        break;
      case 3:
        starsContent = "★★★☆☆";
        break;
      case 4:
        starsContent = "★★★★☆";
        break;
      case 5:
        starsContent = "★★★★★";
        break;
    }
    return starsContent;
  
};


