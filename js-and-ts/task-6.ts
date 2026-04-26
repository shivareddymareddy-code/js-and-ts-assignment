function throttle(fn: Function, delay: number){
    let lastTime = 0;
    return function(){
        const now = Date.now();

        if(now - lastTime >= delay){
            lastTime = now;
            fn()
        }
    }
}

const log = () => console.log('Logging...');
const throttledLog = throttle(log, 2000);

throttledLog(); // Logging...
throttledLog(); // Ignored
setTimeout(throttledLog, 2500); // Logging...