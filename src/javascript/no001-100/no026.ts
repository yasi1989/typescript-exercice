{
  const Factory = (name: string) => {
    const getName = () => name;
    const introduction = () => {
      console.log(getName());
    };
    return { introduce: introduction };
  };

  console.log(Factory("morita").introduce());
}
