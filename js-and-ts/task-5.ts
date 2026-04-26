export function deepClone(obj: any): any{

if(obj==null || typeof obj !=="object"){
    return obj;
}
    
const result: any = Array.isArray(obj) ? [] : {};

for(const key in obj){
    result[key] = deepClone(obj[key]);
}
return result
}