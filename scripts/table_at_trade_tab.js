function update_numbers() {
    setInterval(function () {
        var i = Math.random();
        document.getElementById("bit_per").innerHTML = (-10 + i * 5 - 2).toFixed(2);
        document.getElementById("nasdaq_per").innerHTML = (5 + i * 5 - 2).toFixed(2);
        document.getElementById("tesla_per").innerHTML = (-2 + i * 5 - 2).toFixed(2);
        document.getElementById("lite_per").innerHTML = (11 + i * 5 - 2).toFixed(2);
        document.getElementById("eth_per").innerHTML = (7 + i * 5 - 2).toFixed(2);
        document.getElementById("us_per").innerHTML = (15 + i * 5 - 2).toFixed(2);

        document.getElementById("bit_low").innerHTML = (540 + i * 20 - 10).toFixed(2);
        document.getElementById("nasdaq_low").innerHTML = (43 + i * 20 - 10).toFixed(2);
        document.getElementById("tesla_low").innerHTML = (122 + i * 20 - 10).toFixed(2);
        document.getElementById("lite_low").innerHTML = (56 + i * 20 - 10).toFixed(2);
        document.getElementById("eth_low").innerHTML = (656 + i * 20 - 10).toFixed(2);
        document.getElementById("us_low").innerHTML = (345 + i * 20 - 10).toFixed(2);

        document.getElementById("bit_high").innerHTML = (634 + i * 20 - 1).toFixed(2);
        document.getElementById("nasdaq_high").innerHTML = (6555 + i * 20 - 1).toFixed(2);
        document.getElementById("tesla_high").innerHTML = (876 + i * 20 - 1).toFixed(2);
        document.getElementById("lite_high").innerHTML = (342 + i * 20 - 10).toFixed(2);
        document.getElementById("eth_high").innerHTML = (8765 + i * 20 - 10).toFixed(2);
        document.getElementById("us_high").innerHTML = (7867 + i * 20 - 10).toFixed(2);

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
}

update_numbers();
