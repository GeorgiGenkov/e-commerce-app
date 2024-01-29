const wrapper = document.querySelector(".slider-wrapper");
const menuItems = document.querySelectorAll(".menu-item");

// Products' information
const products = [
  {
    id: 1,
    title: "Salad Greek Style",
    price: 9.95,
    img: "/assets/img/salad/Salad_with_olives.png",
    desc: "TOMATOES, CUCUMBERS, FRESH PEPPERS, RED ONION, BLACK OLIVES, TOSSED IN EXTRA VIRGIN OLIVE OIL WITH OREGANO AND TOPPED WITH FETA CHEESE",
  },
  {
    id: 2,
    title: "Salad with Salmon",
    price: 14.95,
    img: "/assets/img/salad/salad_with_fish.png",
    desc: "FRESH SALMON FILLETS, GREEN SALAD MIX WITH CARROTS AND CHERRY TOMATOES",
  },
  {
    id: 3,
    title: "Salad with Fruit",
    price: 10.95,
    img: "/assets/img/salad/salad_with_fruit.png",
    desc: "STRAWBERRIES, PINEAPPLE, KIWI AND BLUEBERRIES",
  },
  {
    id: 4,
    title: "Salad with Chicken",
    price: 11.95,
    img: "/assets/img/salad/salad_with_chicken.png",
    desc: "GREEN SALAD MIX TOPPED WITH CRISPY CHICKEN FILLETS AND CHERRY TOMATOES",
  },
  {
    id: 5,
    title: "Salad with Spinach",
    price: 9.95,
    img: "/assets/img/salad/salad_with_spinach.png",
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
    // Change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // Change the choosen product
    choosenProduct = products[index];

    // Change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.img;
    currentProductDesc.textContent = choosenProduct.desc;
  });
});


const buyButton = document.querySelector(".buy-button");
const paymentButton = document.querySelector(".payment-button");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

// Add product to the cart
buyButton.addEventListener("click", () => {
  addToCart(choosenProduct.id);
  displayCart();
});

// Display the payment form
paymentButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

// Close the payment form
close.addEventListener("click", () => {
  payment.style.display = "none";
});




var modal = document.getElementById("cart-container");

// Get the button that opens the modal
var btn = document.getElementById("cart-btn");

// Get the <span> element that closes the modal

var span = document.getElementsByClassName("cart-close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


var cart = new Array();

function addToCart(a) {
  cart.push({...products[a - 1]});
  displayCart();
}
function delElement(a) {
  cart.splice(a, 1);
  displayCart();
}

// Display the cart
function displayCart() {
  let j = 0, total=0;
  document.getElementById("count").innerHTML=cart.length;
  if(cart.length==0){
      document.getElementById('cartItem').innerHTML = "Your cart is empty";
      document.getElementById("total").innerHTML = "$ "+0+".00";
  }
  else{
      document.getElementById("cartItem").innerHTML = cart.map((items)=>
      {
          var {title, price, img, desc} = items;
          total=total+price;
          document.getElementById("total").innerHTML = "$ "+total.toFixed(2);
          return(
              `<div class='cart-item'>
              <div class='row-img'>
                  <img class='rowimg' src =..${img} th:src=@{${img}}>
              </div>
              <p style='font-size:12px;'>${title}</p>
              <h2 style='font-size: 15px;'>$ ${price}</h2>`+
              "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
          );
      }).join('');
  } 
}