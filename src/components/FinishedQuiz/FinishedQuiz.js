import React from "react";
import './FinishedQuiz.css'

const FinishedQuiz = props => {
    return (
        <div className={'FinishedQuiz'}>
            <h1>Опрос завершен</h1>
            <ul>
                <li>
                    <strong>1.</strong>
                    Название вопроса
                    <i className={'fa fa-check'}></i>
                </li>
                 <li>
                    <strong>1.</strong>
                    Название вопроса
                    <i className={'fa fa-times'}></i>
                </li>
            </ul>

            <p>Правильно 4 из 10</p>

            <div>
                <button>Повторить</button>
            </div>
        </div>
    )
};

export default FinishedQuiz