import React from "react";
import style from "./PrPort.module.scss";

const PrPort = (work) => {
    return (
        <div>
            <div>
                {work.title}
            </div>
            <div>
                {work.startDtime}
            </div>
            <div>
                {work.endDtime}
            </div>
            <div>
                {work.images}
            </div>
            <div>
                {work.role}
            </div>
            <div>
                {work.object}
            </div>
            <div>
                {work.outcomes}
            </div>
            <div>
                {work.learned}
            </div>
        </div>
    )
};

export default PrPort;