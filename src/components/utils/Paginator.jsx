import style from "../Users/users.module.css";
import next_button from "../../assets/next-button.png";
import React from "react";

export const Paginator = (startPage, turnBackPage, totalUsersCount, onPageChanged,
                          currentPage, usersCount, turnUpPage, portionSize) => {
    let pagesCount = Math.ceil(totalUsersCount / usersCount);
    let pages = [];
    for (let i = startPage; i <= startPage + portionSize; i++) {
        if (pagesCount >= i) pages.push(i)
    }
    return (
        <span className={style.pagination}>
                   <span className={style.block}>
                   <input type={'image'} height={50} width={50} className={style.backArrow} src={next_button}
                          onClick={(e) => {
                              if (startPage >= 11) {
                                  turnBackPage(startPage)
                              }
                          }}/>
                   <span className={style.pages}>
                       {pages.map(p => <span
                           onClick={(e) => {
                               onPageChanged(p)
                           }}
                           className={(currentPage === p) ? style.chosen : style.notChosen}>{p}</span>)}
                   </span>
                       <input type={'image'} height={50} width={50} className={style.aheadArrow} src={next_button}
                              onClick={() => {
                                  if (startPage <= pagesCount - 10) {
                                      turnUpPage(startPage)
                                  }
                              }}/>
                   </span>
               </span>
    )
}