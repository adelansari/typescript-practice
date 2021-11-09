type Combinable = number | string;  // custom type


function combine(
  input1: Combinable,
  input2: number | string,
  resultConversion: 'as-number' | 'as-text'
//   resultConversion: 'string'

) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === 'as-number')  {
    const result = +input1 + +input2; // strings will be converted to a number
  } else {
    result = input1.toString() + input2.toString();
  }
//   if (resultConversion === 'as-number') {
//       return +result;  // converting to number
//   } else {
//       return result.toString();
//   }
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
