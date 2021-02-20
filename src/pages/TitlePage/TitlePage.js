import React from "react";
import style from "./TitlePage.module.scss";

const TitlePage = () => {
    return (
        <div className={style.title__box}>
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