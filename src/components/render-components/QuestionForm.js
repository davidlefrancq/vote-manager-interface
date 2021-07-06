import React from 'react';

const QuestionForm = (props) => {

    const {questions} = props;

    const renderQuestionnaireFormOption = (index, question) => {
        return (
            <option key={index} value={question.index}>{question.question}</option>
        );
    }

    const renderQuestionnairesFormOptions = () => {
        return questions.map((question, index) => {
            return renderQuestionnaireFormOption(index, question);
        });
    }

    const renderQuestionnairesFormSelect = () => {
        if (questions.length > 0) {
            return (
                <select className="form-select" name={"question"}>
                    <option></option>
                    {renderQuestionnairesFormOptions()}
                </select>
            );
        } else {
            return (
                <select className="form-select disabled" name={"question"} disabled>
                    <option></option>
                </select>
            );
        }
    }

    return renderQuestionnairesFormSelect();
};

export default QuestionForm;
