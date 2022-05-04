const isPrime = require('prime-number')
const response = {}
function prime(number) {
    console.log(`Checking number ${number}`)
    response.isPrime = isPrime(number)
    return response
}
module.exports = { prime }