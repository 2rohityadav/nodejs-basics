var events = require('events');
var util = require('util');

var Person = function(name) {
  this.name = name;
}

util.inherits(Person, events.EventEmitter);
// we attached custom event if any emit happen in Person constructor

var rohitObj = new Person('Rohit');
var niteshObj = new Person('Nitesh');
var ankitObj = new Person('Ankit');

// now we wireup some event on these objects using custom event

var people = [rohitObj, niteshObj, ankitObj];

people.forEach(function(humans){
  humans.on('eventName_speak', function(msg){
    console.log(humans.name + ' said: ' + msg)
  })
})

rohitObj.emit('eventName_speak', 'Hey Dude');
niteshObj.emit('eventName_speak', 'Hey I am Nitesh');
ankitObj.emit('eventName_speak', 'Hey I am Ankit');
