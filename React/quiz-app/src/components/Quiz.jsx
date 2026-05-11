import React, { useEffect, useRef, useState } from "react";
import "./Quiz.css";
import quizData from "./Questions";

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [time, setTime] = useState(10);

    const timerRef = useRef(null);

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setTime((prev) => {
                if (prev === 1) {
                    nextQuestion();
                    return 10;
                }

                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timerRef.current);
    }, [currentQuestion]);

    const handleAnswer = (option) => {
        if (option === quizData[currentQuestion]?.answer) {
            setScore((prev) => prev + 1);
        }

        nextQuestion();
    };

    const nextQuestion = () => {
        clearInterval(timerRef.current);

        if (currentQuestion + 1 < quizData.length) {
            setCurrentQuestion((prev) => prev + 1);
            setTime(10);
        } else {
            setShowResult(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
        setTime(10);
    };

    return (
        <div className="container">
            <div className="quiz-box">
                <h1>Quiz App</h1>

                {showResult ? (
                    <div className="result">
                        <h2>Your Score</h2>

                        <p>
                            {score} / {quizData.length}
                        </p>

                        <button onClick={restartQuiz}>Restart</button>
                    </div>
                ) : (
                    <>
                        <div className="top">
                            <h3>
                                Question {currentQuestion + 1} / {quizData.length}
                            </h3>

                            <span>⏰ {time}s</span>
                        </div>

                        <h2>{quizData[currentQuestion]?.question}</h2>

                        <div className="options">
                            {quizData[currentQuestion]?.options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleAnswer(option)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Quiz;