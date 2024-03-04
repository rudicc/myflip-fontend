//#	A
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";	
 
import { UrlServer } from "../../components/services";	
import { ORDERS_PRODUCTS_CUSTOMER } from "../../components/models/orders.model";
 
const Url = UrlServer	
     
interface ORDERS_PRODUCTS_CUSTOMERState {	
  orders_products_cutomers: ORDERS_PRODUCTS_CUSTOMER[];	
}	
    
const initialState: ORDERS_PRODUCTS_CUSTOMERState = {	
  orders_products_cutomers: [],	
};	
    
export const fetchOrders_ProductsCustomers = createAsyncThunk(	
  "orders_products_cutomers/fetch",async (jdata: string, _thunkAPI) => {	

    const response = await fetch(Url + "/ordersid_productsid/ordersproducts/", {	
      method: "POST",
      headers: {	
        "Content-Type": "application/json",	
      },
      body: jdata,

    });	
    debugger	
    const data = response.json();	
    return data;	
  },	
);	
 
export const fetchOrders_BasketCustomers = createAsyncThunk(	
  "orders_basket_cutomers/fetch",async (jdata: string, _thunkAPI) => {	

    const response = await fetch(Url + "/orders_basket/getordcus/", {	
      method: "POST",
      headers: {	
        "Content-Type": "application/json",	
      },
      body: jdata,

    });	
    debugger	
    const data = response.json();	
    return data;	
  },	
);	

// export const InsertAtbl = createAsyncThunk(	
//   "atbl/save",	
//   async (jdata: string, thunkAPI) => {	
//     debugger	
//     const response = await fetch(Url + "/a/create/", {	
//       method: "POST",	
//       headers: {	
//         "Content-Type": "application/json",	
//       },	
//       body: jdata,	
//     });	
      
//     const data = await response.json();	
//     return  data;	
//   },	
// );	
    
// export const UpdateAtbl = createAsyncThunk(	
//   "atbl/update",	
//   async (jdata: string, thunkAPI) => {	
//     debugger	
//     const response = await fetch(Url + "/a/put/", {	
//       method: "PUT",	
//       headers: {	
//         "Content-Type": "application/json",	
//       },	
//       body: jdata,	
//     });	
      
//     const data = await response.json();	
//     return  data;	
//   },	
// );	
     
// export const DeleteAtbl = createAsyncThunk(	
//   "atbl/delete",	
//   async (id: number, thunkAPI) => {	
//     debugger	
     
//     const response = await fetch(Url + "/a/del/" + id, {	
//       method: "DELETE",	
//       headers: {	
//         "Content-Type": "application/json",	
//       },	
//     });	
        
//     const data = await response.json();	
//     return data;	
//   },	
// );	
    
export const OrdersProductsCustomesSlice = createSlice({	
  name: "atbl",	
  initialState,	
  reducers: {},	
  extraReducers: (builder) => {	
    builder.addCase(fetchOrders_ProductsCustomers.fulfilled, (state, action) => {	
      state.orders_products_cutomers = action.payload;	
    });	
    
    //fetchOrders_BasketCustomers
    builder.addCase(fetchOrders_BasketCustomers.fulfilled, (state, action) => {	
      state.orders_products_cutomers = action.payload;	
    });	

    // builder.addCase(InsertAtbl.fulfilled, (state, action) => {	
    //   state.atbl = action.payload;	
    // });	
    
    // builder.addCase(UpdateAtbl.fulfilled, (state, action) => {	
    //   state.atbl = action.payload;	
    // });	
    
    // builder.addCase(DeleteAtbl.fulfilled, (state, action) => {	
    //   state.atbl = action.payload;	
    // });	
  },	
});	
    
export default OrdersProductsCustomesSlice.reducer;	
export const {} = OrdersProductsCustomesSlice.actions;