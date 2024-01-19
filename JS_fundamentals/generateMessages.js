// // Function to generate a personalised message for a name
// const generateMessage = (name) => {
//     return `Hi ${name}! 50% off our best candies for you today!`;
// };

//   // Function to generate messages for an array of names
// const generateMessages = (names) => {
//     return names.map(generateMessage);
// };


const generateMessages = (names) => {
    return names.map ( (name) => {
    return 'Hi ' + name + '! 50% off our best candies for you today!'
    });
}





  // Example usage:
const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];
const messages = generateMessages(names);

console.log(messages);

module.exports = generateMessages;


