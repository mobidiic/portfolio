import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../layouts/Layout";
import style from "./OpPort.module.scss";

const OpPort = (work) => {

    const [image, setImage] = useState("");
    const lang = useContext(UserContext).lang;

    useEffect(()=>{
        import(`../../assets/images/${work.images}`).then(image => {
            setImage(image.default);
        });
    },[]);

    let problem = lang == "EN" ? "Problem Discover" : "문제발견" ;
    let strategy = lang == "EN" ? "Strategy" : "해결전략" ;
    let solution = lang == "EN" ? "Solution" : "처리방안" ;
    let outcomes = lang == "EN" ? "Outcomes" : "성과분석" ;

    const mapToListing = (list) => {
        return list.map((a, i) => {
            return (
                <li key={i}>
                    {a}
                </li>
            )
        })
    };


    const mapToComponent = (work) => {
        return work.map((a, i) => (
            <div key={i}>
                <div className={style.op__keylogs_title}>
                    {i+1}. {a.title}
                </div>
                <ul>
                    <li className={style.op__keylogs_cont}>
                        <span>{problem} :</span><br/> {a.problem}
                    </li>
                    <li className={style.op__keylogs_cont}>
                        <span>{strategy} :</span><br/> {a.strategy}
                    </li>
                    <li className={style.op__keylogs_cont}>
                        <span>{solution} :</span><br/> {a.solution}
                    </li>
                    <li className={style.op__keylogs_cont}>
                        <span>{outcomes} :</span><br/> {a.performance}
                    </li>
                </ul>
            </div>
        ))
    };

    return (
        <div className={style.page__box}>
            <div className={style.op__title}>
                {work.title}
            </div>
            <div className={style.op__dtime}>
                <div className={style.op__dtime_start}>
                    {work.startDtime}
                </div>
                <div className={style.op__dtime_start_end}>
                    {work.endDtime}
                </div>
            </div>
            <div className={style.op__image}>
                <img src={image} />
            </div>
            <div className={style.op__desc_box}>
                <div className={style.op__desc_subtitle}>
                    Role
                </div>
                <div className={style.op__desc_cont}>
                    {work.role}
                </div>
            </div>
            <div className={style.op__desc_box}>
                <div className={style.op__desc_subtitle}>
                    Contribution
                </div>
                <ul className={style.op__desc_cont}>
                    {mapToListing(work.contribution)}
                </ul>
            </div>
            <div className={style.op__desc_box}>
                <div className={style.op__desc_subtitle}>
                    Key Logs
                </div>
                <div className={style.op__desc_cont}>
                    {mapToComponent(work.keyLogs)}
                </div>
            </div>
        </div>
    )
};

export default OpPort;