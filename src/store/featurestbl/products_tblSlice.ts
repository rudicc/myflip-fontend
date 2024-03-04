//#	PRODUCTS
	import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";	
	import {  PRODUCTS  } from "../../components/models/products.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface ProductsState {	
	  productstbl: PRODUCTS[];	
	}	
		
	const initialState: ProductsState = {	
	  productstbl: [],	
	};	
		
	export const fetchProductstbl = createAsyncThunk(	
	  "productstbl/fetch",	
	  async (_thunkAPI) => {	
	    const response = await fetch(Url + "/products/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertProductstbl = createAsyncThunk(	
	  "productstbl/save",	
	  async (jdata: string, _thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/products/create/", {	
	      method: "POST",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	      body: jdata,	
	    });	
	  	
	    const data = await response.json();	
	    return  data;	
	  },	
	);	
		
	export const UpdateProductstbl = createAsyncThunk(	
	  "productstbl/update",	
	  async (jdata: string, _thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/products/put/", {	
	      method: "PUT",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	      body: jdata,	
	    });	
	  	
	    const data = await response.json();	
	    return  data;	
	  },	
	);	
	 	
	export const DeleteProductstbl = createAsyncThunk(	
	  "productstbl/delete",	
	  async (id: number, _thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/products/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const ProductstblSlice = createSlice({	
	  name: "productstbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchProductstbl.fulfilled, (state, action) => {	
	      state.productstbl = action.payload;	
	    });	
		
	    builder.addCase(InsertProductstbl.fulfilled, (_state, _action) => {	
	      //state.productstbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateProductstbl.fulfilled, (_state, _action) => {	
	      //state.productstbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteProductstbl.fulfilled, (_state, _action) => {	
	      //state.productstbl = action.payload;	
	    });	
	  },	
	});	
		
	export default ProductstblSlice.reducer;	
	export const {} = ProductstblSlice.actions;