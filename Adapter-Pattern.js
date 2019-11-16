/*
在设计模式中，适配器模式（英语：adapter pattern）有时候也称包装样式或者包装(wrapper)。
将一个类的接口转接成用户所期待的。
一个适配使得因接口不兼容而不能在一起工作的类能在一起工作，做法是将类自己的接口包裹在一个已存在的类中。
*/

class OldCalculator {
  constructor() {
    this.operations = function (term1, term2, operation) {
      switch (operation) {
        case 'add':
          return term1 + term2;
        case 'sub':
          return term1 - term2;
        default:
          return NaN;
      }
    };
  }
}

class NewCalculator {
  constructor() {
    this.add = function (term1, term2) {
      return term1 + term2;
    };
    this.sub = function (term1, term2) {
      return term1 - term2;
    };
  }
}

class CalculatorAdapter {
  constructor() {
    const newCalc = new NewCalculator();
    this.operations = function (term1, term2, operation) {
      switch (operation) {
        case 'add':
          return newCalc.add(term1, term2);
        case 'sub':
          return newCalc.sub(term1, term2);
        default:
          return NaN;
      }
    };
  }
}

const oldCalc = new OldCalculator();
console.log(oldCalc.operations(1, 2, 'add'));

const newCalc = new NewCalculator();
console.log(newCalc.add(1, 2));

const calcAdapter = new CalculatorAdapter();
console.log(calcAdapter.operations(1, 2, 'add'));