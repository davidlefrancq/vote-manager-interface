import React from 'react';

const ResponsesForm = (props) => {
    const {reponses} = props;

    const renderResponseFormOption = (index, reponse) => {
        return (
            <option key={index} value={index}>{reponse}</option>
        );
    }

    const renderResponsesFormOptions = () => {
        return reponses.map((reponse, index) => {
            return renderResponseFormOption(index, reponse);
        });
    }

    const renderResponsesFormSelect = () => {
        if (reponses.length > 0) {
            return (
                <select className="form-select" name={"choice"}>
                    <option></option>
                    {renderResponsesFormOptions()}
                </select>
            );
        } else {
            return (
                <select className="form-select disabled" name={"choice"} disabled>
                    <option></option>
                </select>
            );
        }
    }

    return renderResponsesFormSelect();
};

export default ResponsesForm;
