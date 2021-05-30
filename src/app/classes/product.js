export default class Product {
    constructor(attr) {
        this.id = attr.id || null;
        this.name = attr.name || null;
        this.image = attr.image || null;
        this.price = attr.price || null;
        this.quantity = attr.quantity || 1;
        this.isAdded = attr.isAdded || false;
    }
}