/*
责任链模式在面向对象程式设计里是一种软件设计模式，它包含了一些命令对象和一系列的处理对象。
每一个处理对象决定它能处理哪些命令对象，它也知道如何将它不能处理的命令对象传递给该链中的下一个处理对象。
该模式还描述了往该处理链的末尾添加新的处理对象的方法。
*/

class piperOperator {
  constructor() {
    this.target = null;
  }
  
  source(target) {
    this.target = target;
    return this;
  }
  
  pipe(handler) {
    this.target = handler(this.target);
    console.log(handler.name, this.target);
    return this;
  }
}

const operator = new piperOperator();
operator
  .source('slam dunk~')
  .pipe(trim)
  .pipe(reverse)
  .pipe(res => {
    console.log('res', res);
  });

function trim(str) {
  return str.replace(/\s+/g, '');
}

function reverse(str) {
  return str
    .split("")
    .reverse()
    .join("");
}
