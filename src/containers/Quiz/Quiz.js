import React from "react";
import './Quiz.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

class Quiz extends React.Component {
    state = {
        results: {},
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
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
            },
            {
                id: 3,
                question: 'Сколько раз в сутки подзаводят куранты Спасской башни Кремля?',
                rightAnswerId: 2,
                answers: [
                    {text: 'Один', id: 1},
                    {text: 'Два', id: 2},
                    {text: 'Три', id: 3},
                    {text: 'Четыре', id: 4}
                ]
            },
            {
                id: 4,
                question: 'Кто 1-м получил Нобелевскую премию по литературе?',
                rightAnswerId: 3,
                answers: [
                    {text: 'Романист', id: 1},
                    {text: 'Драматург', id: 2},
                    {text: 'Поэт', id: 3},
                    {text: 'Эссеист', id: 4}
                ]
            },
            {
                id: 5,
                question: 'С какой буквы начинаются слова, опубликованные в 16-м томе последнего издания Большой советской энциклопедии?',
                rightAnswerId: 1,
                answers: [
                    {text: 'М', id: 1},
                    {text: 'Н', id: 2},
                    {text: 'О', id: 3},
                    {text: 'П', id: 4}
                ]
            },
            {
                id: 6,
                question: 'Кто из перечисленных был пажом во времена Екатерины II?',
                rightAnswerId: 3,
                answers: [
                    {text: 'Д.И. Фонвизин', id: 1},
                    {text: 'Г.Р. Державин', id: 2},
                    {text: 'А.Н. Радищев', id: 3},
                    {text: 'Н.М. Карамзин', id: 4}
                ]
            },
            {
                id: 7,
                question: 'Какой химический элемент назван в честь злого подземного гнома?',
                rightAnswerId: 2,
                answers: [
                    {text: 'Гафний', id: 1},
                    {text: 'Кобальт', id: 2},
                    {text: 'Бериллий', id: 3},
                    {text: 'Теллур', id: 4}
                ]
            },
            {
                id: 8,
                question: 'Сколько морей омывают Балканский полуостров?',
                rightAnswerId: 4,
                answers: [
                    {text: '3', id: 1},
                    {text: '4', id: 2},
                    {text: '5', id: 3},
                    {text: '6', id: 4}
                ]
            }
        ]
    };

    onAnswerClickHandler = (answerId) => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if (this.state.answerState[key] === 'success') {
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion];

        const results = this.state.results;

        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success';
            }

            this.setState({
                answerState: {[answerId]: 'success'},
                results
            });

            const timeout = window.setTimeout(() => {
                if (this.isQiuzFinished()) {
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 1000)
        } else {
            results[question.id] = 'error';
            this.setState({
                answerState: {[answerId]: 'error'},
                results
            });
        }
    };

    isQiuzFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    retryHandler = () => {
        this.setState({
            results: {},
            isFinished: false,
            activeQuestion: 0,
            answerState: null,
        })
    };

    render() {
        return (
            <div className={'quiz'}>
                <div className={'quiz_wrapper'}>
                    <h1>Ответьте на все вопросы</h1>
                    {
                        this.state.isFinished ?
                            <FinishedQuiz
                                results={this.state.results}
                                quiz={this.state.quiz}
                                onRetry={this.retryHandler}
                            /> :
                            <ActiveQuiz
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                question={this.state.quiz[this.state.activeQuestion].question}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLength={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState}
                            />
                    }
                </div>
            </div>
        )
    }
}

export default Quiz