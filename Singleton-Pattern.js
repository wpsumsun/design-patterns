/*
单例模式，也叫单子模式，是一种常用的软件设计模式。
在应用这个模式时，单例对象的类必须保证只有一个实例存在。
许多时候整个系统只需要拥有一个的全局对象，这样有利于我们协调系统整体的行为。
比如在某个服务器程序中，该服务器的配置信息存放在一个文件中，这些配置数据由一个单例对象统一读取，
然后服务进程中的其他对象再通过这个单例对象获取这些配置信息。这种方式简化了在复杂环境下的配置管理。
*/

class Database {
  constructor(data) {
    if (Database.exists) {
      return Database.instance;
    }
    this.data = data;
    Database.instance = this;
    Database.exists = true;
    return this;
  }
  
  getData() {
    return this.data;
  }
  
  setData(data) {
    this.data = data;
  }
}

const mongo = new Database('mongo');
console.log(mongo.data);

const mysql = new Database('mysql');
console.log(mysql.data);