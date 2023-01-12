import React, { FunctionComponent, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";

import { useAppDispatch } from "./app/hooks";
import { Layout } from "./components/layout/layout";
import { Bookmarks } from "./pages/bookmarks/bookmarks";
import { News } from "./pages/news/news";
import { getNews } from "./pages/news/news-slice";

export const App: FunctionComponent = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getNews())
  })

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Layout/> }>
          <Route index element={ <News/> }/>
          <Route path="bookmarks" element={ <Bookmarks/> }/>
        </Route>
      </Routes>
    </div>
  );
}
