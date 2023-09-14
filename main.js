// Creates array of objects. Each object is a product with properties: name, price, description, image and (empty) link
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

// Gets element by id="products" and creates variable called "products"
let products = document.getElementById("products");

if (products !== null && product !== undefined) {
    
    // For loop loops through the array and creates each object with all properties inside the html document
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
    console.log("Is not working because products==null eller er undefined")
}

// Gets element by id="products" and creates variable called "productsContainer"
let productsContainer = document.getElementById("products");
 // Sets scrollAmountProduct to 455, which stands for 455 pixels,
 // which is the width of one product + space between next product
let scrollAmountProduct = 455;

// Creates functions using the built in scrollLeft function,
// which sets the number of pixels that an element's content is scrolled from its left edge
function goRight() {
    productsContainer.scrollLeft += scrollAmountProduct;
}

function goLeft() {
    productsContainer.scrollLeft -= scrollAmountProduct;
}


// Creates array of objects. Each object is a photo with properties: name and image
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

// Gets element by id="photos" and creates variable called "photos"
let photos = document.getElementById("photos");

if (photos !== null) {
    // For loop loops through the array and creates each object with all properties inside the html document
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
} else {
    console.log("Is not working because photos==null")
}

// Gets element by id="photos" and creates variable called "photosContainer"
let photosContainer = document.getElementById("photos");
// Sets scrollAmountPhoto to 315, which stands for 315 pixels,
// which is the width of one photo + space between next photo
let scrollAmountPhoto = 315;

// Creates functions using the built in scrollLeft function,
// which sets the number of pixels that an element's content is scrolled from its left edge
function goRightPhotos() {
    photosContainer.scrollLeft += scrollAmountPhoto;
}

function goLeftPhotos() {
    photosContainer.scrollLeft -= scrollAmountPhoto;
}


//(SHOE PAGE)

// Gets all element by class="all-shoes-box" and creates variable called "shoeBoxes"
let shoeBoxes = document.getElementsByClassName('all-shoes-box');

// Gets element by id="big-shoe" and creates variable called "bigShoe"
let bigShoe = document.getElementById('big-shoe');

// Inside for loop an event listener for 'mouseover' event i added to each element in ShoeBoxes
// When you hover over an element, the function inside addEventListener gets executed, so the correct image is displayed
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

// Creates array of objects. Each object is a shoeSize with properties: size and instock
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

// Gets element by id="shoe-sizes" and creates variable called "sizes"
let sizes = document.getElementById("shoe-sizes");

// For loop loops through the array and creates each object with the size-property inside the html document
if (sizes !== null) {
    for (let i = 0; i < shoeSizes.length; i++) {
        // Ternary operator.
        // If specific size is instock, the element will be given a class="shoe-size"
        // If specific size is not instock, the element will be given a class="shoe-size" and class="shoe-size-gone"
        let className = shoeSizes[i].instock ? "shoe-size" : "shoe-size shoe-size-gone";
        sizes.innerHTML += `
        <span class="${className}">EU ${shoeSizes[i].size}</span>
        `
    }
}
else {
    console.log("Is not working because shoe-size==null")
}