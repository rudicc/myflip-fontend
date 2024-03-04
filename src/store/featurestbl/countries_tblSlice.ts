//#	COUNTRIES
	import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";	
	import {  COUNTRIES  } from "../../components/models/countries.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface CountriesState {	
	  countriestbl: COUNTRIES[];	
	}	
		
	const initialState: CountriesState = {	
	  countriestbl: [],	
	};	
		
	export const fetchCountriestbl = createAsyncThunk(	
	  "countriestbl/fetch",	
	  async (_thunkAPI) => {	
	    const response = await fetch(Url + "/countries/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertCountriestbl = createAsyncThunk(	
	  "countriestbl/save",	
	  async (jdata: string, _thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/countries/create/", {	
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
		
	export const UpdateCountriestbl = createAsyncThunk(	
	  "countriestbl/update",	
	  async (jdata: string, _thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/countries/put/", {	
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
	 	
	export const DeleteCountriestbl = createAsyncThunk(	
	  "countriestbl/delete",	
	  async (id: number, _thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/countries/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const CountriestblSlice = createSlice({	
	  name: "countriestbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchCountriestbl.fulfilled, (state, action) => {	
	      state.countriestbl = action.payload;	
	    });	
		
	    builder.addCase(InsertCountriestbl.fulfilled, (state, action) => {	
	      state.countriestbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateCountriestbl.fulfilled, (state, action) => {	
	      state.countriestbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteCountriestbl.fulfilled, (state, action) => {	
	      state.countriestbl = action.payload;	
	    });	
	  },	
	});	
		
	export default CountriestblSlice.reducer;	
	export const {} = CountriestblSlice.actions;