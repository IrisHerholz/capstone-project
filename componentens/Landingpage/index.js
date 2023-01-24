import React, { use } from "react";
import { useState } from "react";

export default function Landingpage() {
  const [entry, setEntry] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setMessage(`${entry}`);
    setEntry("");
  };
  return (
    <>
      <container>
        {" "}
        <form onSubmit={handleSubmit}>
          <p>Where is the journey going?</p>
          <label htmlFor="name">City or Country?</label>
          <input
            type="text"
            required
            id="entry"
            name="entry"
            value={entry}
            placeholder="enter your destination..."
            onChange={(event) => setEntry(event.target.value)}
          />
          <button type="submit">Submit</button>
          <>{message}</>
        </form>
      </container>
    </>
  );
}
