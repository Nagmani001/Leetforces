"use client";

import { Button } from '@repo/ui/shad/ui/button';

import ReactMarkdown from "react-markdown";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@repo/ui/shad/ui/table';
import rehypeRaw from 'rehype-raw';

export default function ExampleTableOutput({ output }: any) {

  return <div className="">
    <Table className="min-w-full border border-[#a4a4a5] ">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[93%] font-semibold text-lg text-black py-2" >
            Output
          </TableHead>

          <TableHead className="w-[7%] cursor-pointer text-right" >
            <Button variant="outline" onClick={() => {

            }}>Copy</Button>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium w-[100%] text-[#800] bg-[#eeeeef] ">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {output}
            </ReactMarkdown>
          </TableCell>
          <TableCell className="bg-[#eeeeef]"></TableCell>
        </TableRow>

      </TableBody>
    </Table>
  </div>
}
