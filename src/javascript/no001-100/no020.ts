{
class Who {
    constructor(
        private _name: string,
    ){}
    get name(): string {
        return this._name;
    }
}

const human = new Who("morita");
console.log(human.name);
}