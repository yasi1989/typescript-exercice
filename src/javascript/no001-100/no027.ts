{
  const sayHi = (name?: string) => {
    return `hello!${name ?? ""}`;
  };

  console.log(sayHi("takasi"));
  console.log(sayHi());
}
