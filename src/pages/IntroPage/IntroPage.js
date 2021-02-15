import React, { useContext } from "react";
import style from "./IntroPage.module.scss";
import { UserContext } from "../../layouts/Layout";

const IntroPage = () => {

    const lang = useContext(UserContext).lang;
    console.log("IntroPage lang : "+ lang);

    // [todo]
    // 1. json 파일 불러오기
    // 2. 불러온 데이터 lang에 따라 다르게 넣기

    return (
        <div className={style.page__box}>
            <div className={style.page__title}>
                IntroPage-title
            </div>
            <div className={style.page__contents}>
                IntroPage-contents
            </div>
        </div>
    )
};

export default IntroPage;