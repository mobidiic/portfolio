import React from "react";
import style from "./DsPage.module.scss";

const DsPage = () => {
    return (
        <div className={style.page__box}>
            <div className={style.page__title}>
                Design System
            </div>
            <div className={style.page__contents}>
                <div className={style.ds__color_box}>
                    <div>
                        <div className={style.ds__color_box__offset} />
                        <div className={style.ds__color_box__name}>
                            #f6f4f1
                        </div>
                    </div>
                    <div>
                        <div className={style.ds__color_box__offset} />
                        <div className={style.ds__color_box__name}>
                            #262626
                        </div>
                    </div>
                </div>
                <div className={style.ds__font_box}>
                    <div className={style.ds__font_box__title}>
                        Simple and fresh and fair from winter's close emerging,
                    </div>
                    <div className={style.ds__font_box__text}>
                        Simple and fresh and fair from winter's close emerging,
                    </div>
                    <div className={style.ds__font_box__italic}>
                        Simple and fresh and fair from winter's close emerging,
                    </div>
                    <div className={style.ds__font_box__title}>
                        동해물과 백두산이 마르고 닳도록, 하느님이 보우하사 우리 나라 만세
                    </div>
                    <div className={style.ds__font_box__text}>
                        동해물과 백두산이 마르고 닳도록, 하느님이 보우하사 우리 나라 만세
                    </div>
                    <div className={style.ds__font_box__italic}>
                        동해물과 백두산이 마르고 닳도록, 하느님이 보우하사 우리 나라 만세
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DsPage;