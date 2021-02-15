import React from "react";
import style from "./DsPage.module.scss";

const DsPage = () => {
    return (
        <div className={style.page__box}>
            <div className={style.page__title}>
                DsPage-title
            </div>
            <div className={style.page__contents}>
                DsPage-contents
            </div>
        </div>
    )
};

export default DsPage;