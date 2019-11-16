/*
观察者模式是软件设计模式的一种。
在此种模式中，一个目标对象管理所有相依于它的观察者对象，并且在它本身的状态改变时主动发出通知。
这通常透过呼叫各观察者所提供的方法来实现。此种模式通常被用来实时事件处理系统。
*/
// observer
class Subject {
  constructor() {
    this.observers = []
  }
  subscribe(observer) {
    this.observers.push(observer)
  }
  unSubscribe(oberver) {
    this.observers = this.observers.filter(v => v !== oberver)
  }
  notify() {
    this.observers.forEach(observer => {
      observer.update()
    })
  }
}

class Observer {
  constructor(name) {
    this.name = name
  }
  update() {
    console.log(`${this.name} updated...`)
  }
}

const observer1 = new Observer('spring')
const observer2 = new Observer('summer')
const observer3 = new Observer('autumn')
const observer4 = new Observer('winter')
const subject = new Subject()
subject.subscribe(observer1)
subject.subscribe(observer2)
subject.subscribe(observer3)
subject.subscribe(observer4)
subject.unSubscribe(observer2)
subject.notify()

// pub/sub

class EventManager {
  constructor() {
    this.eventList = {};
  }
  on(event, handler) {
    this.eventList[event] = this.eventList[event] || [];
    this.eventList[event].push(handler);
  }
  fire(event, data) {
    const handlers = this.eventList[event];
    if (!handlers) return;
    handlers.forEach(handler => {
      handler(data);
    });
  }
  off(event, handler) {
    if (!handler) {
      delete this.eventList[event];
    } else {
      const handlers = this.eventList[event];
      const index = handlers.findIndex(v => v === handler);
      handlers.splice(index, 1);
    }
  }
}

const eventManager = new EventManager();

function testFn(data) {
  console.log("data", data);
}
function testFn2(data) {
  console.log("data2", data);
}
eventManager.on("test", testFn);
eventManager.on("test", testFn2);
eventManager.on("test2", testFn2);
eventManager.off("test");
setTimeout(() => {
  eventManager.fire("test", "just test~");
  eventManager.fire("test2", "just test~");
}, 1000);