import logo from "./logo.svg";
import "./App.css";
import { Menu } from "./component/Menu.js";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>our menu</h1>
                <div className="underline"></div>
            </header>
            <Menu />
        </div>
    );
}

export default App;
