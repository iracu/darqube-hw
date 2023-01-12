import { FunctionComponent } from "react";

import { ArticleFooter } from "../article/article-footer";
import { ArticleHeader } from "../article/article-header";
import { ArticleWrapper } from "../article/article-wrapper";

interface NewsCardProps {
  id: number;
  featured?: boolean;
  related?: string;
  image?: string;
  headline?: string;
  datetime?: number;
  url?: string;
  isBookmarks?: boolean;

  onSetBookmarks(): void;
}

export const NewsCard: FunctionComponent<NewsCardProps> = ({
                                                             featured,
                                                             related,
                                                             image,
                                                             headline,
                                                             datetime,
                                                             url,
                                                             id,
                                                             isBookmarks,
                                                             onSetBookmarks
                                                           }) => (
  <ArticleWrapper
    image={ image }
    featured={ featured }
  >
    <ArticleHeader
      related={ related }
      featured={ featured }
    />
    <ArticleFooter
      id={ id }
      url={ url }
      headline={ headline }
      featured={ featured }
      datetime={ datetime }
      isBookmarks={ isBookmarks }
      onSetBookmarks={ () => onSetBookmarks() }
    />
  </ArticleWrapper>
)
