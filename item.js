class Item {
    constructor(id, title, description, price) {
        this.id = id
        this.title = title
        this.description = description
        this.price = price
    }

renderItem() {
     return ` <li data-id=${this.id}>${this.title}, ${this.description}, ${this.price}</li>`
   }
 }