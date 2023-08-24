import { useState } from "react";
import { useToggle } from "../../hooks/useToggle";

const Editable = () => {
  const [inputValue, setInputValue] = useState("");
  const { status: editable, toggleStatus: toggleEditable } = useToggle();

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      {editable ? (
        <label>
          Title
          <input type="text" value={inputValue} onChange={handleInputValue} />
        </label>
      ) : (
        <>Title {inputValue}</>
      )}
      <br />
      <button onClick={toggleEditable}>{editable ? "Submit" : "Edit"}</button>
    </div>
  );
};

export default Editable;
