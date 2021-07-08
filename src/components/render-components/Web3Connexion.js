import React from 'react';
import {BiLogInCircle} from "react-icons/all";

const Web3Connexion = (props) => {

    const {isConnected, accounts, connectToWeb3} = props;

    const renderWeb3IsConnected = () => {
        if (isConnected) {
            return (
                <div style={{fontSize:18}}>
                    {accounts[0]}
                </div>
            );
        }
    }

    const renderWeb3ConnectionButton = () => {
        if (!isConnected) {
            return (
                <button className={"btn btn-link"} onClick={connectToWeb3}>
                    <BiLogInCircle size={32}/>
                </button>
            );
        }
    }

    return (
        <div>
            {renderWeb3ConnectionButton()}
            {renderWeb3IsConnected()}
        </div>
    );
};

export default Web3Connexion;
