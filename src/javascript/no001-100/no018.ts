const rundomPrint = (arr: string[]): string => {
    /** Math.floor 小数点以下を切り捨てる */
    /** Math.random 0以上1未満のランダムな数字を作る */
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

console.log(rundomPrint(["おはよう", "こんにちわ", "おやすみ"]));