import './App.css';
import Vote from "./components/Vote";
import {FaLaptopCode} from "react-icons/all";

function App() {
    return (
        <div className="App">

            <header className="App-header">
                <FaLaptopCode size={96}/>
                <h1>Crypto Vote Admin</h1>
            </header>

            <Vote/>

        </div>
    );
}

export default App;
