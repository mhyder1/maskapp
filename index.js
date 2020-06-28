class Items {
  constructor(){
    this.items = []
    this.eventListeners()
    this.getProduct()
  }
}

function eventListeners(){
  this.itemsContainer = document.getElementById('items-container')
  // this.productForm = document.getElementById('get-product-form')
  this.productForm.addEventListener('submit', this.getProduct.bind(this))
}

function getProduct() {
 // const itemResults = document.querySelector('.results')
 //const main = document.querySelector('#items-conainter');
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = "https://openapi.etsy.com/v2/listings/active?api_key=l3a7mjohsu0hq3fbwq6p7pd3";
    //return
     fetch(proxyurl + url)
    .then(response => response.json())
      
    .then(responseJson => {
        let items = responseJson.results
        items.forEach(item => {
          let id = item.id;
          let title = item.title;
          let description = item.description;
          let price = item.price;

          let newItem = new Items(id, title, description, price);

          main.innerHTML += newItem.renderItem()
        })
      })
    
  }

// displayResults(object) {
//   const main = document.querySelector('#items-conainter');
//   //let title = object.data;
//   let id = item.id;
//   let title = title.description.title_url;
//   let description = title.description.price;
//   let price = title.description.price;
//   let item = new Item(id, title, description, price);
//   main.innerHTML += item.renderItem()
// }

function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      getProduct();
    });
  }

(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
})()
