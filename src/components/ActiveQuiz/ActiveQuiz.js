import React from "react";
import './ActiveQuiz.css'
import AnswerList from "./AnswerList/AnswerList";

const ActiveQuiz = props => (
    <div className={'ActiveQuiz'}>
        <p className={'question'}>
        <span>
            <strong>2.</strong>&nbsp;
            {props.question}
        </span>
            <small>4 из 12</small>
        </p>
        <AnswerList
            onAnswerClick={props.onAnswerClick}
            answers={props.answers}/>
    </div>
);

export default ActiveQuiz