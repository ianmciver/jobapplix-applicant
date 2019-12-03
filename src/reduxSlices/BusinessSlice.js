import { createSlice } from "@reduxjs/toolkit";

const businessSlice = createSlice({
  name: "business",
  initialState: {
    id: 0,
    name: "",
    email: "",
    address: "",
    url: "",
    phone: "",
    website: "",
    description: "",
    active: false,
    canceled: false,
    parent: null,
    stripe_customer_id: null,
    stripe_sub_id: null,
    sub_type: null,
    image_url: null,
    referrer_id: null,
    loaded: false,
    positions: []
  },
  reducers: {
    loadBusiness: {
      reducer: (state, action) => {
        return {
          ...state,
          ...action.payload.business,
          positions: action.payload.positions,
          loaded: true
        };
      },
      prepare: value => ({ payload: value })
    }
  }
});

export const { loadBusiness } = businessSlice.actions;

export default businessSlice.reducer;
