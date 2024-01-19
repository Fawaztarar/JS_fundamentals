// Function to check if a phone number has 10 characters or less
const checkLength = (phoneNumber) => {
    return phoneNumber.length <= 10;
};

  // Function to filter out long phone numbers
const filterLongNumbers = (phoneNumbers) => {
    return phoneNumbers.filter(checkLength);
};

  // Example usage:
const phoneNumbers = [
    '1763687364',
    '4763687363',
    '7867867862',
    'AAAA#####AAAA#87@768767382672', // not a phone number
    '4763687363',
    '4763687363'
];

const filteredNumbers = filterLongNumbers(phoneNumbers);
console.log(filteredNumbers);
