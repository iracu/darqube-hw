import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { searchBookmarks } from "../../pages/bookmarks/bookmarks-slice";
import { searchNews } from "../../pages/news/news-slice";
import { SearchIcon } from "../icons";
import styles from "./search.module.scss";

export const Search = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const handleOnSearch = (term: string) => {
    if (location.pathname === '/') {
      dispatch(searchNews(term));
    } else {
      dispatch(searchBookmarks(term));
    }
  }

  return (
    <label className={ styles.search }>
      <SearchIcon/>
      <input
        type="text"
        placeholder="Search"
        onChange={ (e) => handleOnSearch(e.target.value) }
      />
    </label>
  )
}