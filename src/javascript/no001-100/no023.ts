{
    const array:string[] = ['e','a','k','B','c'];
    const result = [...array].sort((prev, next) => {
        return prev.localeCompare(next, "ja-JP", {sensitivity: "base"});
    });
    console.log(result);
}