import React, {Component} from 'react';
import CategorieForm from "./CategorieForm";
import QuestionnaireForm from "./QuestionnaireForm";
import {IoMdAddCircle, RiDeleteBack2Fill} from "react-icons/all";

class Question extends Component {

    constructor(props) {
        super(props)
        this.state = {
            choice: "",
            choices: [],
        };
    }

    addChoiceHandle = (event) => {
        event.preventDefault();
        const {choice} = this.state;

        if (choice && choice !== "") {

            const state = {...this.state};
            state.choices.push(choice);
            state.choice = "";
            this.setState(state);
        }
    }

    choiceChangeHandle = (event) => {
        event.preventDefault();
        const choice = event.target.value;
        const state = {...this.state};
        state.choice = choice;
        this.setState(state);
    }

    deleteChoice = (index) => {
        const state = {...this.state};
        state.choices.splice(index, 1);
        this.setState(state);
    }

    questionSubmit = (event) => {
        event.preventDefault();
        const categorie = event.target.categorie.value;
        const questionnaire = event.target.questionnaire.value;
        const titre = event.target.titre.value;
        const question = event.target.question.value;
        const image = event.target.image.value;
        const reponses = this.state.choices;


        const {accounts} = this.props;
        console.log(accounts);
        if (accounts && accounts.length > 0) {

            // Exécution d'une requete sur le Contract Solidity
            this.props.contract.methods.addQuestions(categorie, questionnaire, titre, question, image, reponses).send({from: accounts[0]}).then((result) => {

                console.log("addQuestion : ", result);

            }).catch((error) => {
                console.error(error);
            });
        }
    }

    renderChoices = () => {
        return this.state.choices.map((choice, index) => {
            return (
                <div className={"col-auto"} key={index}>
                    <button className={"btn btn-outline-dark disabled m-1"} disabled>
                        {choice}
                    </button>
                    <button className={"btn btn-outline-danger m-1"} onClick={() => {
                        this.deleteChoice(index)
                    }}>
                        <RiDeleteBack2Fill/>
                    </button>
                </div>
            );
        });
    }

    render() {
        const {categories, categorieChange, questionnaires} = this.props;

        return (
            <div className={"container-fluid m-2"}>
                <h2 className={"text-start border-top"}>Question</h2>
                <form name={"questionForm"} onSubmit={this.questionSubmit}>

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


                    <div className={"row p-0"}>
                        <label className={"col-4 form-label text-start"}>Ajouter choix de reponse</label>
                        <div className={"col-8"}>

                            <div className="input-group">
                                <input
                                    type="text"
                                    name={"newChoice"}
                                    className="form-control"
                                    value={this.state.choice}
                                    onChange={this.choiceChangeHandle}
                                />

                                <button
                                    className="btn btn-outline-primary"
                                    type="button"
                                    onClick={this.addChoiceHandle}
                                    disabled={this.props.isConnected ? "" : "disabled"}
                                >
                                    <IoMdAddCircle size={24}/>
                                </button>
                            </div>

                        </div>
                    </div>

                    <div className={"row"}>
                        {this.renderChoices()}
                    </div>

                    <div className={"text-end"}>
                        <input className={"btn btn-primary"} type={"submit"} disabled={this.props.isConnected ? "" : "disabled"}/>
                    </div>

                </form>

            </div>
        );
    }
};

export default Question;
