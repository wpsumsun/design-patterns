/*
工厂方法模式（英语：Factory method pattern）是一种实现了“工厂”概念的面向对象设计模式。
就像其他创建型模式一样，它也是处理在不指定对象具体类型的情况下创建对象的问题。
工厂方法模式的实质是“定义一个创建对象的接口，但让实现这个接口的类来决定实例化哪个类。
工厂方法让类的实例化推迟到子类中进行。
*/

class BallFactory {
  constructor() {
    this.createBall = function (type) {
      let ball;
      switch (type) {
        case 'football':
        case 'soccer':
          ball = new Football(type);
          break;
        case 'basketball':
          ball = new Basketball(type);
          break;
        default:
          ball = new TennisBall(type);
      }
      ball.roll = function () {
        return `The ${this.type} is rolling.`;
      };
      return ball;
    };
  }
}

class Football {
  constructor(type) {
    this.type = type;
    this.kick = function () {
      return `I'm kicking ${type}`;
    };
  }
}

class Basketball {
  constructor(type) {
    this.type = type;
    this.kick = function () {
      return `I'm kicking ${type}`;
    };
  }
}

class TennisBall {
  constructor(type) {
    this.type = type;
    this.kick = function () {
      return `I'm kicking ${type}`;
    };
  }
}

const factory = new BallFactory();

const ball = factory.createBall('basketball');

ball.kick();
ball.roll();