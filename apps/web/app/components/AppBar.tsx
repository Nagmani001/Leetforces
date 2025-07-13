"use client"
import { code as ActualCode, mainTestCase } from "@/store/atoms";
import { Button } from "@repo/ui/shad/ui/button";
import axios from "axios";
import { useAtomValue } from "jotai";
import { useState } from "react";

export default function Appbar() {
  const testCases = useAtomValue(mainTestCase);
  const code: any = useAtomValue(ActualCode);
  const [answer, setAnswer] = useState(null);


  return <div className="flex justify-between p-4 ">
    <div className="flex justify-center gap-x-2 font-bold text-xl">
      <img height="20px" width="40px" src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" />
      <div>LeetForces</div>
    </div>
    <div>
      <Button onClick={async () => {
        const res = await axios.post("http://13.201.224.154:2358/submissions/batch?base64_encoded=false", {
          submissions: testCases.map((test: any) => {
            return {
              "language_id": 54,
              "source_code": JSON.stringify(code),
              "stdin": test.inputTest,
              "expected_output": test.outputTest,
              "cpu_time_limit": code.cpuTimeLimit,
              "memory_limit": code.memoryLimit
            }
          })
        });

        let actualToken = "";
        const tokens = res.data.map((token: any) => {
          actualToken += token.token + ",";
        });
        actualToken = actualToken.slice(0, -1);

        const interval = setInterval(async () => {
          //TODO: :fix this ,  logic broken
          const checkDone = await axios.get(`http://13.201.224.154:2358/submissions/batch?tokens=${actualToken}&base64_encoded=false`)
          let allDonw = true;
          checkDone.data.submissions.forEach((sub: any) => {
            if (sub.status.description == "Processing") {
              allDonw = false;
            }
            if (sub.status.description == "In Queue") {
              allDonw = false;
            }

            if (allDonw) {
              clearInterval(interval);
            }
          });
        }, 2000);
      }} variant="success">Submit</Button>
    </div>
    <div className="flex gap-x-4">
      <div className="rounded-full bg-slate-200 h-10 w-10 flex justify-center">
        <div className="flex flex-col justify-center">
          N
        </div>
      </div>
    </div>
  </div>
}
