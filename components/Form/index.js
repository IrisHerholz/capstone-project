import { useState } from "react";

const Form = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <input
            type="text"
            value={input1}
            onChange={(event) => setInput1(event.target.value)}
            placeholder="enter your traveldestination"
            min="1"
            max="20"
          />
          <input
            type="date"
            value={input2}
            onChange={(event) => setInput2(event.target.value)}
          />
          <input
            type="text"
            value={input3}
            onChange={(event) => setInput3(event.target.value)}
            placeholder="give your entry a title"
            min="1"
            max="30"
          />
          <input
            type="text"
            value={input4}
            onChange={(event) => setInput4(event.target.value)}
            placeholder="you have 200 words for your entry"
            min="1"
            max="200"
          />
        </fieldset>
        <button type="submit">save</button>
      </form>
    </main>
  );
};
export default Form;
