{
  const obj: { [K: string]: string } = { a: "aaa", b: "bb" };
  {
    for (const [key, value] of Object.entries(obj)) {
      console.log(key, value);
    }
  }
  /** or */
  {
    Object.entries(obj).forEach(([key, value]) => console.log(key, value));
  }
}
