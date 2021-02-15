import React, { useState } from "react";
import TitlePage from "../pages/TitlePage/TitlePage";
import IntroPage from "../pages/IntroPage/IntroPage";
import SkillTable from "../pages/SkillTable/SkillTable";
import PortPage from "../pages/PortPage/PortPage";
import CateLayer from "../components/CateLayer"
import style from "./Layout.module.scss";

export const UserContext = React.createContext();

const Layout = () => {

    const [ lang, setLang ] = useState("KR");
    const [ isOpened , setIsOpened ] = useState(false);
    const viewLang = lang == "EN" ? "KR" : "EN" ;
    // console.log("lang : " + lang);
    // console.log("viewLang : " + viewLang);

    const handleLanguage = () => {
        if(lang == "EN"){
            setLang("KR");
        } else {
            setLang("EN");
        }
    };

    // [todo] function => 햄버거 메뉴 누를 때, 햄버거메뉴 불러오기, 애니메이션, 닫기버튼 만들기
    const handleToggleLayer = () => {
        setIsOpened(!isOpened);
        console.log("isOpened : "+ isOpened);
    };

    // [todo] header 타이틀 스크롤 위치에 따라 변경

    // [todo] footer 프로그레스바 생성


    return (
        <div>
            <div className={style.header__box}>
                <div className={ !isOpened ?  style.header__menu : style.layer__button_close }>
                    <a onClick={handleToggleLayer}>
                        ham
                    </a>
                </div>
                <div className={style.header__title}>
                    header-title
                </div>
                <div className={style.header__button}>
                    <button onClick={handleLanguage}> {viewLang} </button>
                </div>
            </div>
            <div className={style.body__box}>
                <div className={ !isOpened ? `${style.body__layer} ${style.none}` : style.body__layer  }>
                    <CateLayer />
                </div>
                <UserContext.Provider value={{ lang }}>
                    <TitlePage />
                    <IntroPage />
                    <SkillTable />
                    <PortPage />
                </UserContext.Provider>
            </div>
            <div className={style.footer__progressbar}>
                    footer
            </div>
        </div>
    )
};

export default Layout;