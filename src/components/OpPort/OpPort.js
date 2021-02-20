import React from "react";
import style from "./OpPort.module.scss";

const OpPort = (work) => {

    const mapToListing = (list) => {
        return list.map((a, i) => {
            return (
                <li key={i}>
                    {a}
                </li>
            )
        })
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
                <img src={work.images} />
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
                    Description
                </div>
                <ul className={style.op__desc_cont}>
                    {mapToListing(work.description)}
                </ul>
            </div>
            <div className={style.op__desc_box}>
                <div className={style.op__desc_subtitle}>
                    Key Logs
                </div>
                <ul className={style.op__desc_cont}>
                    {mapToListing(work.keyLogs)}
                </ul>
            </div>
        </div>
    )
};

export default OpPort;