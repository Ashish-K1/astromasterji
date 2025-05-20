import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit"

// Define the contact data interface
interface ContactInfo {
  id: string
  name: string
  phone: string
  email: string
  isPrimaryPhone: boolean
}

interface ContactState {
  contacts: ContactInfo[]
  loading: "idle" | "pending" | "succeeded" | "failed"
  error: string | null
}

const initialState: ContactState = {
  contacts: [],
  loading: "idle",
  error: null,
}

// Create async thunk for fetching contact data
export const fetchContactData = createAsyncThunk("contact/fetchContactData", async () => {
  const response = await fetch(
    "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLh0HxBKk3KFbyIRyQqgHU72XQTbQYDKIx7bLppWn01k67VulCD2DN7Quoj-U9Uzb2lPj0ly-s_d8bZ7FRinfSlYelcrOxHoS-1c7l9wY1XkyQjXvie-6Xtq33BaG2nGhF3u2QC0o_5vIaM6CjHA_r0pc6rg_CJt1ZKYQ89v1ZeALYvmmeI3jnbNWxC7tmVSucrG_tDRO7p_aZ5yBIfpbwdh_Pc4wZfZMhqQUWKhtHp-i-O4n54b6HcjwVc1_wWgpNH-1bT7bKRVucElzdf46E7mVslz1A&lib=ME0ccEh29Js6T1g7BykuWPRmXCs-KDST4",
  )

  if (!response.ok) {
    throw new Error("Failed to fetch contact data")
  }

  const data = await response.json()
  return data.data
})

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactData.pending, (state) => {
        state.loading = "pending"
      })
      .addCase(fetchContactData.fulfilled, (state, action: PayloadAction<ContactInfo[]>) => {
        state.loading = "succeeded"
        state.contacts = action.payload
      })
      .addCase(fetchContactData.rejected, (state, action) => {
        state.loading = "failed"
        state.error = action.error.message || "Something went wrong"
      })
  },
})

export default contactSlice.reducer
