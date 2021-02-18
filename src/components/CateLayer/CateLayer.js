import React from "react";
import style from "./CateLayer.module.scss";

const CateLayer = () => {

    // 카테고리레이어 링크 넣기
    return (
        <div className={style.cate_layer__page}>
            <div className={style.cate_layer__upper_bar} />
            <ul className={style.cate_layer__list_box}>
                <li className={style.cate_layer__item} >Profile</li>
                <li className={style.cate_layer__item} >Medium</li>
                <li className={style.cate_layer__item} >Mail</li>
                <li className={style.cate_layer__item} >Phone</li>
            </ul>
        </div>
    )
};

export default CateLayer;