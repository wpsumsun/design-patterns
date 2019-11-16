/*
外观模式（Facade pattern），是软件工程中常用的一种软件设计模式，
它为子系统中的一组接口提供一个统一的高层接口，使得子系统更容易使用。
*/

let currentId = 0;

class ComplaintRegistry {
  registerComplaint(customer, type, details) {
    const id = ComplaintRegistry._uniqueIdGenerator();
    let registry;
    if (type === 'service') {
      registry = new ServiceComplaints();
    } else {
      registry = new ProductComplaints();
    }
    return registry.addComplaint({id: currentId, customer, details});
  }
  
  static _uniqueIdGenerator() {
    return ++currentId;
  }
}

class Complaints {
  constructor() {
    this.complaints = [];
  }
  
  addComplaint(complaint) {
    this.complaints.push(complaint);
    return this.replyMessage(complaint);
  }
  
  getComplaient(id) {
    return this.complaints.find(complaint => complaint.id === id);
  }
  
  replyMessage() {
    throw new Error('please implement replyMessage method in sub class');
  }
}

class ProductComplaints extends Complaints {
  constructor() {
    super();
    if (ProductComplaints.exists) {
      return ProductComplaints.instance;
    }
    ProductComplaints.instance = this;
    ProductComplaints.exists = true;
    return this;
  }
  
  replyMessage({id, customer, details}) {
    return `Complaint No. ${id} reported by ${customer} regarding ${details} have been filed with the Products Complaint Department. Replacement/Repairment of the product as per terms and conditions will be carried out soon.`;
  }
}

class ServiceComplaints extends Complaints {
  constructor() {
    super();
    if (ServiceComplaints.exists) {
      return ServiceComplaints.instance;
    }
    ServiceComplaints.instance = this;
    ServiceComplaints.exists = true;
    return this;
  }
  
  replyMessage({id, customer, details}) {
    return `Complaint No. ${id} reported by ${customer} regarding ${details} have been filed with the Service Complaint Department. Replacement/Repairment of the product as per terms and conditions will be carried out soon.`;
  }
}

const complaintRegistry = new ComplaintRegistry();

const serviceComplaint = complaintRegistry.registerComplaint('summer', 'service', 'bad service');
console.log(serviceComplaint);
const productComplaint = complaintRegistry.registerComplaint('summer', 'product', 'faded color');
console.log(productComplaint);