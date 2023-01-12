import classNames from "classnames";
import { FunctionComponent, PropsWithChildren } from "react";

import noImage from "./../../assets/images/no-image.png";
import styles from "./article.module.scss";

interface ArticleWrapperProps {
  image?: string;
  featured?: boolean;
}

export const ArticleWrapper: FunctionComponent<PropsWithChildren<ArticleWrapperProps>> = ({
                                                                                            image,
                                                                                            children,
                                                                                            featured
                                                                                          }) => (
  <article
    className={ classNames(styles.card, {
      [styles.featured]: featured
    }) }
    style={ { backgroundImage: image ? `url(${ image })` : `url(${ noImage })` } }
  >
    { children }
  </article>
)
