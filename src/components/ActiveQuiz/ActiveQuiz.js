import React from "react";
import './ActiveQuiz.css'

const ActiveQuiz = props => (
    <div className={'ActiveQuiz'}>
        <p className={'question'}>
        <span>
            <strong>2.</strong>&nbsp;
            Первый вопрос
        </span>
            <small>4 из 12</small>
        </p>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </div>
);

export default ActiveQuiz