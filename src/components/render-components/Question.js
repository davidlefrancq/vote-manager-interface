import React from 'react';
import CategorieForm from "./CategorieForm";
import QuestionnaireForm from "./QuestionnaireForm";

const Question = (props) => {

    const {questionSubmit, categories, categorieChange, questionnaires} = props;

    return (
        <div className={"container-fluid m-2"}>
            <h2 className={"text-start border-top"}>Question</h2>
            <form onSubmit={questionSubmit}>

                <div className={"row p-0"}>
                    <label className={"col-4 form-label text-start"}>Catégorie</label>
                    <div className={"col-8"}>
                        <CategorieForm categories={categories} categorieChange={categorieChange}/>
                    </div>
                </div>

                <div className={"row p-0"}>
                    <label className={"col-4 form-label text-start"}>Questionnaire</label>
                    <div className={"col-8"}>
                        <QuestionnaireForm questionnaires={questionnaires}/>
                    </div>
                </div>

                <div className={"row p-0"}>
                    <label className={"col-4 form-label text-start"}>Titre</label>
                    <div className={"col-8"}>
                        <input className={"col-8 form-control"} name={"titre"}/>
                    </div>
                </div>

                <div className={"row p-0"}>
                    <label className={"col-4 form-label text-start"}>Question</label>
                    <div className={"col-8"}>
                        <input className={"col-8 form-control"} name={"question"}/>
                    </div>
                </div>

                <div className={"row p-0"}>
                    <label className={"col-4 form-label text-start"}>Image</label>
                    <div className={"col-8"}>
                        <input className={"col-8 form-control"} name={"image"}/>
                    </div>
                </div>

                <div className={"text-end mt-2"}>
                    <input className={"btn btn-primary"} type={"submit"}/>
                </div>

            </form>

            <form>
                {/* !!! TODO !!! */}
                <div className={"text-start text-success fw-bold"}>TODO : Add Choice</div>
                <div className={"row mt-4 p-0"}>
                    <label className={"col-4 form-label text-start"}>Ajouter choix de reponse</label>
                    <div className={"col-8"}>
                        <input className={"col-8 form-control disabled"} name={"choix"} disabled/>
                    </div>
                </div>

                <div className={"text-end mt-2"}>
                    <input className={"btn btn-primary disabled"} type={"submit"} disabled/>
                </div>
            </form>

        </div>
    );
};

export default Question;
