function getProduct() {
  console.log('getProduct')
    fetch('https://openapi.etsy.com/v2/listings/active?api_key=l3a7mjohsu0hq3fbwq6p7pd3')
      .then(response => response.json())
      .then(responseJson => 
        displayResults(responseJson))
      .catch(error => alert('Something went wrong. Try again later.'));
  }

function displayResults(responseJson) {
  console.log(responseJson);
  $('.results-img').replaceWith(
      `<img src="${responseJson.message}" class="results-img">`
  )
  $('.results').removeClass('hidden');
}

function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      getProduct();
    });
  }

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});