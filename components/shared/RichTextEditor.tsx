"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import { useEffect } from "react";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  List as ListIcon,
  Link as LinkIcon,
  Unlink,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from "lucide-react";

export default function RichTextEditor({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({ openOnClick: false }),
      BulletList,
      ListItem,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value);
    }
  }, [value]);

  const buttonBase =
    "w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600";
  const activeClass = "text-black bg-gray-200";

  return (
    <div className="border border-black rounded-[16px] font-montserratArm text-[16px] leading-[16px] min-h-[270px] px-4">
      {editor && (
        <div className="flex gap-6 border-b border-b-black px-4 py-4">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`${buttonBase} ${
              editor.isActive("bold") ? activeClass : ""
            }`}
          >
            <Bold size={24} color="black" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`${buttonBase} ${
              editor.isActive("italic") ? activeClass : ""
            }`}
          >
            <Italic size={24} color="black" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={`${buttonBase} ${
              editor.isActive("underline") ? activeClass : ""
            }`}
          >
            <UnderlineIcon size={24} color="black" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`${buttonBase} ${
              editor.isActive("bulletList") ? activeClass : ""
            }`}
          >
            <ListIcon size={24} color="black" />
          </button>
          <button
            onClick={() => {
              const url = prompt("Enter link URL");
              if (url) {
                editor.chain().focus().setLink({ href: url }).run();
              }
            }}
            className={buttonBase}
          >
            <LinkIcon size={24} color="black" />
          </button>
          <button
            onClick={() => editor.chain().focus().unsetLink().run()}
            className={buttonBase}
          >
            <Unlink size={24} color="black" />
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
            className={`${buttonBase} ${
              editor.isActive({ textAlign: "left" }) ? activeClass : ""
            }`}
          >
            <AlignLeft size={24} color="black" />
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
            className={`${buttonBase} ${
              editor.isActive({ textAlign: "center" }) ? activeClass : ""
            }`}
          >
            <AlignCenter size={24} color="black" />
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
            className={`${buttonBase} ${
              editor.isActive({ textAlign: "right" }) ? activeClass : ""
            }`}
          >
            <AlignRight size={24} color="black" />
          </button>
        </div>
      )}
      <EditorContent editor={editor} className="p-4" />
    </div>
  );
}
