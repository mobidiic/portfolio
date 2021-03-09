import React, { Fragment, useContext } from "react";
import { UserContext } from "../../layouts/Layout";
import style from "./ByePage.module.scss";

const ByePage = () => {

    const lang = useContext(UserContext).lang;
    let byeMessage = lang == "EN" ? "Thanks" : "감사합니다";

    return (
        <Fragment >
        <div className={style.title__box}>
            <div className={style.title__contents}>
                <span>
                    {byeMessage}
                </span>
            </div>
        </div>
        </Fragment>
    )
};

export default ByePage;