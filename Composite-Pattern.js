/*
Compose objects into tree structures to represent part-whole hierarchies.
Composite lets clients treat individual objects and compositions of objects uniformly.
*/

class Composite {
  constructor(id) {
    this.children = []
    this.element = document.createElement('div')
    this.element.id = id
    this.element.style.border = '1px solid #3db'
    this.element.style.margin = '10px'
  }
  add(child) {
    this.children.push(child)
    this.element.appendChild(child.getElement())
    return this
  }
  hide() {
    this.children.forEach(child => child.hide())
    this.element.style.display = 'none'
  }
  show() {
    this.children.forEach(child => child.show())
    this.element.style.display = ''
  }
  getElement() {
    return this.element
  }
}

class Leaf {
  constructor(text) {
    this.element = document.createElement('p')
    this.element.innerText = text
  }
  add(child) {}
  hide() {
    this.element.style.display = 'none'
  }
  show() {
    this.element.style.display = ''
  }
  getElement() {
    return this.element
  }
}

const page = new Composite('page')
const header = new Composite('header')
const main = new Composite('main')

const title = new Leaf('I am title~')
header.add(title)

const content = new Leaf('I am content~')
main.add(content)

page.add(header).add(main)
document.body.append(page.getElement())