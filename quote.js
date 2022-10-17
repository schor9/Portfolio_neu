const settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://love-calculator.p.rapidapi.com/getPercentage?fname=John&sname=Alice",
  "method": "GET",
  "headers": {
  "x-rapidapi-key": "input-your-custom-key-value-here",
  "x-rapidapi-host": "love-calculator.p.rapidapi.com"
  }
  };
  
  $.ajax(settings).done(function (response) {
  console.log(response);
  });