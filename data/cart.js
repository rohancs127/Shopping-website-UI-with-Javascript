export let cart = [
  {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 1
  },
  {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1
  }
];

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
  

  export const removeFromCart = (productId)=>{
      let newCart = [];
      cart.forEach((product)=>{
        if(product.productId != productId){
          newCart.push(product);
        }
      });

      cart = newCart;
  }