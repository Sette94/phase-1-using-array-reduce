const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries = batteryBatches.reduce(function (accumulator, element) {
    return element + accumulator
}, 0)

const MVPs = [
    {
        name: "Trout",
        homers: 3
    },
    {
        name: "Judge",
        homers: 1
    },
    {
        name: "Harper",
        homers: 2
    }
]

//Accumulator is the running count, element is what we pass 
let totalMvps = MVPs.reduce(function (accumulator, element) {
    return element.homers + accumulator
}, 0)

console.log(totalMvps)