import React from "react";
import { useDispatch } from "react-redux";

import { useAppSelector } from "../../app/hooks";
import { NewsCard } from "../../components/news-card/news-card";
import { selectBookmarks, setBookmarks } from "./bookmarks-slice";

export const Bookmarks = () => {
  const dispatch = useDispatch();
  const bookmarks = useAppSelector(selectBookmarks);

  return(
    <div className="news-container">
      { bookmarks && bookmarks.map((item) => (
        <NewsCard
          id={ item.id }
          key={ item.id }
          related={ item?.related }
          image={ item?.image }
          headline={ item?.headline }
          datetime={ item?.datetime }
          url={ item?.url }
          isBookmarks={ bookmarks.includes(item) }
          onSetBookmarks={ () => dispatch(setBookmarks(item)) }
        />
      ) ) }
    </div>
  )
}
