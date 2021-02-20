import React from "react";
import style from "./SkillTable.module.scss";
import Check from "../../assets/icons/check_icon.png"

const SkillTable = () => {
    return (
        <div className={style.page__box}>
            <div className={style.s_table__title}>
                Skill Table
            </div>
            <div className={style.s_table__contents}>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Skills</th>
                            <th scope="col">BASIC</th>
                            <th scope="col">INTERM</th>
                            <th scope="col">ADV</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Jira / Confluence</th>
                            <td>-</td>
                            <td>-</td>
                            <td><img src={Check} /></td>
                        </tr>
                        <tr>
                            <th scope="row">MS Office</th>
                            <td>-</td>
                            <td>-</td>
                            <td><img src={Check} /></td>
                        </tr>
                        <tr>
                            <th scope="row">SQL / GA</th>
                            <td>-</td>
                            <td><img src={Check} /></td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th scope="row">Java / Spring</th>
                            <td>-</td>
                            <td><img src={Check} /></td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th scope="row">Javascript / React</th>
                            <td>-</td>
                            <td><img src={Check} /></td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th scope="row">RDBMS / NoSQL</th>
                            <td>-</td>
                            <td><img src={Check} /></td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default SkillTable;