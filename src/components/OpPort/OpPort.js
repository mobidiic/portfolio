import React from "react";
import style from "./OpPort.module.scss";

const OpPort = (work) => {
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
                {work.description}
            </div>
            <div>
                {work.keyLogs}
            </div>
        </div>
    )
};

export default OpPort;