"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import { FC } from "react";
import StarterKit from "@tiptap/starter-kit";
import { Label } from "./ui/label";
import { useFormikContext } from "formik";
import TiptapMenuBar from "./TiptapMenuBar";

interface TiptapRichtextEditorProps {
  label: string;
  name: string;
}

const TiptapRichtextEditor: FC<TiptapRichtextEditorProps> = ({
  label,
  name,
}) => {
  const {
    setFieldValue,
    setFieldTouched,
    setFieldError,
    touched,
    errors,
    values,
  } = useFormikContext<any>();

  const editor = useEditor({
    extensions: [StarterKit],
    content: values[name],
    editorProps: {
        attributes:{
            class:
            "prose dark:prose-invert border rounded-md p-3 min-h-[156px] max-w-none"
        }

    },
    onUpdate: ({ editor }) => {
      setFieldValue(name, editor.getHTML());
    },
    onFocus: () => {
      setFieldTouched(name, true);
    },
    onBlur: () => {
      if (editor?.isEmpty) setFieldError(name, `${label} is required`);
    },
  });
  return (
    <div>
      <Label>{label}</Label>
      <TiptapMenuBar editor={editor} />
      <EditorContent editor={editor} />
      {editor?.isEmpty && touched[name] && (
        <p className="text-red-500 text-xs">{label} is required</p>
      )}
    </div>
  );
};

export default TiptapRichtextEditor;
