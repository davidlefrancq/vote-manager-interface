import React, {Component} from 'react';
import Web3 from "web3";
import jsonInterface from "./jsonInterface.json";
import StringUtils from "../utils/StringUtils";

const addressContract = "0x2AEf0329f6d9ce5d4a8fBb94280056B1A169a574";

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
            isConnected: {
                web3: false,
                web3Account: null,
            },

            countCategorie: 0,
            categories: [],
        };

        this.ethereum = window.ethereum;
    }

    setStateCountCategorie = (count) => {
        const state = {...this.state};
        state.countCategorie = count;
        this.setState(state);
    }

    /**
     * Initialisation du "Circle Life" de notre connexion Web3JS
     */
    initEthereumEvents = () => {
        this.ethereum.on('accountsChanged', (accounts) => {
            console.log("accountsChanged accounts", accounts, this.ethereum.isConnected());
            if (this.ethereum.isConnected()) {
                this.connectToWeb3();
            }
        });
        this.ethereum.on('disconnect', (accounts) => {
            console.log("disconnect accounts", accounts);
            this.disconnectedWeb3();
        });
    }

    initContract = () => {

        // Chargement du contract
        const web3 = new Web3(Web3.givenProvider);
        const myContract = new web3.eth.Contract(
            jsonInterface,
            addressContract
        );

        // Sauvegarde dans une variable local du composant React
        this.contract = myContract;
        this.initCategories();
    }

    initCategories = () => {
        this.getCountCategorie();
    }

    /**
     * Deconnexion
     */
    disconnectedWeb3 = () => {
        const state = {...this.state};
        state.isConnected.web3 = false;
        state.isConnected.web3Account = null;
        this.setState(state);
    }

    /**
     * Connexion Web3JS
     */
    connectToWeb3 = () => {
        this.ethereum.request({method: 'eth_requestAccounts'}).then((result) => {

            const state = {...this.state};
            state.isConnected.web3 = true;
            state.isConnected.web3Account = result;
            this.setState(state);

            this.initEthereumEvents();
            this.initContract();

        }).catch((error) => {
            console.error(error);
        });
    }

    getCategorieData = (index) => {

        // Si Web3 est connecté
        const {web3Account} = this.state.isConnected;
        if (web3Account.length > 0) {

            // Exécution d'une requete sur le Contract Solidity
            this.contract.methods.getCategorieData(index).call({from: web3Account[0]}).then((result) => {

                console.log(result);
                const {index, name} = result;
                this.addCategorieInState(name);

            }).catch((error) => {
                console.error(error);
            });
        }
    }

    resetCategories = () => {
        const state = {...this.state};
        state.categories = [];
        this.setState(state);
    }

    getCountCategorie = () => {

        this.resetCategories();

        // Si Web3 est connecté
        const {web3Account} = this.state.isConnected;
        if (web3Account.length > 0) {

            // Exécution d'une requete sur le Contract Solidity
            this.contract.methods.getCountCategorie().call({from: web3Account[0]}).then((result) => {

                console.log(result);
                this.setStateCountCategorie(result);

                for (let i = 0; i < result; i++) {
                    this.getCategorieData(i);
                }

            }).catch((error) => {
                console.error(error);
            });
        }
    }

    addCategorieInState = (categorie) => {
        const state = {...this.state};
        state.categories.push(categorie);
        this.setState(state);
    }

    getCategorieIndexByName = (name) => {

        // Si Web3 est connecté
        const {web3Account} = this.state.isConnected;
        if (web3Account.length > 0) {

            // Exécution d'une requete sur le Contract Solidity
            this.contract.methods.getCategorieIndexByName(name).call({from: web3Account[0]}).then((result) => {

                console.log(result);
                this.addCategorieInState(result);

            }).catch((error) => {
                console.error(error);
            });
        }
    }


    createCategorie = (name) => {

        // Si Web3 est connecté
        const {web3Account} = this.state.isConnected;
        if (web3Account.length > 0) {

            // Exécution d'une requete sur le Contract Solidity
            this.contract.methods.createCategorie(name).send({from: web3Account[0]}).then((result) => {

                console.log(result);
                this.initCategories();

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

    /**
     * Rendu lorsque Web3JS est connecté
     * @returns {JSX.Element}
     */
    renderWeb3IsConnected() {
        if (this.state.isConnected.web3) {
            return (
                <div>
                    <h2>Account</h2>
                    <div>{this.state.isConnected.web3Account}</div>
                </div>
            );
        }
    }

    /**
     * Rendu du bouton de connexion Web3JS
     * @returns {JSX.Element}
     */
    renderWeb3ConnectionButton() {
        if (!this.state.isConnected.web3) {
            return (
                <button className={"btn btn-outline-primary"} onClick={this.connectToWeb3}>Connection Web3</button>
            );
        }
    }

    /**
     * Rendu les éléments d'interaction Web3JS (bouton, status de connexion)
     * @returns {JSX.Element}
     */
    renderWeb3Connection() {
        return (
            <div>
                {this.renderWeb3ConnectionButton()}
                {this.renderWeb3IsConnected()}
            </div>
        );
    }

    renderCategorie(categorie, index){
        return(
            <button key={index} className={"m-3 btn btn-outline-primary"}>
                {categorie}
            </button>
        );
    }

    renderCategories() {
        return this.state.categories.map((categorie, index) => {
            return this.renderCategorie(categorie, index);
        });
    }

    /**
     * Fonction de rendu appelé par defaut pas React
     * @returns {JSX.Element}
     */
    render() {
        return (
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col"}>
                        {this.renderWeb3Connection()}
                    </div>

                    <div className={"d-flex justify-content-center"}>
                        {this.renderCategories()}
                    </div>


                    <form onSubmit={this.submitCategorie}>
                        <input name={"categorie"}/>
                        <input type={"submit"}/>
                    </form>

                </div>
            </div>
        );
    }

}

export default Vote;
