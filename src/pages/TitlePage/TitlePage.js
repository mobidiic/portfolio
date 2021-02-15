import React from "react";
import style from "./TitlePage.module.scss";

const TitlePage = () => {
    return (
        <div className={style.page__box}>
            <div className={style.page__title}>
                TitlePage-title
            </div>
            <div className={style.page__contents}>
                Cean Park, Product Manager
            </div>
        </div>
    )
};

export default TitlePage;