import React from "react";
import style from "./PrPort.module.scss";

const PrPort = (work) => {

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
            <div className={style.pr__title}>
                {work.title}
            </div>
            <div className={style.pr__dtime}>
                <div className={style.pr__dtime_start}>
                    {work.startDtime}
                </div>
                <div className={style.pr__dtime_start_end}>
                    {work.endDtime}
                </div>
            </div>
            <div className={style.pr__image}>
                <img src={work.images} />
            </div>
            <div className={style.pr__desc_box}>
                <div className={style.pr__desc_subtitle}>
                    Role
                </div>
                <div className={style.pr__desc_cont}>
                    {work.role}
                </div>
            </div>
            <div className={style.pr__desc_box}>
                <div className={style.pr__desc_subtitle}>
                    Object
                </div>
                <div className={style.pr__desc_cont}>
                    {work.object}
                </div>
            </div>
            <div className={style.pr__desc_box}>
                <div className={style.pr__desc_subtitle}>
                    Outcomes
                </div>
                <div className={style.pr__desc_cont}>
                    {work.outcomes}
                </div>
            </div>
            <div className={style.pr__desc_box}>
                <div className={style.pr__desc_subtitle}>
                    Learned
                </div>
                <ul className={style.pr__desc_cont}>
                    {mapToListing(work.learned)}
                </ul>
            </div>
        </div>
    )
};

export default PrPort;