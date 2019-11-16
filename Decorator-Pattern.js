/*
修饰模式，是面向对象编程领域中，一种动态地往一个类中添加新的行为的设计模式。
就功能而言，修饰模式相比生成子类更为灵活，这样可以给某个对象而不是整个类添加一些功能
*/

class Book {
  constructor(name, author, price) {
    this.name = name;
    this.author = author;
    this.price = price;
  }
  
  getDetail() {
    return `${this.name} by ${this.author}`;
  }
}

// decorator
function giftWrap(book) {
  book.isGiftWrapped = true;
  book.unwrap = function () {
    return `Unwrapped ${book.getDetails()}`;
  };
  return book;
}

const book = new Book('百年孤独', '马尔克斯', 80);
console.log(book.isGiftWrapped);
console.log(giftWrap(book).isGiftWrapped);