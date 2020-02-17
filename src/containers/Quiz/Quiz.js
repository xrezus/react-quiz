import React from "react";
import './Quiz.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends React.Component {
    state = {
        activeQuestion: 0,
        quiz: [
            {
                id: 1,
                question: 'Какого цвета небо?',
                rightAnswerId: 2,
                answers: [
                    {text: 'Черный', id: 1},
                    {text: 'Синий', id: 2},
                    {text: 'Красный', id: 3},
                    {text: 'Зеленый', id: 4}
                ]
            },
            {
                id: 2,
                question: 'Дата основания г. Москва?',
                rightAnswerId: 3,
                answers: [
                    {text: '1151', id: 1},
                    {text: '1150', id: 2},
                    {text: '1147', id: 3},
                    {text: '1145', id: 4}
                ]
            }
        ]
    };

    onAnswerClickHandler = (answerId) => {
        console.log(answerId);

        this.setState({
            activeQuestion: this.state.activeQuestion +1
        })
    };

    render() {
        return (
            <div className={'quiz'}>
                <div className={'quiz_wrapper'}>
                    <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion+1}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz