const getnumberSign = (number) => {
    // if number = 0 return zero
    // if number > 0 return +
    // if number < 0 return -

    if (number === 0) {
        return "zero";
    } else if (number > 0) {
        return "+";
    } else {
        return "-";
    }
}

module.exports = getnumberSign;

//const getnumberSign = require('./getnumberSign');
