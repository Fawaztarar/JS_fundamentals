const generateMessages = (customers) => {
    return customers.map((customer) => {
    return `Hi ${customer.name}! ${customer.discount}% off our best candies for you today!`;
    });
};

  // Example usage:
const namesAndDiscounts = [
    { name: 'Anna', discount: 50 },
    { name: 'Laura', discount: 40 },
    { name: 'Josh', discount: 30 },
    { name: 'Min', discount: 50 },
    { name: 'Karla', discount: 60 }
];

const messages = generateMessages(namesAndDiscounts);

console.log(messages);

module.exports = generateMessages;
