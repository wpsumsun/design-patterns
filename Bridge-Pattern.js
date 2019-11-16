/*
桥接模式是软件设计模式中最复杂的模式之一，它把事物对象和其具体行为、具体特征分离开来，使它们可以各自独立的变化。
事物对象仅是一个抽象的概念。如“圆形”、“三角形”归于抽象的“形状”之下，而“画圆”、“画三角”归于实现行为的“画图”类之下，然后由“形状”调用“画图”。
*/

class Boy {
  say() {
    console.log('I am a boy~');
  }
  
  playInstrument(instrument) {
    instrument.play();
  }
}

class Girl {
  say() {
    console.log('I am a girl~');
  }
  
  playInstrument(instrument) {
    instrument.play();
  }
}

class Piano {
  play() {
    console.log('I am playing piano~');
  }
}

class Guitar {
  play() {
    console.log('I am playing guitar~');
  }
}

const piano = new Piano();
const guitar = new Guitar();
const boy = new Boy();
const girl = new Girl();

boy.playInstrument(piano);
girl.playInstrument(guitar);