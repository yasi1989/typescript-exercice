{
const obj = {x: 2, y: 3} as const;
/** or */
const obj1: Readonly<{x: 2, y:3}> = {x: 2, y:3};
}