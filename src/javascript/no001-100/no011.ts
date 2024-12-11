{
  let arr: { id: number; name: string }[] = [
    { id: 1, name: "morita" },
    { id: 2, name: "kenji" },
    { id: 4, name: "ken" },
    { id: 3, name: "uro" },
  ];
  /**
   * > 0	a を b の後に並べる（例えば [b, a]）
   * < 0	a を b の前に並べる（例えば [a, b]）
   * === 0	a と b の元の順序を維持する
   *
   */
  const sortArray = [...arr].sort((prev, next) => {
    return prev.id - next.id;
  });
  console.log(sortArray);
}
