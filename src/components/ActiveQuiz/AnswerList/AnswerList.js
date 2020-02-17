import React from "react";
import './AnswerList.css'
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswerList = props => (
    <ul className={'AnswerList'}>
        {props.answers.map((answers, index) => {
            return (
                <AnswerItem
                    onAnswerClick={props.onAnswerClick}
                    key={index}
                    answer={answers}
                    state={props.state ? props.state[answers.id]: null}
                />
            )
        })}
    </ul>
);

export default AnswerList