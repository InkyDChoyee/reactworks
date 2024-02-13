import "./App.css";
import MyComponent from "./MyComponent1";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <h1>리엑트 시작하기</h1>
      <MyComponent name={"북극곰"} age={30} />
      <img className="App-logo" src={logo} />
    </div>
  );
}

export default App;
