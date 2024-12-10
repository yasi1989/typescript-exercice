{
const a: {a: string;} = {a: "a"};
const b: {b: string} = {b: "b"};
// スプレッド構文を使う
const c = {...a, ...b};
console.log(c);
}