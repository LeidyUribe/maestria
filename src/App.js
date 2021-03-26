import logo from "./logo.svg";
import "./App.css";
import Button from "./Components/Button/Button";

function App() {
  return (
    <div className="App">
      <br/>
       <Button
        id="1"
        type="button"
        onClick={() => alert("button")}
      >
        {" "}
        Btn default{" "}
      </Button>
      <br/>
      <br/>
      <Button
        id="2"
        type="button"
        color="yellow"
        width={80}
        height={40}
        onClick={() => alert("hello")}
      >
        {" "}
        Btn custom 1{" "}
      </Button>
      <br/>
      <br/>
      <Button
        id="3"
        type="button"
        color="orange"
        size={18}
        height={50}
        onClick={() => alert("hello")}
      >
        {" "}
        Btn 2{" "}
      </Button>
    </div>
  );
}

export default App;
