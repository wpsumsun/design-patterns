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