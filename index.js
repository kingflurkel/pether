// This is pether!
console.log('hi pether!');
var wpjs = require('./wpjs/index.js');

wpjs.connect({number: '32489618798', password: '4h6nUapQQHvnIK0ItQFySuD0Lr8=', yowsup:"yowsup/yowsup-cli"}, function(state){
 console.log(state);
});

wpjs.on('inbox',function(message){
 console.log('[INBOX] User:'+message.username+' from:'+message.from+' data: '+message.data);
 wpjs.send({to: message.from, type: 'txt', data: message.data});
}); 
