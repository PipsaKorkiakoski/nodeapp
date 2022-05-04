let sum = 0;
let response = {};
function calculate(num1, num2, num3) {
    sum = num1 + num2 + num3;
    response.result = sum
    return response;
}
module.exports = { calculate }