import React from "react";
import './AnswerItem.css'

const AnswerItem = props => {
    const cls = [];

    if (props.state) {
        cls.push(props.state)
    }

    return (
        <li
            onClick={() => props.onAnswerClick(props.answer.id)}
            className={'AnswerItem'+ ' ' + cls.join(' ')}>
            {props.answer.text}
        </li>
    )
};

export default AnswerItem