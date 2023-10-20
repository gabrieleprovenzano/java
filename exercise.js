function multiplyByTwo(number) {
    function inner(input) {
      return input * number;
    }

    return inner
}

const multiply = multiplyByTwo(2); 
const result = multiply(4);
console.log(result);