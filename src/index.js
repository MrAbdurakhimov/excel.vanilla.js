import './module';
import './scss/index.scss';

async function start() {
  return await Promise.resolve('async working');
}

start().then(console.log);

console.log('Hello World');
