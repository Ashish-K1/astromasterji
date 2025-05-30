import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit"

// Define the banner data interface
interface BannerItem {
  id: string
  title: string
  description: string
  bannerUrl: string
  link?: string
  isActive: boolean
}

interface BannerState {
  banners: BannerItem[]
  currentIndex: number
  loading: "idle" | "pending" | "succeeded" | "failed"
  error: string | null
}

const initialState: BannerState = {
  banners: [],
  currentIndex: 0,
  loading: "idle",
  error: null,
}

// Create async thunk for fetching banner data
export const fetchBannerData = createAsyncThunk("banner/fetchBannerData", async () => {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbzC8Yc26vdMePGzztb1eJboEMILaYgeEkGVSOyhmY3J42n4KcsRkeF0JnGRTwXUyWDw/exec",
  )

  if (!response.ok) {
    throw new Error("Failed to fetch banner data")
  }

  const data = await response.json()
  return data
})

const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {
    nextSlide: (state) => {
      state.currentIndex = (state.currentIndex + 1) % state.banners.length
    },
    prevSlide: (state) => {
      state.currentIndex = state.currentIndex === 0 ? state.banners.length - 1 : state.currentIndex - 1
    },
    goToSlide: (state, action: PayloadAction<number>) => {
      state.currentIndex = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBannerData.pending, (state) => {
        state.loading = "pending"
      })
      .addCase(fetchBannerData.fulfilled, (state, action: PayloadAction<BannerItem[]>) => {
        state.loading = "succeeded"
        state.banners = action.payload
        state.currentIndex = 0
      })
      .addCase(fetchBannerData.rejected, (state, action) => {
        state.loading = "failed"
        state.error = action.error.message || "Something went wrong"
      })
  },
})

export const { nextSlide, prevSlide, goToSlide } = bannerSlice.actions
export default bannerSlice.reducer
