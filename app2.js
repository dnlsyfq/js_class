class Car {
  
  constructor(doors, engine, color){
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
  
  carStats(){
    return `This car has ${this.doors}, a ${this.engine} with ${this.color} color`;
  }
  
  static totalDoors(car1,car2){
    const doors1 = car1.doors;
    const doors2 = car2.doors;
    return doors1 + doors2;
  }
  
}

const civic = new Car(4,'V4','Black');
console.log(civic.carStats());