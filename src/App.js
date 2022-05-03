import { useReducer } from "react";
import "./styles.css";

export default function App() {
  const [isEnabled, enable] = useReducer(() => true, false);
  const _eventHandler = () => {
    enable();
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={_eventHandler}>
        {isEnabled ? "Enabled" : "Not Enabled"}
      </button>
    </div>
  );
}
