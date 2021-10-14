// @pagination Function
const setPagiNation = (currentPage: number, totalPage: number) => {
  let result;
  const tempArray = Array(totalPage < 5 ? totalPage : 5).fill(0);
  if (currentPage < 5 / 2) {
    /* 1, 2 */
    // result = [1, 2, 3, 4, 5];
    result = tempArray.map((_, i) => i + 1);
  } else if (currentPage > totalPage - 5 / 2) {
    /* n-1, n */
    // result = [n-4, n-3 ,n-2 ,n-1, n];
    result = tempArray.map((_, i) => totalPage - i).reverse();
  } else {
    /* else */
    // result = [n-2, n-1 , n ,n+1, n+2];
    result = tempArray.map((_, i) => currentPage + (i - 2));
  }
  return result;
};

export default setPagiNation;
