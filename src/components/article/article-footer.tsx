import { FunctionComponent } from "react";

import { convertIsoDate } from "../../utils/datetime-utils";
import { truncateString } from "../../utils/string-utils";
import { BookmarksButton } from "../bookmarks-button/bookmarks-button";
import { ArrowRightIcon } from "../icons";
import { LinkButton } from "../link-button/link-button";
import styles from "./article.module.scss";

interface ArticleFooterProps {
  id: number;
  url?: string;
  headline?: string;
  featured?: boolean;
  datetime?: number;
  isBookmarks?: boolean;

  onSetBookmarks(id: number): void;
}

export const ArticleFooter: FunctionComponent<ArticleFooterProps> = ({
                                                                       id,
                                                                       url,
                                                                       headline,
                                                                       featured,
                                                                       datetime,
                                                                       onSetBookmarks,
                                                                       isBookmarks
                                                                     }) => (
  <footer>
    <p className={ styles.headline }>{ truncateString(headline!, 50) }</p>
    <div className={ styles.footerWrapper }>
      <div className={ styles.footerMeta }>
        {
          featured && <LinkButton
            url={ url }
            title="Read the research"
            target="_blank"
            icon={ <ArrowRightIcon/> }
          />
        }
        { datetime && <span className={ featured ? styles.dateTime : '' }>{ convertIsoDate(datetime!) }</span> }
      </div>
      <BookmarksButton
        isBookmarks={ isBookmarks }
        onClick={ () => onSetBookmarks(id) }
      />
    </div>
  </footer>
)
