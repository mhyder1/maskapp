
// color, keyword, material, max_price
function getProduct() {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = "https://openapi.etsy.com";
  const path = "/v2/listings/active?limit=20&keywords=face%20mask&tags=chicago%20bulls,cotton&max_price=20&includes=Images";
  const api_key = "&api_key=l3a7mjohsu0hq3fbwq6p7pd3"
  const fetchurl = `${proxyurl}${url}${path}${api_key}`

  fetch(fetchurl)
    .then(response => response.json())
      
    .then(responseJson => {
        let items = responseJson.results
        let itemList = ""

        items.forEach(item => {
          itemList += `<li data-id=${item.listing_id}><span class ="title"> <a href = ${item.url}> ${item.title} </a></span> 
            <br> Made of: ${item.materials} <br> Production: ${item.when_made} <br> <span class="price">Price: ${item.price},</span> ${item.currency_code}<br><br>
            <img src="${item.Images[0].url_170x135}" />
            </li>`
          
        })
        $("#items-container").append(itemList);
      })



      // url = "https://www.googleapis.com/youtube/v3/search?part =snippet &maxResults=10&q=COVID-19&key=AIzaSyCORX3JUBUgtVvHFsyzFG2AbTk_ABCat4g"
      // fetch(url) 
      //   .then(res => res.json())
      //   .then(data => {
      //   let results = ""
      //   data.items.forEach(video => {
      //     results += `
      //       <iframe id="ytplayer" type="text/html" width="200" height="200" 
      //       src="https://www.youtube.com/embed/${video.id.videoId}?autoplay=0" frameborder="0"></iframe>
      //     `
      //   })
      //   $("#items-container").html(results)
      //   })
        
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
      const color = $('#mask-color').val()
      const keyword = $('#mask-keyword').val()
      const price = $('#mask-price').val()
      const materail = $('#mask-materail').val()
      console.log('submitted')
      getProduct(color, keyword, price, material);
    });
  }

$(
  watchForm()
  // getProduct();
  // stats();
)