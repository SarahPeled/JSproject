let product = [
    {
        "name": "Nike Dunk Low",
        "price": "779,95",
        "description": "Sko til større børn",
        "image": "img/sko1.png",
        "link": "#",
        "inStock": true
    }, 
    {
        "name": "Nike Zoom Mercurial Superfly 9 Academy KM MG",
        "price": "1.099",
        "description": "Fodboldstøvler til flere typer underlag",
        "image": "img/sko2.png",
        "link": "#",
        "inStock": true
    },
    {
        "name": "Nike Dunk Low",
        "price": "1.099",
        "description": "Sko til mænd",
        "image": "img/sko3.png",
        "link": "#",
        "inStock": true
    },
    {
        "name": "Nike Dunk Low Retro",
        "price": "1.099",
        "description": "Sko til mænd",
        "image": "img/sko4.png",
        "link": "#",
        "inStock": true
    },
    {
        "name": "Nike Air Force 1 '07",
        "price": "979,95",
        "description": "Sko til mænd",
        "image": "img/sko5.png",
        "link": "#",
        "inStock": true
    },
    {
        "name": "Air Jordan 1 Mid",
        "price": "899,95",
        "description": "Sko til større børn",
        "image": "img/sko6.png",
        "link": "#",
        "inStock": true
    }
]

// 15 shoesizes with 0.5 intervals
let shoeSizes = [36, 36.5, 37, 37.5, 38, 38.5, 39, 39.5, 40 ,40.5, 41, 41.5, 42, 42.5, 43];

// get element products and create a div with each product
let products = document.getElementById("products");

// use for loop to loop through the array and document.write each product
for (let i = 0; i < product.length; i++) {
    products.innerHTML += `
    <a href=${product[i].link} class="product">
        <img src="${product[i].image}">
        <div class="info">
            <p class="name">${product[i].name}</p>
            <p class="price">${product[i].price} kr.</p>
        </div>
        <p>${product[i].description}</p>
    </a>
    `
}

let productsContainer = document.getElementById("products");
let scrollAmount = 455; // 455 står for 455 pixels, som svarer til bredden på 1 product + mellemrummet

function goRight() {
    productsContainer.scrollLeft += scrollAmount;
}

function goLeft() {
    productsContainer.scrollLeft -= scrollAmount;
}

