import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
  pastes:localStorage.getItem('pastes') 
  ? JSON.stringify(localStorage.getItem('pastes')) 
  : [],
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const paste = action.payload;

      //add a check if the paste already exists
      state.pastes.push(paste);
      localStorage.setItem('pastes', JSON.stringify(state.pastes));      
      toast('Paste created successfully')
    },
    updateToPastes: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item._id === paste._id);
      
      if (index >= 0) {
        state.pastes[index] = paste;
        localStorage.setItem('pastes', JSON.stringify(state.pastes));
        
        toast.success('Paste updated successfully')
      }
      
    },
    resetAllPastes: (state, action) => {
      
    },
    removeFromPastes: (state, action) => {

    }
  },
})

export const { addToPastes, updateToPastes, resetAllPastes, removeFromPastes } = pasteSlice.actions

export default pasteSlice.reducer