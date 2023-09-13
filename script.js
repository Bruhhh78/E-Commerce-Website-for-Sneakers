console.log("Working");

const wrapper = document.querySelector(".sliderWrapper");

const menuItems = document.querySelectorAll(".menuItem");

// List of Products in Array

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 199,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];


let choosenProduct = products[0]

const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductImg = document.querySelector(".productImg"); 
const currentProductColors = document.querySelectorAll(".color");
const sizeButtons = document.querySelectorAll(".size");

// Menu Item Details > if you click the nav option you will get the selected item in slide as well as in BuyNow Cart section

menuItems.forEach(function (items, index) {
  items.addEventListener("click", () => {
    // change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // change the choosen product
    choosenProduct= products[index];

    // change text of current product
    currentProductTitle.textContent= choosenProduct.title;
    currentProductPrice.textContent="$"+ choosenProduct.price;
    currentProductImg.src= choosenProduct.colors[0].img;

    // assigning new colors
    currentProductColors.forEach((color,index)=>{
      color.style.backgroundColor = choosenProduct.colors[index].code;
    })
  });
});

//Selecting Shoes by Colors 
currentProductColors.forEach((color,index)=>{
  color.addEventListener("click",()=>{
    currentProductImg.src= choosenProduct.colors[index].img
  })
})

// Selecting shoes sizes {

// Function to handle button click
function handleSizeSelection(selectedSizeButton){
  // Removing the "active" class from all size elements
    sizeButtons.forEach(sizeButtons => sizeButtons.classList.remove("active"));
    
    // Adding the "active" class to the selected size element  
    selectedSizeButton.classList.add("active");
}

// Adding a click event listener to each size element

sizeButtons.forEach( sizeButtons =>{
  // Add a "click" event listener to each sizeButton
  sizeButtons.addEventListener("click",()=>{
    handleSizeSelection(sizeButtons); // Call the handleSizeSelection function with the clicked size button
  });
});

// }

// if you want to select size only using javascript

// var currentproductSizes = document.querySelector(".size") but make sure to remove the active class from css and color of size

// currentProductSizes.forEach((size, index) => {
//   size.addEventListener("click", () => {
//     currentProductSizes.forEach((size) => {
//       size.style.backgroundColor = "white";
//       size.style.color = "black";
//     });
//     size.style.backgroundColor = "black";
//     size.style.color = "white";
//   });
// });

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close")

productButton.addEventListener("click",()=>{
  payment.style.display="flex"
})

close.addEventListener("click",()=>{
  payment.style.display="none"
})