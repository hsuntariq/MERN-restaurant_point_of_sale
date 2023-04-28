import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    cart:[],
    totalQuantity: 0,
    totalAmount:0
};

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let itemIndex = state.cart.findIndex(product => product._id === action.payload._id);
            if (itemIndex >= 0) {
                state.cart[itemIndex].quantity++;
            }else{
            state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        getTotalAmount: (state) => {
            let total = 0;
            let quantity = 0;
            state.cart.map((item) => {
                quantity += item.quantity;
                total += quantity * item.price.$numberDecimal;
            })
            console.log(total)
            return total;
        }
        }
        
    
})


export const {
    addToCart,
    getTotalAmount
} = cartSlice.actions;
export default cartSlice.reducer