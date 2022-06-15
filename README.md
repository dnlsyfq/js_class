

### Method 
Class method and getter syntax is the same as it is for objects except you can not include commas between methods.

```
class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get department() {
    return this._department;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

console.log(surgeonRomero.name)
surgeonRomero.takeVacationDays(3);
console.log(surgeonRomero.remainingVacationDays);

```

# Inheritance : parent and child class
With inheritance, you can create a parent class (also known as a superclass) with properties and methods that multiple child classes (also known as subclasses) share. The child classes inherit the properties and methods from their parent class.

```
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get behavior() {
    return this._behavior;
  }
 
  incrementBehavior() {
    this._behavior++;
  }
} 

// extend them to the subclass

class Cat extends Animal {   // extends keyword makes the methods of the animal class available inside the cat class
  constructor(name, usesLitter) {
    super(name); // super keyword calls the constructor of the parent class. In this case, super(name) passes the name argument of the Cat class to the                  // constructor of the Animal class
    this._usesLitter = usesLitter; // _usesLitter is a new property that is unique to the Cat class, so we set it in the Cat constructor.
  }
}

// always call the super method before you can use the this keyword — if you do not, JavaScript will throw a reference error. To avoid reference errors, // it is best practice to call super on the first line of subclass constructors.

const bryceCat = new Cat('Bryce', false); 
console.log(bryceCat._name); // output: Bryce


```

```
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name,certifications){
    super(name);
    this._certifications = certifications;
  }
}

const nurseOlynyk = new Nurse('Olynyk',['Trauma','Pediatrics'])
```

When we call extends in a class declaration, all of the parent methods are available to the child class.

```
const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
```
