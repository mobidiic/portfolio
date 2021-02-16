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
    const viewLang = lang == "EN" ? "KR" : "EN" ;
    let pgbarWidth = 0;

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
        let _scrollY = window.scrollY;
        let _totalHeight = (document.height !== undefined) ? document.height : document.body.offsetHeight;
        let _deviceHeight = window.innerHeight;
        let _tgtHeight = _totalHeight - _deviceHeight;
        pgbarWidth = ( _scrollY / _tgtHeight ) * 100;
        pgbarWidth += "%";
        console.log("pgbarWidth : " +  pgbarWidth);
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

    // [todo] 카테고리레이어 호출 시 햄버거메뉴 닫기버튼으로 전환 + 애니메이션 추가

    // [todo] header 타이틀 스크롤 위치에 따라 변경


    // [todo] footer 프로그레스바 스크롤 위치에 따라 width 변경
    // -> 변수세팅은 완료, 변수가 useEffect 에 들어가야 함.


    return (
        <div id="layout__body">
            <div className={ !isOpened ?  style.header__box : `${style.header__box} ${style.header__box__onlayer}` } >
                <div className={ !isOpened ?  style.header__menu : style.layer__button_close } >
                    <a onClick={ handleToggleLayer }>
                        ham
                    </a>
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
            <div className={ !isOpened ?  style.footer__progressbar : `${style.footer__progressbar} ${style.footer__progressbar__onlayer}` } style={{ width: pgbarWidth}} />
        </div>
    )
};

export default Layout;