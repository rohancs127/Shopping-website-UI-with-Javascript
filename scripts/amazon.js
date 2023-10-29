import { cart } from "../data/cart.js";
import { products } from "../data/products.js";

document.querySelector('.products-grid').innerHTML = '';

products.forEach((value)=>{
    const productContainer = `<div class="product-container">
    <div class="product-image-container">
      <img class="product-image"
        src="${value.image}">
    </div>

    <div class="product-name limit-text-to-2-lines">
        ${value.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars"
        src="images/ratings/rating-${value.rating.stars*10}.png">
      <div class="product-rating-count link-primary">
        ${value.rating.count}
      </div>
    </div>

    <div class="product-price">
      $${(value.priceCents/100).toFixed(2)}
    </div>

    <div class="product-quantity-container">
      <select class="quantity-selector-${value.id}">
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart added-to-cart-${value.id}">
      <img src="images/icons/checkmark.png">
      Added
    </div>

    <button class="add-to-cart-button button-primary" data-product-id="${value.id}">
      Add to Cart
    </button>
  </div>
`;

document.querySelector('.products-grid').innerHTML += productContainer;
});


const addToCart =(productId) =>{

  const quantitySelected = Number(document.querySelector(`.quantity-selector-${productId}`).value);

  let matchingItem;

    cart.forEach((value)=>{
      if(value.productId===productId){
      matchingItem=value;
      }
    })
    

    if(matchingItem){
      matchingItem.quantity +=quantitySelected;
    }
    else{
    cart.push({
      productId: productId,
      quantity: quantitySelected
    })
  }


  let cartQuantity = 0;

  cart.forEach((value)=>{
    cartQuantity+= value.quantity;
  })

  document.querySelector('.js-cart-quantity').innerHTML= cartQuantity;
  
}

document.querySelectorAll('.add-to-cart-button').forEach((button)=>{
  button.addEventListener('click', ()=>{
      const productId = button.dataset.productId;

      addToCart(productId);

    const visible  = document.querySelector(`.added-to-cart-${productId}`);
    console.log(visible);
    visible.classList.add('visible');


    const addedMessageTimeouts={};

     const intID = setTimeout(()=>{
      visible.classList.remove('visible');
    }, 2000);


  })

})