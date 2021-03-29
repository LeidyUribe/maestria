import "./App.css";
import Button from "./Components/Button/Button";
import Icon from "./Components/Icon/Icon";

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
        type="button"
        color="yellow"
        width={80}
        height={40}
        onClick={() => alert("hello")}
      >
        <Icon width={30} height={30} />
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
