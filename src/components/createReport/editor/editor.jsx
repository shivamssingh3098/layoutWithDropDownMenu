import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";

export const Editor = ({ handleInput, templateData }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  //   useEffect(() => setContent(""), []);
  const config = {
    removeButtons: ["source"],
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
  };

  return (
    <JoditEditor
      ref={editor}
      value={templateData}
      config={config}
      tabIndex={1} // tabIndex of textarea
      onBlur={(newContent) => handleInput(newContent)} // preferred to use only this option to update the content for performance reasons
      onChange={(newContent) => {
        // handleInput(newContent);
      }}
    />
  );
};
