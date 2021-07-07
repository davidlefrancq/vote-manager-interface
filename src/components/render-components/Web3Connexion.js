import React from 'react';

const Web3Connexion = (props) => {

    const {isConnected, accounts, connectToWeb3} = props;

    const renderWeb3IsConnected = () => {
        if (isConnected) {
            return (
                <div>
                    <h2>Account</h2>
                    <div>{accounts[0]}</div>
                </div>
            );
        }
    }

    const renderWeb3ConnectionButton = () => {
        if (!isConnected) {
            return (
                <button className={"btn btn-outline-primary m-3"} onClick={connectToWeb3}>Connection Web3</button>
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
