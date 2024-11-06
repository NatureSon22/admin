import { useState } from "react";
import RichTextEditor, { BaseKit } from "reactjs-tiptap-editor";
import "reactjs-tiptap-editor/style.css";
import {
  Bold,
  Italic,
  Heading,
  OrderedList,
  BulletList,
  Link,
  Underline,
} from "reactjs-tiptap-editor";

const extensions = [
  BaseKit.configure({
    // Show placeholder
    placeholder: {
      showOnlyCurrent: true,
    },

    // Character count
    characterCount: {
      limit: 50_000,
    },
  }),
  Bold,
  // Import Extensions Here
];

const TipTapEditor = () => {
  const [content, setContent] = useState();

  const onChangeContent = (value) => {
    setContent(value);
  };

  return (
    <RichTextEditor
      output="html"
      content={content}
      onChangeContent={onChangeContent}
      extensions={extensions}
    />
  );
};

export default TipTapEditor;
