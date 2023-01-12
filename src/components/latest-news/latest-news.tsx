import React from "react";
import { useDispatch } from "react-redux";

import { selectBookmarks, setBookmarks } from "./../../pages/bookmarks/bookmarks-slice";
import { selectLatestNews } from "../../pages/news/news-slice";
import { useAppSelector } from "../../app/hooks";
import { NewsCard } from "../news-card/news-card";

export const LatestNews = () => {
  const dispatch = useDispatch();
  const latestNews = useAppSelector(selectLatestNews);
  const bookmarks = useAppSelector(selectBookmarks);

  return (
    <>
      { latestNews && <NewsCard
        featured
        id={ latestNews.id }
        related={ latestNews?.related }
        image={ latestNews?.image }
        headline={ latestNews?.headline }
        datetime={ latestNews?.datetime }
        isBookmarks={ bookmarks.includes(latestNews) }
        onSetBookmarks={ () => dispatch(setBookmarks(latestNews)) }
        url={ latestNews?.url }
      /> }
    </>
  )
}
