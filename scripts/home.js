function animate(classname) {
    var node = document.getElementsByClassName(classname);
    for (let item of node) {
        var text = item.innerHTML;

        setInterval(function () {
            text = text.substring(1) + text[0];
            item.innerHTML = text;
        }, 125); //интервал прокрутки, мс
    }

}
window.addEventListener('load', function (e) { animate('marquee'); }, false);