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
  let url = "https://openapi.etsy.com";
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
    
  }

  function stats() {
    
    let url = "https://api.smartable.ai/coronavirus/stats/US";

    fetch(url, {
      headers: {
        "Subscription-Key": "758efda7ac81492daebae5d0886cbd78"
      } 
    })
      .then(response => response.json())

      .then(responseJson => {
        let stats = responseJson.totalDeaths.newDeaths
        console.log(responseJson)
        let statsList = ""

        stats.forEach(item => {
          statsList += `<li data-id=${item.location}><span class ="total_confirmed">${item.totalConfirmedCases}</span> 
          <br> Newly confirmed: ${item.newlyConfirmedCases} <br> Total daeths: ${item.totalDeaths} <br> <span class="new_deaths">New deaths: ${item.newDeaths}<br></li>`
        })
      })  
  }
  stats();
  
  
  
  // make a few API calls then join them to the DOM
  //Start with one API at a time
  //Chartjs

  //Base url run in postman and add in your key value for youtube video
  // const params = 
  // { part: "snippet", maxResults: 5, q: ${"How to make a cocktail"} + searchTerm, relevanceLanguage: "en", key: videoApiKey };



  // Call a function that fetches the api for news, twitter, youtube and stats for 
 // coronavirus this information will be rendering data from a company called 
//  Centers for Disease Control and Prevention follow structure for getProduct function
// call this function getStats

function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      getProduct();
    });
  }

(function() {
  console.log('App loaded! Waiting for submit!');
  // watchForm();
  getProduct();
})()
