import React, { useContext } from "react";
import OpPort from "../../components/OpPort/OpPort";
import PrPort from "../../components/PrPort/PrPort";
import style from "./PortPage.module.scss";
import { UserContext } from "../../layouts/Layout";

const PortPage = () => {

    const lang = useContext(UserContext).lang;
    console.log("PortPage lang : "+ lang);

    // [todo] json 파일 불러와서 map 으로 데이터 뿌려주기
    // 1. json 파일 불러오기
    // 2. map 함수 만들기
    // 3. type 이 OP/PR 인지에 따라 다른 렌더링 함수 호출
    // 4. OP 렌더링함수 만들기
    // 5. PR 렌더링함수 만들기
    // 6. 각 렌더링함수에 props로 lang 전달

    return (
        <div className={style.page__box}>
            <div className={style.page__title}>   
                PortPage
            </div>
            <div className={style.page__contents}>
                <OpPort />
                <PrPort />
            </div>
        </div>
    )
};

export default PortPage;