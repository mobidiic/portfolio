import React, { useCallback, useEffect, useState } from "react";
import TitlePage from "../pages/TitlePage/TitlePage";
import IntroPage from "../pages/IntroPage/IntroPage";
import SkillTable from "../pages/SkillTable/SkillTable";
import PortPage from "../pages/PortPage/PortPage";
import DsPage from "../pages/DsPage/DsPage";
import CateLayer from "../components/CateLayer/CateLayer"
import style from "./Layout.module.scss";

export const UserContext = React.createContext();

const Layout = () => {

    const [ lang, setLang ] = useState("EN");
    const [ isOpened , setIsOpened ] = useState(false);
    const [ pgbarWidth, setPgbarWidth ] = useState(0);
    const viewLang = lang == "EN" ? "KR" : "EN" ;

    const handleLanguage = () => {
        if(lang == "EN"){
            setLang("KR");
        } else {
            setLang("EN");
        }
    };

    const handleToggleLayer = () => {
        setIsOpened(!isOpened);
        if( !isOpened ) {
            setOnScrollEventById("layout__body", handleOnScrollOpened)
        } else {
            removeOnScrollEventById("layout__body", handleOnScrollOpened)
        }
    };

    const handleOnScrollOpened = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        return false
    }, [])

    const handleOnScrollClosed = () => {
        // let _scrollY = window.scrollY;
        let _scrollY = document.body.scrollTop;
        let _totalHeight = (document.height !== undefined) ? document.height : document.body.scrollHeight;
        let _deviceHeight = window.innerHeight;
        let _tgtHeight = _totalHeight - _deviceHeight;
        let _pgbarWidth = ( _scrollY / _tgtHeight ) * 100;
        _pgbarWidth += "%";
        setPgbarWidth(_pgbarWidth);
        // console.log("_scrollY : " +  _scrollY);
        // console.log("_totalHeight : " +  _totalHeight);
        // console.log("_deviceHeight : " +  _deviceHeight);
        // console.log("_tgtHeight : " +  _tgtHeight);
        // console.log("_pgbarWidth : " +  _pgbarWidth);
    };

    const setOnScrollEventById = (el, func) => {
        document.getElementById(el).addEventListener('scroll', func);
        document.getElementById(el).addEventListener('touchmove', func);
        document.getElementById(el).addEventListener('mousewheel', func);
    };

    const removeOnScrollEventById = (el, func) => {
        document.getElementById(el).removeEventListener('scroll', func);
        document.getElementById(el).removeEventListener('touchmove', func);
        document.getElementById(el).removeEventListener('mousewheel', func);
    };

    useEffect(()=> {
        setOnScrollEventById("layout__body", handleOnScrollClosed);
    }, []);

    // [todo] header 타이틀 스크롤 위치에 따라 변경

    // [todo] 레이어 닫았을 때 스크롤 위치 유지



    return (
        <div id="layout__body">
            <div className={ !isOpened ?  style.header__box : `${style.header__box} ${style.header__box__onlayer}` } >
                <div className={style.header__menu} onClick={ handleToggleLayer } >
                    <span />
                    <span />
                    <span />
                </div>
                <div className={style.header__title}>
                    header-title
                </div>
                <div className={style.header__button}>
                    <button onClick={ handleLanguage }> {viewLang} </button>
                </div>
            </div>
            <div className={ !isOpened ?  style.body__box : `${style.body__box} ${style.body__box__onlayer}` }>
                <div className={ !isOpened ? `${style.body__layer} ${style.none}` : style.body__layer  }>
                    <CateLayer />
                </div>
                <UserContext.Provider value={{ lang }}>
                    <TitlePage />
                    <IntroPage />
                    <SkillTable />
                    <PortPage />
                    <DsPage />
                </UserContext.Provider>
            </div>
            <div id="" className={ !isOpened ?  style.footer__progressbar : `${style.footer__progressbar} ${style.footer__progressbar__onlayer}` } style={{ width : pgbarWidth}} />
        </div>
    )
};

export default Layout;