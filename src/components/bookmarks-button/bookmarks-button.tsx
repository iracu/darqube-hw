import { FunctionComponent } from "react";

import { IconButton } from "../icon-button/icon-button";
import { BookmarksFillIcon, BookmarksIcon } from "../icons";

interface BookmarksButtonProps {
  isBookmarks?: boolean;

  onClick?(): void;
}

export const BookmarksButton: FunctionComponent<BookmarksButtonProps> = ({
                                                                           isBookmarks,
                                                                           onClick
                                                                         }) => (
  <div>
    { onClick && <IconButton
      onClick={ () => onClick() }
    >
      { isBookmarks ? <BookmarksFillIcon/> : <BookmarksIcon/> }
    </IconButton> }
  </div>
)