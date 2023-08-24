import Accordion from "./components/accordion/Accordion";
// import Editable from "./components/editable/Editable";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Accordion title="Product Info" content="This is prouct info content" />
      <br />
      {/* <Editable /> */}
    </div>
  );
}
