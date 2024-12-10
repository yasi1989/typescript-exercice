{
const increment = function* (prev: number): Generator<number> {
    while(true) {
        yield prev += 1;
    }
};
const inc = increment(0);
console.log(inc.next().value);
console.log(inc.next().value);
console.log(inc.next().value);
}