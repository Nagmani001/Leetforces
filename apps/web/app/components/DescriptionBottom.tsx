"use client";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
export default function DesciptionBottom({ descriptionBottom }: any) {

  return <div>
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}

    // add this for:footnotes, strikethrough, tables, tasklists and URLs directly 
    //   remarkPlugins={[remarkGfm]}
    >
      {descriptionBottom}
    </ReactMarkdown>
  </div>
}
