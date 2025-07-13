"use client"

import { Button } from "@repo/ui/shad/ui/button";
import LeftInput from "./LeftInput";
import Output from "./output";
import { useAtomValue } from "jotai";
import { code as codeAtom, customInput, randomTestCaseInput, randomTestCaseOutput } from "@/store/atoms";
import axios from "axios";
import { useSetAtom } from "jotai";

export default function BottomPanel() {
  const code: any = useAtomValue(codeAtom);
  const randomInput = useAtomValue(randomTestCaseInput);
  const setRandomOutput = useSetAtom(randomTestCaseOutput);
  return <div className="flex flex-col gap-y-4 h-full w-full ">
    <div className="flex mx-auto mt-2">
      <Button variant="success"
        onClick={async () => {
          //TODO : fix if error happens 
          const res = await axios.post("http://3.109.212.115:2358/submissions/?base64_encoded=false&wait=true", {
            "language_id": 54,
            "source_code": code,
            "stdin": randomInput,
          });
          setRandomOutput(res.data.stdout);
        }}

      >Run</Button>
    </div>
    <div className="flex gap-x-4 h-full w-full m-4">
      <LeftInput />
      <Output />
    </div>
  </div>
}
