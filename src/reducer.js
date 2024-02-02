export const initialState = {
    basket: [],
    
    };
    const reducer = (state, action) =>{
    console.log(action);
    switch (action.type) {
    case 'ADD_TO_BASKET':
    return {
    ...state,
    basket: [...state.basket, action.item],
    };
    case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            let newBasket = [...state.basket];
            if (index >= 0) {
            newBasket.splice(index, 1);
            } else {
            console.warn("Can't remove this product as it is not in the basket");
            }
            return {
            ...state,
            basket: newBasket,
            };
          case 'INCREASE_PRICE':
            console.log(action.initialPrice)
            return {
              ...state,
              basket: state.basket.map((item) => {
                if (item.id === action.id) {
                    
                  return {
                    ...item,
                    price: item.price + action.initialPrice,
                  };
                }
                return item;
              }),
            };
            case 'DECREASE_PRICE':
            console.log(action.initialPrice)
            return {
              ...state,
              basket: state.basket.map((item) => {
                if (item.id === action.id) {
                    
                  return {
                    ...item,
                    price: item.price - action.initialPrice,
                  };
                }
                return item;
              }),
            };
          
            
    
    default:
    return state;
    }
    };
    export default reducer;