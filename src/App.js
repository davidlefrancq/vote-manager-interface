import './App.css';
import Vote from "./components/Vote";
import {FaLaptopCode} from "react-icons/all";

function App() {
    return (
        <div className="App">

            <header className="App-header">
                <FaLaptopCode size={96}/>
                <p>Crypto Vote</p>
            </header>

            <Vote/>

        </div>
    );
}

export default App;
