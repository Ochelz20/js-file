export const add = (a, b) => {
    return a + b
}

export const student = (name, age, school) => {
    return `My name is ${name}. I am ${age} and i attend ${school}`
}

export class Multiply{
    constructor(value1, value2){
        this.value1 = value1 
        this.value2 = value2
    }
    multiply(){
        return this.value1 * this.value2
    }
}