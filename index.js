class Items {
  constructor(){
    this.items = []
  }
}

function eventListeners(){
  this.itemsContainer = document.getElementById('items-container')
  this.productForm.addEventListener('submit', this.getProduct.bind(this))
}

function getProduct() {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = "https://openapi.etsy.com";
  const path = "/v2/listings/active?limit=20&keywords=mask";
  const api_key = "&api_key=l3a7mjohsu0hq3fbwq6p7pd3"
  const fetchurl = `${proxyurl}${url}${path}${api_key}`

  fetch(fetchurl)
    .then(response => response.json())
      
    .then(responseJson => {
        let items = responseJson.results
        let itemList = ""

        items.forEach(item => {
          itemList += `<li data-id=${item.listing_id}><span class ="title"> <a href = ${item.url}> ${item.title} </a></span> 
            <br> Made of: ${item.materials} <br> Production: ${item.when_made} <br> <span class="price">Price: ${item.price},</span> ${item.currency_code}<br><br></li>`
          
        })
        $("#items-container").append(itemList);
      })
    
  }

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