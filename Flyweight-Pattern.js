/*
享元模式（英语：Flyweight Pattern）是一种软件设计模式。它使用共享物件，
用来尽可能减少内存使用量以及分享资讯给尽可能多的相似物件；
它适合用于当大量物件只是重复因而导致无法令人接受的使用大量内存。通常物件中的部分状态是可以分享。
常见做法是把它们放在外部数据结构，当需要使用时再将它们传递给享元
*/

// flyweight class
class IceCream {
  constructor(flavour, price) {
    this.flavour = flavour;
    this.price - price;
  }
}

// factory class
class IceCreamFactory {
  constructor() {
    this.icecreams = [];
  }
  
  createIcecream(flavour, price) {
    let icecream = this.getIceCream(flavour);
    if (icecream) {
      return icecream;
    } else {
      const newIcecream = new IceCream(flavour, price);
      this.icecreams.push(newIcecream);
      return newIcecream;
    }
  }
  
  getIceCream(flavour) {
    return this.icecreams.find(icecream => icecream.flavour === flavour);
  }
}

const factory = new IceCreamFactory();
const icecream1 = factory.createIcecream('chocolate', 15);
const icecream2 = factory.createIcecream('chocolate', 15);
console.log(icecream1 === icecream2);