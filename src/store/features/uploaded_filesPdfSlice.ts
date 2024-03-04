import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UrlServer } from "../../components/services";
import { UPLOADED_FILES } from "../../components/models/uploaded_files.models";
const Url = UrlServer

 

interface Uploaded_fileState {
  uploadedfilespdf: UPLOADED_FILES[];
}

const initialState: Uploaded_fileState = {
  uploadedfilespdf: [],
};

export const fetchUploaded_filesPdf = createAsyncThunk(
  "uploaded_filesPdf/fetch",
  async (_thunkAPI) => {
    const response = await fetch(Url + "/uploaded_file/pdfproductfile", {
      method: "GET",
    });
    //debugger
    const data = response.json();
    return data;
  },
);

// export const savePerson = createAsyncThunk(
//   "uploaded_files/save",
//   async (name: string, thunkAPI) => {
//     debugger
//     const jdata = JSON.stringify({
//       id:0,
//       name:name,
//       name2:"",
//       id2:0,
//     })
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

// export const deletePerson = createAsyncThunk(
//   "uploaded_files/delete",
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

export const UploadedFilesPdfSlice = createSlice({
  name: "uploaded_filesPdf",
  initialState,
  reducers: {
    // addPerson:  (state, action: PayloadAction<{ name: string }>) => {
    //   debugger
    //   state.products.push({
    //     id: state.persons.length,
    //     name: action.payload.name,
    //     name2: action.payload.name,
    //     id2: state.persons.length,
    //   });
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUploaded_filesPdf.fulfilled, (state, action) => {
      state.uploadedfilespdf = action.payload;
    });

    // builder.addCase(savePerson.fulfilled, (state, action) => {
    //   state.persons.push(action.payload);
    // });
  },
});

export default UploadedFilesPdfSlice.reducer;
export const {} = UploadedFilesPdfSlice.actions;

