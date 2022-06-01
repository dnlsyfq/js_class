class Dog {
    constructor(name){
        this._name = name;
        this._behaviour = 0;
    }

    get name(){
        return this._name;
    }

    get behaviour(){
        return this._behaviour;
    }

    incrementBehavior(){
        this._behaviour ++;
    }
}

const halley = new Dog('Halley');
console.log(halley.name);
console.log(halley.behaviour);

halley.incrementBehavior()

console.log(halley.name)
console.log(halley.behaviour);
