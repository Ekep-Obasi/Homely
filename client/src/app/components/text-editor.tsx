import { convertToRaw, EditorState } from "draft-js";
import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function Index() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [text, setText] = useState();

  const onEditorStateChange = function (editorState) {
    setEditorState(editorState);
    const { blocks } = convertToRaw(editorState.getCurrentContent());
    let text = editorState.getCurrentContent().getPlainText("\u0001");
    setText(text);
  };

  return (
    <>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        editorStyle={{ width: "415px", height: "250px" }}
        onEditorStateChange={onEditorStateChange}
      />
    </>
  );
}
