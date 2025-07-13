"use client";

import { useRef } from "react";
import Editor from '@monaco-editor/react';
import { useSetAtom } from "jotai";
import { code } from "@/store/atoms";

export default function CodingArea() {
  const editorRef = useRef(null);
  const setCode = useSetAtom(code);

  function handleEditorDidMount(editor: any, monaco: any) {
    editorRef.current = editor;
  }

  return <div>
    <Editor
      height="100vh"
      defaultLanguage="javascript"
      defaultValue="// some comment"
      onMount={handleEditorDidMount}
      onChange={(value) => {
        if (value) {
          setCode(value);
        }
      }}
    />
  </div>
}
