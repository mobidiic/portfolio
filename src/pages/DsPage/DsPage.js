import React from "react";
import style from "./DsPage.module.scss";

const DsPage = () => {
    return (
        <div className={style.page__box}>
            <div className={style.ds__title}>
                Design System
            </div>
            <div className={style.ds__contents}>
                <div className={style.ds__color_palette}>
                    <div className={style.ds__subtitle}>
                        <span>color palette</span>
                    </div>
                    <div className={style.ds__color_box_set}>
                        <div className={style.ds__color_box}>
                            <div className={`${style.ds__color_box__offset} ${style.ds__color_box_main}`} />
                            <div className={style.ds__color_box__name}>
                                #f6f4f1
                            </div>
                        </div>
                        <div className={style.ds__color_box}>
                            <div className={`${style.ds__color_box__offset} ${style.ds__color_box_text}`} />
                            <div className={style.ds__color_box__name}>
                                #262626
                            </div>
                        </div>
                        <div className={style.ds__color_box}>
                            <div className={`${style.ds__color_box__offset} ${style.ds__color_box_cta}`} />
                            <div className={style.ds__color_box__name}>
                                #7a6661
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.ds__font_box}>
                    <div className={style.ds__subtitle}>
                        <span>font style</span>
                    </div>
                    <div className={style.ds__font_box_set}>
                        <div className={style.ds__font_box__title}>
                            Simple and fresh and fair from winter's close emerging,
                        </div>
                        <div className={style.ds__font_box__subtitle}>
                            Simple and fresh and fair from winter's close emerging,
                        </div>
                        <div className={style.ds__font_box__body}>
                            Simple and fresh and fair from winter's close emerging,
                        </div>
                        <div className={style.ds__font_box__title}>
                            동해물과 백두산이 마르고 닳도록
                        </div>
                        <div className={style.ds__font_box__subtitle}>
                            동해물과 백두산이 마르고 닳도록
                        </div>
                        <div className={style.ds__font_box__body}>
                            동해물과 백두산이 마르고 닳도록
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DsPage;