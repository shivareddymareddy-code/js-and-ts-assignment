export async function getStringLengthAsync(str: string): Promise<number>{
    if(typeof str !== "string"){
        throw new Error("Input must be string");
    }
    return str.length;   
}

export function getStringLengthPromise(str: string): Promise<number>{
    return new Promise((resolve, reject)=>{
        if(typeof str !== "string"){
            reject(new Error("input must ne string"))
        } else {
            resolve(str.length);
        }
    })
}


getStringLengthAsync("hello")
.then(x=>console.log(x))

getStringLengthPromise("hello")
.then(x=>console.log(x))