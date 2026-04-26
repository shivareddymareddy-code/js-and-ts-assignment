export function arrayToObject(arr: string[], keyPrefix: string){
        const result: {[key: string]: string} = {};
        for(let i=0;i<arr.length;i++){
            result[keyPrefix + i] = arr[i];
        }

        return result;
}

export function objectToArray(obj: {[key: string]: string}){
    const result: string[] = [];
    for(const key in obj){
        result.push(obj[key]);
    }
    return result;
}
const myArray: string[] = ['apple', 'banana', 'orange'];
const myObject = arrayToObject(myArray, 'fruit');
console.log(myObject);

const myObject2 = { fruit0: 'apple', fruit1: 'banana', fruit2: 'orange' }
const myArray2 = objectToArray(myObject2);
console.log(myArray2);