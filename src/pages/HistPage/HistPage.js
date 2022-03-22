import React, { useContext } from "react";
import style from "./HistPage.module.scss";
import { UserContext } from "../../layouts/Layout";
import WE_EN from "../../assets/data/WorkExperience.en.json";
import WE_KR from "../../assets/data/WorkExperience.kr.json";

const HistPage = () => {

    const lang = useContext(UserContext).lang;
    const WE = lang == "EN" ? WE_EN : WE_KR;
    const services = WE.services;

    const mapToComponent = (work) => {
        return work.map((a, i) => (
            <div key={i}>
                <div className={style.hist__list_title}>
                    {a.title}
                </div>
                <div className={style.hist__list_date}>
                    {a.start_dtime} - {a.end_dtime}
                </div>
            </div>
        ))
    };

    return (
        <div className={style.hist__box}>
            <div className={style.hist__title}>
                Working History
            </div>
            <div className={style.hist__list}>
                {mapToComponent(services)}
            </div>
        </div>
    )
};

export default HistPage;