function expandText() {

    var points = document.getElementById("points");
    var showMoreText = document.getElementById("moreText");
    var buttonText = document.getElementById("textButton");

    if (points.style.display === "none") {
        showMoreText.style.display = "none";
        points.style.display = "inline";
        buttonText.innerHTML = "Show More";
    } else {
        showMoreText.style.display = "inline";
        points.style.display = "none";
        buttonText.innerHTML = "Show Less";
    }
}

setInterval(function () {
    var i = Math.random();
    document.getElementById("doge_price").innerHTML = (0.5 + i * 0.2 - 0.1).toFixed(2);
    document.getElementById("bit_buy_price").innerHTML = (54000 + i * 20 - 10).toFixed(2);
    document.getElementById("bit_sell_price").innerHTML = ((54000 + i * 20 - 10) * 1.01).toFixed(2);
    document.getElementById("nasdaq_buy_price").innerHTML = (13000 + i * 10 - 5).toFixed(2);
    document.getElementById("nasdaq_sell_price").innerHTML = ((13000 + i * 10 - 5) * 1.01).toFixed(2);
    document.getElementById("tesla_buy_price").innerHTML = (680 + i * 4 - 2).toFixed(2);
    document.getElementById("tesla_sell_price").innerHTML = ((680 + i * 4 - 2) * 1.01).toFixed(2);
    document.getElementById("lite_buy_price").innerHTML = (240 + i * 2 - 1).toFixed(2);
    document.getElementById("lite_sell_price").innerHTML = ((240 + i * 2 - 1) * 1.01).toFixed(2);
    document.getElementById("eth_buy_price").innerHTML = (1490 + i * 10 - 5).toFixed(2);
    document.getElementById("eth_sell_price").innerHTML = ((1490 + i * 10 - 5) * 1.01).toFixed(2);
    document.getElementById("us_buy_price").innerHTML = (1300 + i * 5 - 2.5).toFixed(2);
    document.getElementById("us_sell_price").innerHTML = ((1300 + i * 5 - 2.5) * 1.01).toFixed(2);
}, 500);

function animate(classname) {
    var node = document.getElementsByClassName(classname);
    for (let item of node) {
        var text = item.innerHTML;

        setInterval(function () {
            text = text.substring(1) + text[0];
            item.innerHTML = text;
        }, 125);
    }
}

window.addEventListener('load', function (e) {
    animate('marquee');
}, false);
