import React from 'react';
import CategorieForm from "./CategorieForm";
import QuestionnaireForm from "./QuestionnaireForm";
import QuestionForm from "./QuestionForm";

const Voter = (props) => {

    const {voteSubmit, categories, categorieChange, questionnaires, questionnaireChange, questions} = props;

    return (
        <div className={"container-fluid m-2"}>
            <h2 className={"text-start border-top"}>Voter</h2>
            <form onSubmit={voteSubmit}>

                <div className={"row p-0"}>
                    <label className={"col-4 form-label text-start"}>Catégorie</label>
                    <div className={"col-8"}>
                        <CategorieForm categories={categories} categorieChange={categorieChange}/>
                    </div>
                </div>

                <div className={"row p-0"}>
                    <label className={"col-4 form-label text-start"}>Questionnaire</label>
                    <div className={"col-8"}>
                        {/*<input className={"col-8 form-control"} name={"questionnaire"}/>*/}
                        <QuestionnaireForm questionnaires={questionnaires} questionnaireChange={questionnaireChange}/>
                    </div>
                </div>

                {/* !!! TODO !!! */}
                <div className={"text-start text-success fw-bold"}>TODO : L'index de la question n'est pas fournit.</div>
                <div className={"row p-0"}>
                    <label className={"col-4 form-label text-start"}>Question</label>
                    <div className={"col-8"}>
                        <QuestionForm questions={questions}/>
                    </div>
                </div>

                {/* !!! TODO !!! */}
                <div className={"text-start text-success fw-bold"}>TODO : Liste de choix</div>
                <div className={"row p-0"}>
                    <label className={"col-4 form-label text-start"}>Choice</label>
                    <div className={"col-8"}>
                        <input className={"form-control"} type={"integer"} name={"choice"}/>
                    </div>
                </div>

                <div className={"row p-0"}>
                    <div className={"text-end mt-2"}>
                        <input className={"btn btn-primary"} type={"submit"}/>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Voter;
