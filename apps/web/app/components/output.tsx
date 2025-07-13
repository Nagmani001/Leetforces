"use client";

import { randomTestCaseOutput } from "@/store/atoms";
import { Textarea } from "@repo/ui/shad/ui/textarea";
import { useAtomValue } from "jotai";

export default function Output() {

  const output = useAtomValue(randomTestCaseOutput);
  return <div className="h-full w-[50%]">
    <Textarea readOnly value={output} placeholder="Output here...." className="h-full" />
  </div>
}
