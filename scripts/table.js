let a = 100;
let b = 98;

function init() {
    new gridjs.Grid({
        columns: [
            'Market',
            'Volatility',
            {
                name: 'Sell',
                formatter: (cell) => gridjs.html(`<li class="my-class">${cell}</li>`)
            },
            {
                name: 'Buy',
                formatter: (cell) => gridjs.html(`<li class="my-class">${cell}</li>`)
            },
            'Chg'
        ],
        pagination: true,
        sort: true,
        search: true,
        resizable: true,
        data: () => {
            return new Promise(resolve => {
                setTimeout(() =>
                    resolve(Array(80).fill().map(x => [
                        faker.company.companyName(),
                        (Math.random() * ((a--) - (b--)) + b).toFixed(2) + "%",
                        (Math.random() * ((500) - (0.001)) + 0.001)
                            .toFixed(Math.random() * (5 - 2) + 1) + (Math.random() < 0.5 ? "▲" : "▼"),
                        (Math.random() * ((500) - (0.001)) + 0.001)
                            .toFixed(Math.random() * (5 - 2) + 1) + (Math.random() < 0.5 ? "▲" : "▼"),
                        (Math.random().toFixed(1 + Math.random() * (5)))
                    ])), 100);
            });
        },
        style: {
            table: {
                border: '3px solid #ccc'
            },
            th: {
                'background-color': 'rgba(0, 0, 0, 0.1)',
                color: '#000',
                'border-bottom': '3px solid #ccc',
                'text-align': 'center'
            },
            td: {
                'text-align': 'center'
            }
        }
    }).render(document.getElementById("wrapper"));
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function animate(my_class) {
    let my_var;
    setTimeout(() => {
        my_var = document.getElementsByClassName(my_class);
        for (let temp of my_var) {
            var text = temp.innerHTML;
            var hasChanged = Math.random() > 0.18;
            let number = parseFloat(text);
            if (hasChanged) {
                setInterval(function () {
                    let random_boolean = Math.random() < 0.5;
                    if (random_boolean) {
                        temp.innerHTML = ((number + Math.random() * ((number + 10) - (number + 2)) + (number + 2)).toFixed(2)) + "▲";
                        temp.setAttribute("style", "color: blue");
                    } else {
                        temp.innerHTML = ((number - Math.random() * ((number - 10) - (number - 2)) + (number - 2)).toFixed(2)) + "▼";
                        temp.setAttribute("style", "color: red");
                    }
                }, getRandomInt(650, 1800));
            } else {
                temp.innerHTML = number + "";
            }
        }
    }, 500);
}

window.addEventListener('DOMContentLoaded', function (e) {
    init();
    animate('my-class');
}, false);

setTimeout(() => {
    let buttons = document.querySelector("[class=gridjs-pages]").querySelectorAll("button[tabindex=\"0\"]");
    buttons.forEach(function (temp) {
        temp.addEventListener("click", function () {
            animate('my-class');
        });
    })
}, 500);
