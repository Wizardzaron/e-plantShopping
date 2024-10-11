import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const {name, image, cost} = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      
      // console.log("Here are the items passed in: ", name, image, cost);

      if (existingItem) {
        existingItem.quantity++;
      }
      else {
        state.items.push({ name, image, cost, quantity: 1 })
      }

      //This doesn't work because it makes a new item for each plant in the cart even when that same plant already exists in it
      
      // console.log("In addItem: ", state.items)

      // const newState = {items: [...state.items, {name, image, cost}]}

      // console.log("New state: ", newState);

      // return newState
    },
    removeItem: (state, action) => {
      //if the plants name exists in the items state then it gets filtered out
      state.items = state.items.filter(item => item.name !== action.payload);    
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;

      console.log("Item's quantity: ", quantity);

      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
