import React from "react";
import style from "./DsPage.module.scss";

const DsPage = () => {
    return (
        <div className={style.page__box}>
            <div className={style.page__title}>
                Design System
            </div>
            <div className={style.page__contents}>
                <div className={style.ds__color_palette}>
                    <div>
                        color palette
                    </div>
                    <div className={style.ds__color_box}>
                        <div className={style.ds__color_box__offset} />
                        <div className={style.ds__color_box__name}>
                            #f6f4f1
                        </div>
                    </div>
                    <div className={style.ds__color_box}>
                        <div className={style.ds__color_box__offset} />
                        <div className={style.ds__color_box__name}>
                            #262626
                        </div>
                    </div>
                    <div className={style.ds__color_box}>
                        <div className={style.ds__color_box__offset} />
                        <div className={style.ds__color_box__name}>
                            #7a6661
                        </div>
                    </div>
                </div>
                <div className={style.ds__font_box}>
                    <div className={style.ds__font_title}>
                        font style
                    </div>
                    <div className={style.ds__font_box__title}>
                        Title
                    </div>
                    <div className={style.ds__font_box__subtitle}>
                        SubTitle
                    </div>
                    <div className={style.ds__font_box__body}>
                        Body
                    </div>
                    <div className={style.ds__font_box__title}>
                        타이틀
                    </div>
                    <div className={style.ds__font_box__subtitle}>
                        서브타이틀
                    </div>
                    <div className={style.ds__font_box__body}>
                        본문
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DsPage;