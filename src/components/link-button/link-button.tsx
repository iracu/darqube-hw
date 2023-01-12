import { FunctionComponent, HTMLAttributeAnchorTarget, ReactNode } from "react";

import styles from "./link-button.module.scss";

interface BlankLinkProps {
  title: string;
  url?: string;
  icon?: ReactNode;
  target?: HTMLAttributeAnchorTarget;
}

export const LinkButton: FunctionComponent<BlankLinkProps> = ({
                                                               url,
                                                               title,
                                                               icon,
                                                               target
                                                             }) => (
  <a
    href={ url }
    target={ target }
    rel="noreferrer"
    className={ styles.linkButton }>
    { icon && icon }
    { title }
  </a>
)
