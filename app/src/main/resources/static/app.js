const wrapper = document.querySelector(".slider-wrapper");
const menuItems = document.querySelectorAll(".menu-item");

const products = [
  {
    id: 1,
    title: "Salad Greek Style",
    price: 9.95,
    img: "./img/salad/Salad_with_olives.png",
    desc: "TOMATOES, CUCUMBERS, FRESH PEPPERS, RED ONION, BLACK OLIVES, TOSSED IN EXTRA VIRGIN OLIVE OIL WITH OREGANO AND TOPPED WITH FETA CHEESE",
  },
  {
    id: 2,
    title: "Salad with Salmon",
    price: 14.95,
    img: "./img/salad/salad_with_fish.png",
    desc: "FRESH SALMON FILLETS, GREEN SALAD MIX WITH CARROTS AND CHERRY TOMATOES",
  },
  {
    id: 3,
    title: "Salad with Fruit",
    price: 10.95,
    img: "./img/salad/salad_with_fruit.png",
    desc: "STRAWBERRIES, PINEAPPLE, KIWI AND BLUEBERRIES",
  },
  {
    id: 4,
    title: "Salad with Chicken",
    price: 11.95,
    img: "./img/salad/salad_with_chicken.png",
    desc: "GREEN SALAD MIX TOPPED WITH CRISPY CHICKEN FILLETS AND CHERRY TOMATOES",
  },
  {
    id: 5,
    title: "Salad with Spinach",
    price: 9.95,
    img: "./img/salad/salad_with_spinach.png",
    desc: "SPINACH, TOMATOES, PEPPERS, RED ONION AND BLACK OLIVES",
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".product-img");
const currentProductTitle = document.querySelector(".product-title");
const currentProductPrice = document.querySelector(".product-price");
const currentProductDesc = document.querySelector(".product-desc");


menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.img;
    currentProductDesc.textContent = choosenProduct.desc;
  });
});


const productButton = document.querySelector(".product-button");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
