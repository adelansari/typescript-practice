function add(n1:number, n2: number):number {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Result: '+ num);
}


function addAndHandle(n1:number, n2: number, cb: (num:number) => void) {
    const result = n1 + n2;
    cb(result);
}


// printResult(add(5,12));  // will print 17 by passing the values to the previous console log


let combineValues: (a: number, b:number) => number;

// let combineValues:Function;
combineValues = add;
// combineValues = printResult;  // because printResult function is void

console.log(combineValues(8,8));  // will print 16


addAndHandle(10, 10, (result) => {
    console.log(result);
})