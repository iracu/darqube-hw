import React, { useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { useAppSelector } from "../../app/hooks";
import { NewsCard } from "../../components/news-card/news-card";
import { Pagination } from "../../components/pagination/pagination";
import { NewsModel } from "../../types/news.model";
import { setBookmarks, selectBookmarks } from "../bookmarks/bookmarks-slice";
import { selectNews, selectNewsLength, setCurrentPage } from "./news-slice";

export const News = () => {
  const dispatch = useDispatch();
  const news = useAppSelector(selectNews);
  const bookmarks = useAppSelector(selectBookmarks);
  const newsLength = useAppSelector(selectNewsLength);
  const currentPage = useSelector((state: any) => state.data.currentPage);
  const limit = useSelector((state: any) => state.data.limit);
  const totalPages = Math.ceil(newsLength / limit);

  const handlePageChange = useCallback(
    (page: number) => {
      dispatch(setCurrentPage(page));
    },
    [dispatch]
  );

  const handleSetBookmarks = (news: NewsModel) => {
    dispatch(setBookmarks(news))
  }

  return (
    <>
      <div className="news-container">
        { news && news.map((item) => (
          <NewsCard
            id={ item.id }
            key={ item.id }
            related={ item?.related }
            image={ item?.image }
            headline={ item?.headline }
            datetime={ item?.datetime }
            url={ item?.url }
            isBookmarks={ bookmarks.includes(item) }
            onSetBookmarks={ () => handleSetBookmarks(item) }
          />
        )) }
      </div>
      <Pagination
        currentPage={ currentPage }
        totalPages={ totalPages }
        totalNews={ newsLength }
        onPageChange={ handlePageChange }
      />
    </>
  )
}
