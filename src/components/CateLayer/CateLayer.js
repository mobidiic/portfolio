import React from "react";
import style from "./CateLayer.module.scss";

const CateLayer = () => {

    // 카테고리레이어 링크 넣기
    return (
        <div className={style.cate_layer__page}>
            <div className={style.cate_layer__upper_bar} />
            <ul className={style.cate_layer__list_box}>
                <li className={style.cate_layer__item} >
                    <a href="https://mobidiic.github.io/profile">
                        Profile
                    </a>
                </li>
                <li className={style.cate_layer__item} >
                    <a href="https://ceaniee.notion.site/ceaniee/About-a9fbbc7084594eb8a370e8a0313b2c83">
                        Notion
                    </a>
                </li>
                <li className={style.cate_layer__item} >
                    <a href="https://medium.com/@cean_park">
                        Blog
                    </a>
                </li>
                <li className={style.cate_layer__item} >
                    <a href="mailto:sigus128@gmail.com">
                        Mail
                    </a>
                </li>
            </ul>
        </div>
    )
};

export default CateLayer;