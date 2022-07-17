function reducer(state,action) {
    
if (action.type === 'DISPLAY_DATA') {
    return { ...state, ProductsData: action.payload };
}
    if (action.type === 'ANIMATION_SLIDER') {
        // console.log(state.sliderIndex);
        const index = action.payload.checkNumber(state.sliderIndex,action.payload.number);
        return { ...state,sliderIndex:index };
    }
    if (action.type === 'ADD_CART') {
        let items =[]
        if (state.cart.includes(state.ProductsData[action.payload])) {
            console.log(true);
            return { ...state }; 
        } 
         items =[...state.cart, state.ProductsData[action.payload]]
        console.log(items);
        return { ...state, cart: items ,id:action.payload};
    }
    if (action.type === 'CHANGE_AMOUNT') {
        if (action.payload.type === 'cart') {
            const tempCart = state.cart.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, amount: action.payload.value }
                }
                return item;
            })
            return { ...state, cart: tempCart }
        }
        if (action.payload.type === 'singleproduct') {
            console.log('true')
            console.log(action.payload.value)
            const tempCart = state.ProductsData.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, amount: action.payload.value }
                }
                return item;
            })
            return { ...state, ProductsData: tempCart }
        }
        return { ...state };
    }
    

    

    if (action.type === 'CLEAR_ALL') {
        return {...state,cart:[]}
    }
    if (action.type === 'REMOVE_ITEM') {
        let tempCart = state.cart.filter((item)=> item.id !== action.payload)
        return {...state,cart:tempCart}
    }

 if (action.type === 'INCREMENT') {
        
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount + 1 }
         
      }
      return cartItem
    })
    return { ...state, cart: tempCart }
    }
    
 if (action.type === 'DECREMENT') {
        //  console.log(state.cart[0]);
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount - 1 }
        }
        
      return cartItem
    }).filter((item) => item.amount > 0);
        
    return { ...state, cart: tempCart }
  }
    if (action.type === 'GET_TOTAL') {
         
         let {total,amount } = state.cart.reduce((allTotal,item) => {
             allTotal.total += (item.fields.price) * item.amount; 
             allTotal.amount += item.amount;
             
           return allTotal
         },
             {
             total:0,
             amount:0
         }
        )
        total = parseFloat(total.toFixed(2))
         console.log(amount,total)
        return { ...state, total, amount }
     }

}
export default reducer