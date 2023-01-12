import classNames from "classnames";
import { FunctionComponent } from "react";

import styles from "./badget.module.scss";

export type BadgeType = 'related' | 'featured';

interface BadgeProps {
  type: BadgeType;
  title?: string;
}

export const Badge: FunctionComponent<BadgeProps> = ({
                                           type,
                                           title
                                         }) => (
  <span className={ classNames({
    [styles.related]: type === 'related',
    [styles.featured]: type === 'featured'
  }) }>{ title || '---' }</span>
)
