/*const Person= require('./person');

const person1= new Person('john doe', 30);

person1.greeting();
*/
const Logger= require('./logger');

const logger= new Logger();

logger.on('message', data => console.log('called lister:',data));

logger.log('hello world');