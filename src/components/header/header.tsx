import React, { FunctionComponent } from "react";

import { Navigation } from "../navigation/navigation";
import { Search } from "../search/search";
import { navigation } from "./configs";
import styles from "./header.module.scss";

export const Header: FunctionComponent = () => (
  <header className={ styles.header }>
    <Navigation routes={ navigation}/>
    <Search />
  </header>
)
