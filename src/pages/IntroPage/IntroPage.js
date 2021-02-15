import React, { useContext } from "react";
import style from "./IntroPage.module.scss";
import { UserContext } from "../../layouts/Layout";
import ID from "../../assets/data/Introduction.json";

const IntroPage = () => {

    const lang = useContext(UserContext).lang;

    const mapToComponent = (principle) => {
        return principle.map((a, i) => (
            <div key={i}>
                {a[lang]}
            </div>
        ))
    };

    return (
        <div className={style.page__box}>
            <div className={style.page__title}>
                IntroPage-title
            </div>
            <div className={style.page__contents}>
                IntroPage-contents
                <div>
                    { ID.vision[lang] }
                </div>
                <div>
                    { mapToComponent(ID.principle) }
                </div>
            </div>
        </div>
    )
};

export default IntroPage;