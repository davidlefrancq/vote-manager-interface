import React from 'react';

const QuestionnaireForm = (props) => {

    const {questionnaires, questionnaireChange} = props;

    const renderQuestionnaireFormOption = (index, questionnaire) => {
        return (
            <option key={index} value={questionnaire.index}>{questionnaire.name}</option>
        );
    }

    const renderQuestionnairesFormOptions = () => {
        return questionnaires.map((questionnaire, index) => {
            return renderQuestionnaireFormOption(index, questionnaire);
        });
    }

    const renderQuestionnairesFormSelect = () => {
        if (questionnaires.length > 0) {
            return (
                <select className="form-select" name={"questionnaire"} onChange={questionnaireChange}>
                    <option></option>
                    {renderQuestionnairesFormOptions()}
                </select>
            );
        } else {
            return (
                <select className="form-select disabled" name={"questionnaire"} disabled>
                    <option></option>
                </select>
            );
        }
    }

    return renderQuestionnairesFormSelect();
};

export default QuestionnaireForm;
