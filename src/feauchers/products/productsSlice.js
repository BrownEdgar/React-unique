import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    title: "IPhone 14",
    price: 1400,
    country: "USA"
   
  }
];


const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    },
});

export default productSlice.reducer;
