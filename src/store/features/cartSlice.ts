
import { PayloadAction, createAsyncThunk, current } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { UrlServer } from "../../components/services";
import { Product } from "../../components/models/products.model";
//import { useLocalStorage } from "../../hooks/useLocalStorage";
const Url = UrlServer
// id: 1,
// cover: "../images/product/1-1-1.jpg",
// title: "Floating 2021 iPhone 12 Mockups (PSD)",
// author: "by Blueskytechco in Mockups",
// price: 30.0,
// category: "mockups",
// qty: 0,

 


interface ProductState {
  carts: Product[];
}

const initialState:  ProductState = {   //
    carts:[],
};


// const initialStore = {
//   carts: [],
// }

//get basket
export const fetch_customers_basket = createAsyncThunk(
  "customers_basket/fetch",
  async (id: number , _thunkAPI) => {
    const response = await fetch(Url + "/customers_basket/" + id, {
      method: "GET",
    });
    //debugger
    const data = response.json();
    return data;
  },
);

export const save_customers_basket = createAsyncThunk(
  "customers_basket/save",
  async (jdata:object, _thunkAPI) => {
      jdata=jdata;
      const jdatas = JSON.stringify({
         customers_basket_id: 0,
      //   cover:  cover,
      //   title:  title,
      //   author: author,
      //   price:  price,
      //   category: category,
      //   qty: qty,
      })
    const response = await fetch(Url + "/customers_basket/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jdatas,
    });
    //debugger
    const data = response.json();
    return data;
  },
);

export const delete_customers_basket = createAsyncThunk(
  "customers_basket/delete",
  async (id: number, _thunkAPI) => {
    const response = await fetch(Url + "/customers_basket/del/" + id, {
      method: "DELETE",
    });
    debugger
    const data = response.json();
    return data;
  },
);


export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state = initialState, action:PayloadAction<Product>) => { //: PayloadAction<Product>
      debugger
      const cr = current(state);
      console.log(current(state))
      
      const itemIndex = cr.carts.findIndex((e) => e.id === action.payload.id)
                   
      if (itemIndex >= 0) {
          state.carts[itemIndex].qty += 1
      } else {
        const temp = { ...action.payload, qty: 1 }
        return {
          ...state.carts,
          carts: [...state.carts, temp],
        }             
      }  
    },
    delCart: (state, action) => { //: PayloadAction<number>
      //debugger
      const data = state.carts.filter((el) => el.id !== action.payload)
      return {
        ...state,
        carts: data,
      }
    },
    remove_items: (state, action) => { //: PayloadAction<Product>
      //debugger
      const itemIndex_desc = state.carts.findIndex((e) => e.id === action.payload.id)
      if (state.carts[itemIndex_desc].qty >1) {
        const delete_item = (state.carts[itemIndex_desc].qty -= 1)
        console.log([...state.carts, delete_item])
      
        if(delete_item == 0){
          const data = state.carts.filter((el) => el.id !== action.payload.id)
          return {
            ...state.carts,
            carts: data,
          }
        }  
      } else if (state.carts[itemIndex_desc].qty === 1) {
        const data = state.carts.filter((el) => el.id !== action.payload.id)
        return {
          ...state,
          carts: data,
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetch_customers_basket.fulfilled, (state, action) => {
      state.carts = action.payload;
    }); 

    builder.addCase(save_customers_basket.fulfilled, (state, action) => {
      state.carts.push(action.payload);
    });

    builder.addCase(delete_customers_basket.fulfilled, (state, action) => {
      state.carts.push(action.payload);
    });

  },
});

export default CartSlice.reducer;
export const { addCart , delCart , remove_items} = CartSlice.actions;