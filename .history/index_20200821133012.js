
// color, keyword, material, max_price
function getMasks(color='', keyword='', price='', material='') {
  console.log(color, keyword, price, material)
  showLoading()
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = "https://openapi.etsy.com";
  const path = `/v2/listings/active?limit=20&keywords=face%20mask&tags=${keyword},${material},${color}&max_price=${price}&includes=Images`;
  const api_key = "&api_key=l3a7mjohsu0hq3fbwq6p7pd3"
  const fetchurl = `${proxyurl}${url}${path}${api_key}`

  fetch(fetchurl)
    .then(response => response.json())
    .then(responseJson => {
      displayMasks(responseJson)
    })
  }
// https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif

function showLoading() {
  let img = `<img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif" />`
  $("#items-container").html(img);
}

function displayMasks(responseJson) {
  let items = responseJson.results
  let itemList = ""
  
  items.forEach(item => {
    itemList += `<li data-id=${item.listing_id}><span class ="title"> <a href = ${item.url}> ${item.title} </a></span> 
      <br> Made of: ${item.materials} <br> Production: ${item.when_made} <br> <span class="price">Price: ${item.price},</span> ${item.currency_code}<br><br>
      <img src="${item.Images[0].url_170x135}" />
      </li>`
    
  })
  $("#items-container").html(itemList);
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

function clearForm() {
  $('#mask-color').val('')
  $('#mask-keyword').val('')
  $('#mask-price').val('')
  $('#mask-material').val('')
}   
    

function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      const color = $('#mask-color').val()
      const keyword = $('#mask-keyword').val()
      const price = $('#mask-price').val()
      const material = $('#mask-material').val()
      clearForm()
      getMasks(color, keyword, price, material);
    });
  }

$(
  watchForm()
  // getProduct();
  // stats();
)