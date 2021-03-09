import React from "react";
import style from "./BarScale.module.scss";

const BarScale = (props) => {
    const deviceWidth = window.innerWidth;
    const perScaleBarWidth = 0.3;
    const scaleForBar =   deviceWidth * perScaleBarWidth;
    let scale = props.score / props.totalScore * scaleForBar;
    scale += "px";

    console.log(">>> scaleForBar : " + scaleForBar);
    console.log(">>> props.scor : " + props.score);
    console.log(">>> scale : " + scale);

    return (
        <div className={style.scale__box}>
            <div style={{width: "20px"}}/>
            <div className={style.scale__number}>
                {props.score}
            </div>
            <div className={style.scale__bar} style={{ width: scale}}/>
        </div>
    )
};

export default BarScale;