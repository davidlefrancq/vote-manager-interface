# Vote React / Solidity

### FR
Cette application a été développé pour Kovan. Kovan est une blockchain dédié aux tests et aux développeur d'application Ethereum.

### EN
This app was developed for Kovan. Kovan is a blockchain dedicated to testing and developer of Ethereum applications.


## Work Team

- [Olivier Fernandez](https://github.com/fernandezOli) for Solidity Contract Multi Vote
- [Anis Boussedra](https://github.com/juniorji) for React User Interface
- [David Lefrancq](https://github.com/davidlefrancq) for Vote Manager Interface and Integration Team Web3js
- René Uzio in Integration Team Web3js

## Requirement

- Metamask [Link](https://metamask.io/)
- Kovan Faucet [Link](https://linkfaucet.protofire.io/kovan)

### FR
Pour pouvoir utiliser certaines fonctionnalités de nos applications, vous devez disposer de Metamask et d'un portefeuille de cryptomonaie avec un peu de crédit. Utilisez le Kovant Faucet. Vous pouvez obtenir 0,1 ETH de test par jour.

### EN
To be able to use certain functionality of our applications, you must have Metamask and a crypto wallet supplied with a little value. Use the Kovant Faucet. On this faucet, you can get 0.1 test ETH per day.

## Description 

### FR
Dans le cadre de l'apprentissage du développement d'application sur la blockchain, notre équipe a développé un ensemble d'applications afin de mettre en place un système de vote.

- Un Smart Contract sur la blockchain Kovan [Etherscan Link](https://kovan.etherscan.io/address/0x36d812d504a74b4caf5ec80b9c9a753417a42164).
- Une application Vote Manager [Netlify Link](https://crypto-vote-admin.netlify.app/).
- Une application Vote User Interface [Netlify Link](https://crypto-vote.netlify.app/).

### EN
In learning process to develop application on the blockchain, our team has writed a set of applications to set up a voting system.

- One Smart Contract on Kovan Testnet [Etherscan Link](https://kovan.etherscan.io/address/0x36d812d504a74b4caf5ec80b9c9a753417a42164).
- One application Vote Manager [Netlify Link](https://crypto-vote-admin.netlify.app/).
- One application Vote User Interface [Netlify Link](https://crypto-vote.netlify.app/).


## Code Source

- Contract Solidity [Github Link](https://github.com/davidlefrancq/vote-manager-interface/blob/main/src/contract/VoteMulti.sol)
- Vote Manager Interface [Github Link](https://github.com/davidlefrancq/vote-manager-interface)
- User Manager Interface [Github Link](https://github.com/juniorji/ReactVote)

### Prototype / Proof of concept
Developed by "Integration Team Web3js" for proof of concept.
- Vote React Solidity [Github Link](https://github.com/davidlefrancq/vote-react-solidity)


## Pistes d’amélioration / Improvements Track
- Load Manager
  > FR : Développer un gestionnaire de chargement.
  
  > EN : Develop a load manager.
- Owners
  > FR : Gestion des droits d’accès de la section admin.
  
  > EN : Management of access rights for the admin section. 
- Statistique
  > FR : Afficher un graphique récapitulatif pour chaque question.
  
  > EN : View graph for each question.
- Networks
  > FR : Indiqué à l’utilisateur qu’il doit être sur le réseau Kovan.
  
  > EN : Show at user who to must be on the Kovan network.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
