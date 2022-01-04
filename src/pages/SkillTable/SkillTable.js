import React from "react";
import style from "./SkillTable.module.scss";
import BarScale from "../../components/modules/BarScale/BarScale";


const SkillTable = () => {

    const totalScore = 5;

    return (
        <div className={style.s_table__box}>
            <div className={style.s_table__title}>
                Skill Table
            </div>
            <div className={style.s_table__contents}>
                <table>
                    <caption>- Managing</caption>
                    <thead>
                        <tr>
                            <th scope="col">Skills</th>
                            <th scope="col">Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">
                                Documents<br/>
                                <span>Jira, Confluence</span>
                            </th>
                            <td>
                                <BarScale score={4} totalScore={totalScore} />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Cloud<br/>
                                <span>AWS</span>
                            </th>
                            <td>
                                <BarScale score={3} totalScore={totalScore} />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <caption>- Develop</caption>
                    <thead>
                        <tr>
                            <th scope="col">Skills</th>
                            <th scope="col">Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">
                                Front-End<br/>
                                <span>JS, React</span>
                            </th>
                            <td>
                                <BarScale score={2} totalScore={totalScore} />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Back-End<br/>
                                <span>Java, Spring</span>
                            </th>
                            <td>
                                <BarScale score={3} totalScore={totalScore} />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <caption>- Data</caption>
                    <thead>
                        <tr>
                            <th scope="col">Skills</th>
                            <th scope="col">Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">
                                Modeling<br/>
                                <span>RDBMS, NoSQL</span>
                            </th>
                            <td>
                                <BarScale score={3} totalScore={totalScore} />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Extract<br/>
                                <span>SQL, GA</span>
                            </th>
                            <td>
                                <BarScale score={3} totalScore={totalScore} />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Visualizing<br/>
                                <span>D3, Python</span>
                            </th>
                            <td>
                                <BarScale score={2} totalScore={totalScore} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default SkillTable;