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



const categories = [...new Set(products.map((item)=>
  {return item}))]
  let i=0;
document.getElementById('cart-root').innerHTML = categories.map((item)=>
{
  var {img, title, price} = item;
  return(
      `<div class='cart-box'>
          <div class='img-box'>
              <img class='cart-images' src=${img}></img>
          </div>
      <div class='cart-bottom'>
      <p>${title}</p>
      <h2>$ ${price}.00</h2>`+
      "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
      `</div>
      </div>`
  )
}).join('')

var cart =[];

function addtocart(a){
  cart.push({...categories[a]});
  displaycart();
}
function delElement(a){
  cart.splice(a, 1);
  displaycart();
}

function displaycart(){
  let j = 0, total=0;
  document.getElementById("count").innerHTML=cart.length;
  if(cart.length==0){
      document.getElementById('cartItem').innerHTML = "Your cart is empty";
      document.getElementById("total").innerHTML = "$ "+0+".00";
  }
  else{
      document.getElementById("cartItem").innerHTML = cart.map((items)=>
      {
          var {img, title, price} = items;
          total=total+price;
          document.getElementById("total").innerHTML = "$ "+total+".00";
          return(
              `<div class='cart-item'>
              <div class='row-img'>
                  <img class='rowimg' src=${img}>
              </div>
              <p style='font-size:12px;'>${title}</p>
              <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
              "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
          );
      }).join('');
  }

  
}