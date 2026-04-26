declare global{
    interface String{
        myCustomConcat(str: string): string;
    }
}

String.prototype.myCustomConcat = function(str: string): string{
    return `${this} ${str}`;
};

const result: string = 'hello'.myCustomConcat('word')
console.log(result)


export {};