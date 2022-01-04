import React, { useContext } from "react";
import OpPort from "../../components/OpPort/OpPort";
import PrPort from "../../components/PrPort/PrPort";
import style from "./PortPage.module.scss";
import { UserContext } from "../../layouts/Layout";
import WE from "../../assets/data/WorkExperience.json";

const PortPage = () => {

    const services = WE.services;

    const mapToWorkComponent = (service) => {
        // console.log("mapToWorkComponent : " + JSON.stringify(service));
        return service.map((work, i) => generateOpPrWork(work, i))
    };

    const generateOpPrWork = (work, i) => {
        // console.log("generateOpPrWork : " + work.type + " / " + i);
        if (work.type == "PRJ") {
            return mapPrWork(work, i)
        } else if (work.type == "OPS") {
            return mapOpWork(work, i)
        } else {
            console.log("work.type : " + work.type);
            return null
        }
    };

    const mapOpWork = (work, i) => {
        return (
            <OpPort 
                title = {work.title}
                startDtime = {work.start_dtime}
                endDtime = {work.end_dtime}
                images = {work.details.images}
                role = {work.details.role}
                contribution = {work.details.contribution}
                keyLogs = {work.details.key_logs}
                key = {i}   />
        )
    };

    const mapPrWork = (work, i) => {
        return (
            <PrPort 
                title = {work.title}
                startDtime = {work.start_dtime}
                endDtime = {work.end_dtime}
                images = {work.details.images}
                role = {work.details.role}
                contribution = {work.details.contribution}
                object = {work.details.object}
                outcomes = {work.details.outcomes}
                learned = {work.details.learned}
                key = {i}   />
        )
    }

    return (
        <div className={style.port__box}>
            <div className={style.port__title}>   
                Career
            </div>
            <div className={style.port__contents}>
                {mapToWorkComponent(services)}
            </div>
        </div>
    )
};

export default PortPage;