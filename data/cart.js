export let cart = JSON.parse(localStorage.getItem('cart'))
if(!cart){
  cart = [];
}


export const addToCart =(productId) =>{

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

    saveToStorage();
  
  }
  
  export function updateCartQuantity(){
    let cartQuantity = 0;
  
    cart.forEach((value)=>{
      cartQuantity+= value.quantity;
    })
  
    document.querySelector('.js-cart-quantity').innerHTML= cartQuantity;
  }

  export const removeFromCart = (productId)=>{
      let newCart = [];
      cart.forEach((product)=>{
        if(product.productId != productId){
          newCart.push(product);
        }
      });

      cart = newCart;
      saveToStorage();
  }

  function saveToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
  }