
function writeCards(names, event) {
   let newArray = [];
    for (let i = 0; i < names.length; i++) {
newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
return newArray;
}

const integer = [];
function countDown(integer) {
  let i = 10;
  while (i >=0) {
    console.log(i--);
  };
  return integer;
}
console.log(countDown());

