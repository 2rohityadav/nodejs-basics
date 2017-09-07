var events = require('events')

// So we can use the event EventEmitter in nodejs to create custome event and then react those event when it emitted.

var myEmitter = new events.EventEmitter();
// After creating this now we can use it

// setting up someevent
myEmitter.on('someEevent', function(msg){
  console.log(msg);
});

// now emting someEevent- So first arg is emit name and 2nd whatever we pass through into the function
myEmitter.emit('someEevent', 'Hey Dude')
