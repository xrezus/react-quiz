import React from "react";
import './ActiveQuiz.css'
import AnswerList from "./AnswerList/AnswerList";

const ActiveQuiz = props => (
    <div className={'ActiveQuiz'}>
        <p className={'question'}>
        <span>
            <strong>{props.answerNumber}.</strong>&nbsp;
            {props.question}
        </span>
            <small>{props.answerNumber} из {props.quizLength}</small>
        </p>
        <AnswerList
            onAnswerClick={props.onAnswerClick}
            answers={props.answers}/>
    </div>
);

export default ActiveQuiz