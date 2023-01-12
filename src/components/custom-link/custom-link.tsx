import { Link, useMatch } from "react-router-dom";

import styles from "./custom-link.module.scss";

export function CustomLink({children, to, ...props}: any) {
  const match = useMatch(to);

  return(
    <Link
      to={ to }
      style={{
        color: match ? 'rgba(var(--color-active))' : 'rgba(var(--color-active), 0.5)'
      }}
      className={ styles.customLink }
      { ...props }
    >
      { children }
    </Link>
  )
}
