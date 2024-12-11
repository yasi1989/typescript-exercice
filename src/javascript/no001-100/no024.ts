{
    const str: string = "10";
    const num: number = parseInt(str, 10);
    if(typeof num === "number" && !isNaN(num)) {
        console.log(num + "is a number");
        const toStr: string = num.toString();
    }
}