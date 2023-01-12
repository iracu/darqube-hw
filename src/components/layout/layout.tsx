import React, { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../header/header";
import { LatestNews } from "../latest-news/latest-news";
import styles from "./layout.module.scss";

export const Layout: FunctionComponent = () => (
  <div className={ styles.layout }>
    <Header/>
    <div className={ styles.layoutWrapper }>
      <LatestNews/>
      <main className={ styles.newsContainer }>
        <Outlet />
      </main>
    </div>
  </div>
)
