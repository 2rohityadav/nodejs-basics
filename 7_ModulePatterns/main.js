var counter = (arr)=>{
  console.log(`there are ${arr.length} element in this sruff array`);
}

var adder = (a,b)=>{
  console.log(`So here we go add ${a} and ${b} is now ${a+b}`)
}

var pi = 4.37;

/* So now here we want to expose these 3 functions and access to the app.js file
So basically module.exports is a empty object so what we could do
add property on it and merry that function on it.
so we do like this -> module.exports.counter = counter;
so we can add as many now
*/
/*
module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;
*/
// instead of doing this like an above we should do this is like below in object litrel

module.exports = {
  counter:counter,
  adder:adder,
  pi:pi
}
