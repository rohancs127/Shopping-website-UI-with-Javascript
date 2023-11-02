export let cart = [];

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
  
  
    let cartQuantity = 0;
  
    cart.forEach((value)=>{
      cartQuantity+= value.quantity;
    })
  
    document.querySelector('.js-cart-quantity').innerHTML= cartQuantity;
    
  }
  
 