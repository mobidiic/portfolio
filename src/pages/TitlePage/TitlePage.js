import React from "react";
import style from "./TitlePage.module.scss";

const TitlePage = () => {
    return (
        <div className={style.page__box}>
            <div className={style.title__contents}>
                <span>
                    CEAN PARK
                </span>
                <div className={style.title__underbar}></div>
                <span>
                    PRODUCT MANAGER
                </span>
            </div>
        </div>
    )
};

export default TitlePage;