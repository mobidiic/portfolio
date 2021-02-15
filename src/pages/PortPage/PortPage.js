import React, { useContext } from "react";
import OpPort from "../../components/OpPort/OpPort";
import PrPort from "../../components/PrPort/PrPort";
import style from "./PortPage.module.scss";
import { UserContext } from "../../layouts/Layout";
import WE from "../../assets/data/WorkExperience.json";

const PortPage = () => {

    const lang = useContext(UserContext).lang;
    const services = WE.services;

    const mapToWorkComponent = (service) => {
        console.log("mapToWorkComponent : " + JSON.stringify(service));
        return service.map((work, i) => generateOpPrWork(work, i))
    };

    const generateOpPrWork = (work, i) => {
        console.log("generateOpPrWork : " + work.type + " / " + i);
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
        console.log("mapOpWork : " + work.title[lang] + " / "+ work.start_dtime + " / "+ work.end_dtime + " / "+ work.details.images + " / "+ work.details.role[lang] + " / "+ work.details.description[lang] + " / " + work.details.key_logs[lang] + " / " + i);
        return (
            <OpPort 
                title = {work.title[lang]}
                startDtime = {work.start_dtime}
                endDtime = {work.end_dtime}
                images = {work.details.images}
                role = {work.details.role[lang]}
                description = {work.details.description[lang]}
                keyLogs = {work.details.key_logs[lang]}
                key = {i}   />
        )
    };

    const mapPrWork = (work, i) => {
        console.log("mapPrWork : " + work.title[lang] + " / "+ work.start_dtime + " / "+ work.end_dtime + " / "+ work.details.images + " / "+ work.details.role[lang] + " / "+ work.details.object[lang] + " / " + work.details.outcomes[lang] + " / " + work.details.learned[lang] + " / "  + i);
        return (
            <PrPort 
                title = {work.title[lang]}
                startDtime = {work.start_dtime}
                endDtime = {work.end_dtime}
                images = {work.details.images}
                role = {work.details.role[lang]}
                object = {work.details.object[lang]}
                outcomes = {work.details.outcomes[lang]}
                learned = {work.details.learned[lang]}
                key = {i}   />
        )
    }

    return (
        <div className={style.page__box}>
            <div className={style.page__title}>   
                PortPage
            </div>
            <div className={style.page__contents}>
                {mapToWorkComponent(services)}
            </div>
        </div>
    )
};

export default PortPage;

/*
const links = sites.links;

const mapToLinkButton = ( data ) => {
    return data.map((site, i) => {
        return (<LinkButton 
            title = {site.title} 
            comment = {site.comment}
            link = {site.link}
            icoName = {site.icoName}
            key = {i} />)
    })
};

const SiteList = () => {
    return (
        <div className={style.siteList__box}>
            {mapToLinkButton(links)}
        </div>
    )
};
*/