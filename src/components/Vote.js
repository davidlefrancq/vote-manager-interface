import React, {Component} from 'react';
import Web3 from "web3";
import jsonInterface from "./jsonInterface.json";
import Questionnaire from "./render-components/Questionnaire";
import Question from "./render-components/Question";
import Categorie from "./render-components/Categorie";
import Categories from "./render-components/Categories";
import Voter from "./render-components/Voter";
import Web3Connexion from "./render-components/Web3Connexion";
import QuestionnaireBo from "../bo/QuestionnaireBo";
import QuestionBo from "../bo/QuestionBo";

const addressContract = "0x36d812d504a74b4caf5ec80b9c9a753417a42164";

class Vote extends Component {

    /**
     * Ethereum Object
     */
    ethereum;

    /**
     * Instance Contract Solidity
     */
    contract;

    /**
     * Constructeur
     * @param props
     */
    constructor(props) {
        super(props);

        this.state = {
            isConnected: false,
            accounts: null,

            categories: [],
            questionnaires: [],
            questions: [],
            reponses: [],
        };
    }

    componentDidMount() {
        this.ethereum = window.ethereum;
    }

    loadContract = () => {

        const web3 = new Web3(Web3.givenProvider);
        this.contract = new web3.eth.Contract(
            jsonInterface,
            addressContract
        );

        if (this.contract) {
            this.loadCategories();
        }
    }

    loadCategories = () => {
        if (this.contract) {

            // Si Web3 est connecté
            const {accounts} = this.state;
            if (accounts.length > 0) {

                // Exécution d'une requete sur le Contract Solidity
                this.contract.methods.getCountCategorie().call({from: accounts[0]}).then((count) => {

                    this.loadCategoriesData(count);

                }).catch((error) => {
                    console.error(error);
                })
            }
        }
    }

    loadCategoriesData = (count) => {

        this.resetCategoriesInState();

        for (let i = 0; i < count; i++) {
            this.loadCategoryData(i);
        }
    }

    loadCategoryData = (index) => {

        const {accounts} = this.state;
        if (accounts.length > 0) {

            this.contract.methods.getCategorieData(index).call({from: accounts[0]}).then((data) => {

                const {index, name} = data;
                this.addCategorieInState(index, name);

            }).catch((error) => {
                console.error(error);
            });
        }
    }

    addCategorieInState = (index, name) => {
        const state = {...this.state};
        state.categories[index] = name;
        this.setState(state);
    }

    resetCategoriesInState = () => {
        const state = {...this.state};
        state.categories = [];
        this.setState(state);
    }

    loadQuestionnaires = async (categorie) => {
        const questionnaires = [];
        const {accounts} = this.state;
        if (accounts.length > 0) {

            // Exécution d'une requete sur le Contract Solidity
            const count = await this.contract.methods.getCountQuestionnaire(categorie).call({from: accounts[0]})

            for (let i = 0; i < count; i++) {
                const questionnaire = await this.loadQuestionnaire(categorie, i);
                questionnaires.push(questionnaire);
            }
        }
        return questionnaires;
    }

    loadQuestionnaire = async (categorie, index) => {
        const {accounts} = this.state;
        if (accounts.length > 0) {

            // Exécution d'une requete sur le Contract Solidity
            const data = await this.contract.methods.getQuestionnaireData(categorie, index).call({from: accounts[0]})

            // console.log("Questionnaire : ", data);
            const questionnaire = new QuestionnaireBo(data["index"], data["indexCategorie"], data["name"], data["questions"]);
            // console.log(questionnaire);
            return questionnaire;
        }
    }

    loadQuestions = async (categorie, questionnaire) => {
        const questions = [];
        const {accounts} = this.state;
        if (accounts.length > 0) {

            // Exécution d'une requete sur le Contract Solidity
            const count = await this.contract.methods.getCountQuestions(categorie, questionnaire).call({from: accounts[0]})
            console.log("getCountQuestions", count);
            for (let i = 0; i < count; i++) {
                const question = await this.loadQuestion(categorie, questionnaire, i);
                questions.push(question);
            }
        }
        return questions;
    }

    loadQuestion = async (categorie, questionnaire, index) => {
        const {accounts} = this.state;
        if (accounts.length > 0) {

            // Exécution d'une requete sur le Contract Solidity
            const data = await this.contract.methods.getQuestionData(categorie, questionnaire, index).call({from: accounts[0]})

            console.log("Questionnaire : ", data);
            const question = new QuestionBo(null, data["indexCategorie"], data["indexQuestionnaire"], data["titre"], data["question"], data["image"], data["reponses"]);
            return question;
        }
    }

    /**
     * Initialisation du "Circle Life" de notre connexion Web3JS
     */
    initEthereumEvents = () => {
        this.ethereum.on('accountsChanged', (accounts) => {
            // console.log("accountsChanged accounts", accounts, this.ethereum.isConnected());
            if (this.ethereum.isConnected()) {
                this.connectToWeb3();
            }
        });
        this.ethereum.on('disconnect', (accounts) => {
            // console.log("disconnect accounts", accounts);
            this.disconnectedWeb3();
        });
    }

    /**
     * Deconnexion
     */
    disconnectedWeb3 = () => {
        const state = {...this.state};
        state.isConnected = false;
        state.accounts = [];
        this.setState(state);
    }

    /**
     * Connexion Web3JS
     */
    connectToWeb3 = () => {
        this.ethereum.request({method: 'eth_requestAccounts'}).then((result) => {

            const state = {...this.state};
            state.isConnected = true;
            state.accounts = result;
            this.setState(state);

            this.initEthereumEvents();
            this.loadContract();

        }).catch((error) => {
            console.error(error);
        });
    }

    getCategorieIndexByName = (name) => {

        // Si Web3 est connecté
        const {accounts} = this.state;
        if (accounts.length > 0) {

            // Exécution d'une requete sur le Contract Solidity
            this.contract.methods.getCategorieIndexByName(name).call({from: accounts[0]}).then((result) => {

                console.log(result);
                this.addCategorieInState(result);

            }).catch((error) => {
                console.error(error);
            });
        }
    }

    createCategorie = (name) => {

        // Si Web3 est connecté
        const {accounts} = this.state;
        if (accounts.length > 0) {

            // Exécution d'une requete sur le Contract Solidity
            this.contract.methods.createCategorie(name).send({from: accounts[0]}).then((result) => {

                this.loadCategories();

            }).catch((error) => {
                console.error(error);
            });
        }
    }

    submitCategorie = (event) => {
        event.preventDefault();
        const categorie = event.target.categorie.value;
        this.createCategorie(categorie);
    }


    questionnaireSubmit = (event) => {
        event.preventDefault();
        const name = event.target.nameQuestonnaire.value;
        const indexCat = event.target.indexCategorie.value;

        const {accounts} = this.state;
        if (accounts.length > 0) {

            // addQuestionnaire(uint _categorie, string memory _name)
            // Exécution d'une requete sur le Contract Solidity
            this.contract.methods.addQuestionnaire(indexCat, name).send({from: accounts[0]}).then((result) => {

                console.log(result);

            }).catch((error) => {
                console.error(error);
            });
        }

    }

    voteSubmit = (event) => {
        event.preventDefault();
        const categorie = event.target.categorie.value;
        const questionnaire = event.target.questionnaire.value;
        const question = event.target.question.value;
        const choice = event.target.choice.value;

        const {accounts} = this.state;
        if (accounts.length > 0) {

            //addVoteToQuestion(uint _categorie, uint _questionnaire, uint _question, uint _choice) public returns (bool)
            // Exécution d'une requete sur le Contract Solidity
            this.contract.methods.addVoteToQuestion(categorie, questionnaire, question, choice).send({from: accounts[0]}).then((result) => {

                console.log(result);

            }).catch((error) => {
                console.error(error);
            });
        }
    }

    categorieChange = async (event) => {
        event.preventDefault();
        const categorie = event.target.value;
        const questionnaires = await this.loadQuestionnaires(categorie);
        const state = {...this.state};
        state.questionnaires = questionnaires;
        this.setState(state);
    }

    getQuestionnaireInState = (index) => {
        let questionnaire = null;

        for (const key in this.state.questionnaires) {
            const item = this.state.questionnaires[key];
            if (item.index === index) {
                questionnaire = item;
            }
        }

        return questionnaire;
    }

    questionnaireChange = async (event) => {
        event.preventDefault();
        const questionnaire = this.getQuestionnaireInState(event.target.value);
        const questions = await this.loadQuestions(questionnaire.indexCategorie, questionnaire.index);
        console.log("questions", questions);
        const state = {...this.state};
        state.questions = questions;
        this.setState(state);
    }

    questionChange = (event) => {
        event.preventDefault();
        const index = event.target.value;
        const question = this.state.questions[index];
        console.log(question);
        const state = {...this.state};
        state.reponses = question.reponses;
        this.setState(state);
    }


    /**
     * Fonction de rendu appelé par defaut pas React
     * @returns {JSX.Element}
     */
    render() {

        console.log("categories : ", this.state.categories);

        return (
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-12"}>
                        <Web3Connexion
                            isConnected={this.state.isConnected}
                            accounts={this.state.accounts}
                            connectToWeb3={this.connectToWeb3}
                        />
                    </div>

                    <div className={"col-6"}>

                        <Categorie
                            submitCategorie={this.submitCategorie}
                            isConnected={this.state.isConnected}
                        />

                        <Categories categories={this.state.categories}/>

                    </div>

                    <div className={"col-6"}>

                        <Questionnaire
                            questionnaireSubmit={this.questionnaireSubmit}
                            categories={this.state.categories}
                            isConnected={this.state.isConnected}
                        />

                        <Question
                            questionSubmit={this.questionSubmit}
                            categories={this.state.categories}
                            categorieChange={this.categorieChange}
                            questionnaires={this.state.questionnaires}
                            isConnected={this.state.isConnected}
                            accounts={this.state.accounts}
                            contract={this.contract}
                        />

                        <Voter
                            voteSubmit={this.voteSubmit}
                            categories={this.state.categories}
                            categorieChange={this.categorieChange}
                            questionnaires={this.state.questionnaires}
                            questionnaireChange={this.questionnaireChange}
                            questions={this.state.questions}
                            questionChange={this.questionChange}
                            reponses={this.state.reponses}
                            isConnected={this.state.isConnected}
                        />

                    </div>

                </div>
            </div>
        );
    }

}

export default Vote;
