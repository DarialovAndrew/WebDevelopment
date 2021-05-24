var frenchLocale = d3.timeFormatLocale({
  "dateTime": "%a %e %b %Y %X",
  "date": "%d-%m-%Y",
  "time": "%Hh%M",
  "periods": ["am", "pm"],
  "days": ["Dimanche","Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
  "shortDays": ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
  "months": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  "shortMonths": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
})

const mediaQuery = window.matchMedia('(max-width: 1024px)')



var frenchTimeFormat = function(date){
  return (
    d3.timeDay(date) < date ? frenchLocale.format("%Hh") :
    d3.timeMonth(date) < date ? frenchLocale.format("%d/%m") :
    d3.timeYear(date) < date ? frenchLocale.format("%B") :
    d3.timeFormat("%Y")
  )(date)
}

let gm = 30;
let elem = document.getElementById("chart");
let ewidth = elem.offsetWidth;
let eheight = elem.offsetHeight;

if (mediaQuery.matches) {
eheight = ewidth /2;
}

console.log(elem);

console.log(ewidth);
console.log(eheight);

d3.csv("../data/daily-minimum-temperatures-in-me.csv").then(function(prices) {
  d3.selectAll("svg").remove();

  prices.map(el => {
      el.date = Date.parse(el.date);
      el.value = parseFloat(el.value);
  });

    for(i=3; i< 10; i++)
      console.log(prices[i]);

  var chart = d3_timeseries()
  .addSerie(prices,{x:'date',y:'value'},{interpolate:'linear'})
  .xscale.tickFormat(frenchTimeFormat)
  .margin.left(gm)
  .margin.right(gm)
  .margin.bottom(gm)
  .width(ewidth)
  .height(eheight)

  chart('#chart')
});

window.addEventListener('resize', function(event) {
  let elem = document.getElementById("chart");

  elem.innerHTML = '';

  setTimeout(function() {
      let elem = document.getElementById("chart");

      let ewidth = elem.offsetWidth;
      let eheight = elem.offsetHeight;

      if (mediaQuery.matches) {
        eheight = ewidth /2;
      }

      elem.innerHTML = '';

      d3.csv("../data/daily-minimum-temperatures-in-me.csv").then(function(prices) {
        d3.selectAll("svg").remove();

          prices.map(el => {
              el.date = Date.parse(el.date);
              el.value = parseFloat(el.value);
          });

          var chart = d3_timeseries()
          .addSerie(prices,{x:'date',y:'value'},{interpolate:'linear'})
          .xscale.tickFormat(frenchTimeFormat)
          .margin.left(gm)
          .margin.right(gm)
          .margin.bottom(gm)
          .width(ewidth)
          .height(eheight)
      
          chart('#chart')
      });
  }, 10);
  
}, true);
