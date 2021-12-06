function Bubble(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}

let arr = [1,1,2,25,-1,0.5,10, 3, 5, 7, 8, 9];

console.log(`${Bubble(arr)}`);