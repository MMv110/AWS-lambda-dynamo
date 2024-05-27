export class Product {
    constructor(id, name, amount, category) {
      this.id = id;
      this.name = name;
      this.amount = amount;
      this.category = category;
    }
  
    getId() {
      return this.id;
    }
  
    getName() {
      return this.name;
    }
  
    getAmount() {
      return this.amount;
    }
  
    getCategory() {
      return this.category;
    }
  
    static fromJson(json) {
      const { id, name, amount, category } = json;
      return new Product(id, name, amount, category);
    }
  }