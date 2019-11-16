/*
在面向对象编程的范畴中，命令模式（英语：Command pattern）是一种设计模式，它尝试以对象来代表实际行动。
命令对象可以把行动(action) 及其参数封装起来，于是这些行动可以被：
重复多次
取消（如果该对象有实现的话）
取消后又再重做
*/

const div = document.createElement("div");
div.style.cssText =
  "width:100px;height:100px;border:1px solid #3db;position:absolute;left:50px;top:50px;transition: all 0.3s;";
document.body.append(div);

const Command = function (execute, undo, position) {
  this.execute = execute;
  this.undo = undo;
  this.position = position;
};

function moveForward({x, y}) {
  const {left: originX, top: originY} = div.style;
  div.style.left = `${x + parseInt(originX)}px`;
  div.style.top = `${y + parseInt(originY)}px`;
}

function moveBack({x, y}) {
  const {left: originX, top: originY} = div.style;
  div.style.left = `${parseInt(originX) - x}px`;
  div.style.top = `${parseInt(originY) - y}px`;
}

function Move(position) {
  return new Command(moveForward, moveBack, position);
}

class MovePath {
  constructor() {
    this.commands = [];
  }
  
  execute(command) {
    this.commands.push(command);
    command.execute(command.position);
  }
  
  undo() {
    const command = this.commands.pop();
    command && command.undo(command.position);
  }
}

const movePath = new MovePath();

const forwardButton = document.querySelector("#forward");
const backButton = document.querySelector("#back");

forwardButton.addEventListener("click", () => {
  movePath.execute(new Move({x: 20, y: 10}));
});
backButton.addEventListener("click", () => {
  movePath.undo(new Move({x: 20, y: 10}));
});
