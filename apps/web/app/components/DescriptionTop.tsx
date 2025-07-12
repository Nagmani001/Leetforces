"use client";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";


// add this for:footnotes, strikethrough, tables, tasklists and URLs directly 
import remarkGfm from 'remark-gfm'

export default function DescriptionTop({ descriptionTop }: { descriptionTop: string }) {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}

    // add this for:footnotes, strikethrough, tables, tasklists and URLs directly 
    // remarkPlugins={[remarkGfm]}
    >
      {descriptionTop}
    </ReactMarkdown>
  );
}
