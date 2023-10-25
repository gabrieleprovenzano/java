function multiplyByTwo(number) {
  return function inner(input) {
    const result = input * number;
    console.log(result);
    return result;
  }
}

const multiplier = multiplyByTwo(4);
multiplier(2);