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
            setOnScrollEvent(handleOnScrollOpened);
        } else {
            removeOnScrollEvent(handleOnScrollOpened);
        }
    };

    const handleOnScrollOpened = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        return false
    }, []);

    const handleOnScrollClosed = () => {
        //progress bar
        let _scrollY = document.body.scrollTop;
        let _totalHeight = (document.height !== undefined) ? document.height : document.body.scrollHeight;
        let _deviceHeight = window.innerHeight;
        let _tgtHeight = _totalHeight - _deviceHeight;
        let _pgbarWidth = ( _scrollY / _tgtHeight ) * 100;
        _pgbarWidth += "%";
        setPgbarWidth(_pgbarWidth);
    };

    const setOnScrollEvent = (func) => {
        window.addEventListener('touchmove', func);
        window.addEventListener('mousewheel', func);
        window.addEventListener('scroll', func);
    };

    const removeOnScrollEvent = (func) => {
        window.removeEventListener('scroll', func);
        window.removeEventListener('touchmove', func);
        window.removeEventListener('mousewheel', func);
    };

    useEffect(()=> {
        setOnScrollEvent(handleOnScrollClosed);

        return () => removeOnScrollEvent(handleOnScrollClosed);
    });

    return (
        <div id="layout__body" >
            <div className={ !isOpened ?  style.header__box : `${style.header__box} ${style.header__box__onlayer}` } >
                <div className={style.header__menu} onClick={ handleToggleLayer } >
                    <span />
                    <span />
                    <span />
                </div>
                <div className={style.header__title}>
                    CEAN's PF
                </div>
                <div className={style.header__button}>
                    <button onClick={ handleLanguage }> {viewLang} </button>
                </div>
            </div>
            <div className={ !isOpened ?  style.body__box : `${style.body__box} ${style.body__box__onlayer}` }>
                <div className={ !isOpened ? `${style.body__layer} ${style.none}` : style.body__layer  } >
                    <CateLayer />
                </div>
                <UserContext.Provider value={{ lang }}>
                    <TitlePage />
                    <IntroPage />
                    <SkillTable />
                    <PortPage />
                </UserContext.Provider>
            </div>
            <div className={ !isOpened ?  style.footer__progressbar : `${style.footer__progressbar} ${style.footer__progressbar__onlayer}` } style={{ width : pgbarWidth}} />
        </div>
    )
};

export default Layout;