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
  const path = "/v2/listings/active?limit=10&keywords=mask";
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



      // try {

      //   getProduct('Start of videos');  // (1) <--
      
      //   getProduct('End of try (never reached)');  // (2)
      
      // } catch(err) {
      
      //  getProduct(`Error has occurred!`); // (3) <--
      
      // }


      url = "https://www.googleapis.com/youtube/v3/search?part =snippet &maxResults=10&q=COVID-19&key=AIzaSyCORX3JUBUgtVvHFsyzFG2AbTk_ABCat4g"
      fetch(url) 
        .then(res => res.json())
        .then(data => {
        let results = ""
        data.items.forEach(video => {
          results += `
            <iframe id="ytplayer" type="text/html" width="200" height="200" 
            src="https://www.youtube.com/embed/${video.id.videoId}?autoplay=0" frameborder="0"></iframe>
          `
        })
        $("#items-container").html(results)
        })


    // try {

    //   url('Start of try runs');  // (1) <--
    
    //   // ...no errors here
    
    //   url('End of try runs');   // (2) <--
    
    // } catch(err) {
    
    //   url('Catch is ignored, because there are no errors'); // (3)
    
    // }
  // }) 
 }
  

   function stats() {
    
    const url = "https://api.smartable.ai/coronavirus/stats/US";

    fetch(url, {
      headers: {
        "Subscription-Key": "758efda7ac81492daebae5d0886cbd78"
      } 
    })
      .then(response => response.json())

      .then(responseJson => {
        let stats = responseJson.totalDeaths.newDeaths
        let statsList = ""

        stats.forEach(item => {
          statsList += `<li data-id=${item.location}><span class ="total_confirmed">${item.totalConfirmedCases}</span> 
          <br> Newly confirmed: ${item.newlyConfirmedCases} <br> Total daeths: ${item.totalDeaths} <br> <span class="new_deaths">New deaths: ${item.newDeaths}<br></li>`
        })
      })

    } 
    stats();

    
    

function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      getProduct();
    });
  }

(function() {
  //watchForm();
  getProduct();
  // stats();
})()