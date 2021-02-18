const profiler = require('./Profiler');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
//process.env.NODE_ENV = process.env.NODE_ENV || 'production';

function getRandomArray(len) {
    const p = profiler('Generting a ' + len + 'items long array');
    p.start();

    const arr = [];
    for (let i = 0; i < len; ++i)
        arr.push(Math.random());

    p.end();
}

getRandomArray(1e6);
console.log('Done');