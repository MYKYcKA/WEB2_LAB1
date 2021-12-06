function BinSearch(arr, x) {
    let start=0, end=arr.length-1;

    while (start<=end){
 
        let mid=Math.floor((start + end)/2);
  
        if (arr[mid]===x) return `Success element index - ${mid}`;
 
        else if (arr[mid] < x)
             start = mid + 1;
        else
             end = mid - 1;
    }
  
    return "There is no such element";
}

let dataset = [1, 3, 5, 7, 8, 9];
let x1 = 5;
let x2 = 0;

console.log(`${BinSearch(dataset,x1)}
${BinSearch(dataset,x2)}`);