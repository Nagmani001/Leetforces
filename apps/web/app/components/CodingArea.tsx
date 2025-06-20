"use client";

import { useRef } from "react";
import Editor from '@monaco-editor/react';

export default function CodingArea() {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor: any, monaco: any) {
    editorRef.current = editor;
  }

  return <div>


    <Editor
      height="100vh"
      defaultLanguage="javascript"
      defaultValue="// some comment"
      onMount={handleEditorDidMount}
    />
  </div>
}
