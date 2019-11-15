/*
This is a class-based creational design pattern. Constructors are special functions that can be used to instantiate new objects with methods and properties defined by that function.
It is not one of the classic design patterns. In fact, it is more of a basic language construct than a pattern in most object-oriented languages. But in JavaScript, objects can be created on the fly without any constructor functions or “class” definition. Therefore, I think it is important to lay down the foundation for other patterns to come with this simple one.
Constructor pattern is one of the most commonly used patterns in JavaScript for creating new objects of a given kind.
*/

// traditional Function-based syntax
function Hero(name, specialAbility) {
  this.name = name;
  this.specialAbility = specialAbility;

  this.getDetail = function () {
    return `${this.name} can ${this.specialAbility}`;
  };
}

// ES6 Class syntax
class Hero {
  constructor(name, specialAbility) {
    this.name = name;
    this.specialAbility = specialAbility;
  }
  
  getDetail() {
    return `${this.name} can ${this.specialAbility}`;
  }
}


const IronMan = new Hero('Iron Man', 'fly');

console.log(IronMan.getDetail());