import { useState } from "react";
import axios from "axios";

interface FetchingProps {
  fetchPasties: () => void;
}

export default function AddPastie(): JSX.Element {
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");

  async function handleSubmitNewPastie() {
    await axios
      .post("https://c3a5-pastebin.herokuapp.com/", {
        title: title,
        contents: contents,
      })
      .then((response) => {
        props.fetchPasties();
      })
      //reset text box?
      .catch((error) => {
        console.log(error);
      });
    setTitle("");
    setContents("");
  }

  return (
    <a
      href="# "
      className="list-group-item list-group-item-action"
      aria-current="true"
    >
      <div className="d-flex w-100 justify-content-between">
        <input
          type="text"
          placeholder="Enter title (optional)"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleSubmitNewPastie}>SUBMIT</button>
      </div>
      <br />
      <textarea
        name="AddPastie"
        cols={84}
        rows={20}
        placeholder="Paste contents here"
        onChange={(e) => setContents(e.target.value)}
      ></textarea>
    </a>
  );
}
