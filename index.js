// index.js

// writeCards function implementation
function writeCards(namesArray, event) {
    const messagesArray = [];
    for (let i = 0; i < namesArray.length; i++) {
      messagesArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
    }
    return messagesArray;
  }
  
  // countDown function implementation
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }  