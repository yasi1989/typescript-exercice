{
  /** スプレッド演算子を用いた残余引数、必ず最後に書く事 */
  const fun = (...nums: number[]): number[] => {
    return nums;
  };
  const result = fun(1, 2, 3);
  console.log(result);
}
