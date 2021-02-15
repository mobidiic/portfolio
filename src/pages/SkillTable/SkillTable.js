import React from "react";
import style from "./SkillTable.module.scss";

const SkillTable = () => {
    return (
        <div className={style.page__box}>
            <div className={style.page__title}>
                SkillTable-title
            </div>
            <div className={style.page__contents}>
                <table>
                    <thead>
                        <tr>
                        <th scope="col">Skills</th>
                        <th scope="col">Basic</th>
                        <th scope="col">Intermediate</th>
                        <th scope="col">Advanced</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Jira / Confluence</th>
                            <td>-</td>
                            <td>-</td>
                            <td>Check</td>
                        </tr>
                        <tr>
                            <th scope="row">MS Office</th>
                            <td>-</td>
                            <td>Check</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th scope="row">SQL / GA</th>
                            <td>-</td>
                            <td>Check</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th scope="row">Java / Spring</th>
                            <td>-</td>
                            <td>Check</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th scope="row">Javascript / React</th>
                            <td>-</td>
                            <td>Check</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th scope="row">RDBMS / NoSQL</th>
                            <td>-</td>
                            <td>Check</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default SkillTable;