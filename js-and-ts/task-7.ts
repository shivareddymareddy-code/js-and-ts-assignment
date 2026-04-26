export function curry(fn:Function){
    return function curried(...args: any[]){
        if(args.length>= fn.length){
            return fn(...args);
        }

        return function(...nextArgs: any[]){
                return curried(...args, ...nextArgs);
        };
    };
}

const add = (a:number, b:number, c:number): number => a + b + c;

const curryAdd = curry(add);

console.log(curryAdd(1)(2)(3));
console.log(curryAdd(1,2)(3));
console.log(curryAdd(1)(2,3));
console.log(curryAdd(2,3));

