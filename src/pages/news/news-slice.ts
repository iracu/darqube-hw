import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

import { newsApi } from "../../api/dataAPI";
import { NewsModel } from "../../types/news.model";
import { RootState } from "../../app/store";

export interface NewsState {
  news: NewsModel[];
  filteredNews: NewsModel[];
  latest: NewsModel | null;
  limit: number;
  currentPage: number;
}

const initialState: NewsState = {
  news: [],
  limit: 6,
  latest: null,
  currentPage: 1,
  filteredNews: [],
};

const queryParams = {
  symbol: 'AAPL',
  from: '2021-04-01',
  to: '2022-07-11',
  token: 'c5g3koaad3id0d5nn48g',
}

export const getNews = createAsyncThunk(
  'news/getNews',
  async () => await newsApi.getNews(queryParams)
);

export const newsSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setNews: (state, action) => {
      state.news = action.payload
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    searchNews: (state, action) => {
      const news = current(state).news;

      state.filteredNews = news
        .filter(item => item.headline?.toLowerCase().includes(action.payload.toLowerCase())
          || item.summary?.toLowerCase().includes(action.payload.toLowerCase()));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNews.fulfilled, (state, action) => {
        const news = action.payload.filter((item: NewsModel) => item !== action.payload[0]);
        state.news = news;
        state.filteredNews = news;
        state.latest = action.payload[0]
      })
  }
});

export const { setCurrentPage, searchNews,  } = newsSlice.actions;

export const selectLatestNews = (state: RootState) => state.data.latest;
export const selectNewsLength = (state: RootState) => state.data.filteredNews.length;
export const selectNews = (state: RootState) => {
  const startIndex = (state.data.currentPage - 1) * state.data.limit;
  const endIndex = startIndex + state.data.limit;

  return state.data.filteredNews.slice(startIndex, endIndex);
};

export default newsSlice.reducer;
