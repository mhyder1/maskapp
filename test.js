
   // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://openapi.etsy.com/v2/listings/active?api_key=l3a7mjohsu0hq3fbwq6p7pd3";
   // fetch(proxyurl + url)
    fetch(url)
  .then(response => response.json())
    
  .then(items => console.log(items)) 