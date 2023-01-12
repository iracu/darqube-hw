import React, { FunctionComponent } from "react";

import styles from "./pagination.module.scss";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalNews: number;

  onPageChange(currentPage: number): void;
}

export const Pagination: FunctionComponent<PaginationProps> = ({
                                                                 currentPage,
                                                                 totalPages,
                                                                 totalNews,
                                                                 onPageChange
                                                               }) => (
  <div className={ styles.pagination }>
    <div className={ styles.paginationCount }>
      { currentPage }-{ totalNews <= 6 ? totalNews : 6 } <span>out of { totalNews }</span>
    </div>
    <div className={ styles.paginationAction }>
      <button
        disabled={ currentPage === 1 }
        onClick={ () => onPageChange(currentPage - 1) }
      >
        Previous
      </button>

      <button
        disabled={ currentPage === totalPages }
        onClick={ () => onPageChange(currentPage + 1) }
      >
        Next
      </button>
    </div>
  </div>
)
