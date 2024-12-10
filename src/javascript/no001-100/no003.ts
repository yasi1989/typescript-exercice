{
  const arr = ["a", "b"];
  {
    arr.forEach((num) => console.log(num));
  }
  /** or */
  {
    for (const num of arr) {
      console.log(num);
    }
  }
}
