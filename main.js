let product = [
    {
        "name": "Nike Dunk Low",
        "price": "779,95",
        "description": "Sko til større børn",
        "image": "img/sko1.png",
        "link": "shoe.html",
    }, 
    {
        "name": "Nike Zoom Mercurial Superfly 9 Academy KM MG",
        "price": "1.099",
        "description": "Fodboldstøvler til flere typer underlag",
        "image": "img/sko2.png",
        "link": "#",
    },
    {
        "name": "Nike Dunk Low",
        "price": "1.099",
        "description": "Sko til mænd",
        "image": "img/sko3.png",
        "link": "#",
    },
    {
        "name": "Nike Dunk Low Retro",
        "price": "1.099",
        "description": "Sko til mænd",
        "image": "img/sko4.png",
        "link": "#",
    },
    {
        "name": "Nike Air Force 1 '07",
        "price": "979,95",
        "description": "Sko til mænd",
        "image": "img/sko5.png",
        "link": "#",
    },
    {
        "name": "Air Jordan 1 Mid",
        "price": "899,95",
        "description": "Sko til større børn",
        "image": "img/sko6.png",
        "link": "#",
    }
]


// get element products and create a div with each product
let products = document.getElementById("products");

if (products !== null && product !== undefined) {
    
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
} else {
    console.log("Is not working because products==null")
}

let productsContainer = document.getElementById("products");
let scrollAmountProduct = 455; // 455 står for 455 pixels, som svarer til bredden på 1 product + mellemrummet

function goRight() {
    productsContainer.scrollLeft += scrollAmountProduct;
}

function goLeft() {
    productsContainer.scrollLeft -= scrollAmountProduct;
}

let photo = [
    {
        "name": "Tech Fleece-overdele",
        "image": "img/nr1.png",
    },
    {
        "name": "Tech Fleece-bukser",
        "image": "img/nr2.png",
    },
    {
        "name": "Matchende sæt",
        "image": "img/nr3.png",
    },
    {
        "name": "Fodboldkultur",
        "image": "img/nr4.png",
    },
    {
        "name": "Fleece",
        "image": "img/nr5.png",
    },
    {
        "name": "Airmax",
        "image": "img/nr6.png",
    },
]

// get element photos and create a div with each photo
let photos = document.getElementById("photos");

if (photos !== null) {
    
    // use for loop to loop through the array and document.write each product
    for (let i = 0; i < photo.length; i++) {
        photos.innerHTML += `
        <a href=${photo[i].link} class="photo">
        <img src="${photo[i].image}">
        <div class="info">
        <p class="photo-name">${photo[i].name}</p>
        </div>
        </a>
        `
    }
}

let photosContainer = document.getElementById("photos");
let scrollAmountPhoto = 315; // 315 står for 315 pixels, som svarer til bredden på 1 photo + mellemrummet

function goRightPhotos() {
    photosContainer.scrollLeft += scrollAmountPhoto;
}

function goLeftPhotos() {
    photosContainer.scrollLeft -= scrollAmountPhoto;
}


//BIG SHOE (SHOE PAGE)

// Get all the elements with the class 'all-shoes-box'
let shoeBoxes = document.getElementsByClassName('all-shoes-box');

// Get the element where the big image will be displayed
let bigShoe = document.getElementById('big-shoe');

// Loop through each shoe box
for (let i = 0; i < shoeBoxes.length; i++) {
  shoeBoxes[i].addEventListener('mouseover', function() {
    switch(i) {
      case 0:
        bigShoe.src = 'img/2sko1.png';
        break;
      case 1:
        bigShoe.src = 'img/2sko2.png';
        break;
      case 2:
        bigShoe.src = 'img/2sko3.png';
        break;
      case 3:
        bigShoe.src = 'img/2sko4.png';
        break;
      case 4:
        bigShoe.src = 'img/2sko5.png';
        break;
      default:
        bigShoe.src = 'img/2sko1.png';
    }
  });
}

let shoeSizes = [
    {
        "size": 35.5,
        "instock": true
    },
    {
        "size": 36,
        "instock": false
    },
    {
        "size": 36.5,
        "instock": false
    },
    {
        "size": 37,
        "instock": true
    },
    {
        "size": 37.5,
        "instock": true
    },
    {
        "size": 38,
        "instock": true
    },
    {
        "size": 39,
        "instock": false
    },
    {
        "size": 40,
        "instock": true
    },
];

let sizes = document.getElementById("shoe-sizes");

if (sizes !== null) {
    for (let i = 0; i < shoeSizes.length; i++) {
        let className = shoeSizes[i].instock ? "shoe-size" : "shoe-size shoe-size-gone";
        sizes.innerHTML += `
        <span class="${className}">EU ${shoeSizes[i].size}</span>
        `
    }
}