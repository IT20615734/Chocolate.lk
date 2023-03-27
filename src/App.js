import "./App.css";
import Main from "./Components/Main";
import Data from "./Data/Data";

function App() {
  return (
    <>
      <div className="App">
        <h1>Chocolate Online Store</h1>

        {/* this line comes from components/main.js file */}
        {/* and please check import file path in this window upper side */}
        <Main></Main>
      </div>
    </>
  );
}

export default App;
