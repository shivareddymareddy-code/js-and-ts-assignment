export function add(num: number){
    let sum = num;

    function inner(next: number): any {
        sum += next;
        return inner;
    }

    inner.valueOf = function(){
        return sum;
    }
    return inner;
}

console.log(Number(add(1)(2)(3))); // 6