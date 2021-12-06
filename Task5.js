var dates=[];
dates.push(new Date("2021/08/25"))
dates.push(new Date("2021/04/26"))
dates.push(new Date("2021/11/27"))
dates.push(new Date("2021/12/28"))

var max = dates.reduce(function (a, b) { return a > b ? a : b; });

console.log(`Data set: ${dates}
Max date - ${max}`)