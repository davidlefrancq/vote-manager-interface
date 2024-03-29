import React from 'react';
import CategorieForm from "./CategorieForm";

const Questionnaire = (props) => {

    const {questionnaireSubmit, categories, isConnected} = props;

    const sumbitHandle = (event) => {
        event.preventDefault();
        questionnaireSubmit(event).then(()=>{
            event.target.reset();
        }).catch(()=>{

        });
    }

    return (
        <div className={"container-fluid m-2"}>
            <h2 className={"text-start"}>Questionnaire</h2>

            <form onSubmit={sumbitHandle}>
                <div className={"row"}>

                    <div className={"row p-0"}>
                        <label className={"col-4 form-label ps-4 text-start"}>Catégorie</label>
                        <div className={"col-8 ps-4 pe-0"}>

                            <CategorieForm categories={categories}/>

                        </div>
                    </div>

                    <label className={"col-4 form-label text-start"}>Nom du questionnaire</label>
                    <div className={"col-8"}>
                        <input className={"form-control"} name={"nameQuestonnaire"}/>
                    </div>

                </div>

                <div className={"text-end mt-2"}>
                    <input className={"btn btn-primary"} type={"submit"} disabled={isConnected ? "" : "disabled"}/>
                </div>
            </form>

        </div>
    );
};

export default Questionnaire;
