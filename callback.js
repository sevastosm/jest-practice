const  greeting=(name)=> {
    console.log('Hello ' + name);
    return name
}

export const processUserInput=(callback,name)=> {
    return callback(name);
}


var ss = processUserInput(greeting,'sevastos')
console.log(ss.blink())