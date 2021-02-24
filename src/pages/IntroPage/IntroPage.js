import React, { useContext } from "react";
import style from "./IntroPage.module.scss";
import { UserContext } from "../../layouts/Layout";
import ID from "../../assets/data/Introduction.json";
import img from "../../assets/images/pf_img_main.png";

const IntroPage = () => {

    const lang = useContext(UserContext).lang;

    const mapToComponent = (principle) => {
        return principle.map((a, i) => (
            <li key={i}>
                {a[lang]}
            </li>
        ))
    };

    return (
        <div className={style.page__box}>
            <div className={style.intro__content}>
                <div className={style.intro__img}>
                    <img src={img} />
                </div>
                <div className={style.intro__content__visn}>
                    <div className={style.intro__content__title}>
                        Vision
                    </div>
                    <div className={style.intro__content__text}>
                        " { ID.vision[lang] } "
                    </div>
                </div>
                <div className={style.intro__content__prcp}>
                    <div className={style.intro__content__title}>
                        Principle
                    </div>
                    <ul>
                        { mapToComponent(ID.principle) }
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default IntroPage;