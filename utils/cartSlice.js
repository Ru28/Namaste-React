import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name:'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem:(state,action)=>{
           // Vanialla(older) Redux => Don't Mutate State, returning was mandatory
           // const newState = [...state];
           // newState.items.push(action.payload);
           // return newState;

            // Redux Toolkit uses immer Behind the scence
            // we Have to mutate the State
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
        },
        // originalState = ["pizza"]
        clearCart:(state) =>{
            // console.log(state);
            // console.log(current(state));
            // state = [];
            // console.log(state);
            
            // RTK - either Mutate the existing state or return a new state
        
            // state.items.length=0; // originalState = []

            return {items:[]}; // this new object will be replaced inside originalState = {items:[]}
        }
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;