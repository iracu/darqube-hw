import { createSlice, current } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";
import { NewsModel } from "../../types/news.model";

interface BookmarksState {
  bookmarks: NewsModel[];
  filteredBookmarks: NewsModel[];
}

const initialState: BookmarksState = {
  bookmarks: [],
  filteredBookmarks: [],
};

export const storeSlice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    setBookmarks: (state, action) => {
      const bookmarks = current(state).bookmarks;
      console.log('current(state', current(state))

      if (bookmarks?.find(news => news === action.payload)) {
        state.bookmarks = bookmarks.filter(news => news !== action.payload)
        state.filteredBookmarks = bookmarks.filter(news => news !== action.payload)
      } else {
        state.bookmarks.push(action.payload!)
        state.filteredBookmarks.push(action.payload!)
      }
    },
    searchBookmarks: (state, action) => {
      const bookmarks = current(state).bookmarks;

      state.filteredBookmarks = bookmarks
        .filter(item => item.headline?.toLowerCase().includes(action.payload.toLowerCase())
          || item.summary?.toLowerCase().includes(action.payload.toLowerCase()));
    }
  },
});

export const { setBookmarks, searchBookmarks } = storeSlice.actions;

export const selectBookmarks = (state: RootState) => state.bookmarks.filteredBookmarks;

export default storeSlice.reducer;
