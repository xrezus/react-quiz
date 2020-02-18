import React from "react";
import './FinishedQuiz.css'
import Button from "../UI/Button/Button";

const FinishedQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }

        return total;
    }, 0);

    return (
        <div className={'FinishedQuiz'}>
            <h1>Опрос завершен</h1>
            <ul>
                {
                    props.quiz.map((quizItem, index) => {
                        const cls = [
                            'fa',
                            props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        ];

                        return (
                            <li key={index}>
                                <strong>{index + 1}.</strong>&nbsp;
                                {quizItem.question}
                                <i className={cls.join(' ')}></i>
                            </li>
                        )
                    })
                }
            </ul>

            <p>Правильно {successCount} из {props.quiz.length}</p>

            <div>
                <Button onClick={props.onRetry} type={'primary'}>Повторить</Button>
            </div>
        </div>
    )
};

export default FinishedQuiz