"use client";
import { Button } from "@repo/ui/shad/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/shad/ui/select";
import LabelInput from "../components/labelInput";
import TestCase from "../components/testcaseInput";
import { addProblems, basicTestCases, testCases } from "@/store/atoms";
import { useAtom } from "jotai";
import axios from "axios";
import { Input } from "@repo/ui/shad/ui/input";

export default function() {
  const [addProblem, setAddProblem] = useAtom(addProblems);
  const [testCase, setTestCases] = useAtom(testCases);
  const [basictestCase, setBasicTestCase] = useAtom(basicTestCases);


  return <div>

    <LabelInput placeholder="Password" label="Password: " onChange={(e: any) => {
      setAddProblem(x => {
        return {
          ...x,
          password: e.target.value
        }
      })
    }} />
    <LabelInput placeholder="Title" label="Title: " onChange={(e: any) => {
      setAddProblem(x => {
        return {
          ...x,
          title: e.target.value
        }
      })
    }} />
    <LabelInput placeholder="Markdown" label="Description Top: " onChange={(e: any) => {
      setAddProblem(x => {
        return {
          ...x,
          descriptionTop: e.target.value
        }
      })
    }} />
    <LabelInput placeholder="Markdown" label="Description Bottom: " onChange={(e: any) => {
      setAddProblem(x => {
        return {
          ...x,
          descriptionBottom: e.target.value
        }
      })
    }} />
    <LabelInput placeholder="In seconds" label="Cpu Time Limit: " onChange={(e: any) => {
      setAddProblem(x => {
        return {
          ...x,
          cpuTimelimit: +e.target.value
        }
      })
    }} />
    <LabelInput placeholder="In kilobytes" label="Memory Limit: " onChange={(e: any) => {
      setAddProblem(x => {
        return {
          ...x,
          memoryTimelimit: +e.target.value
        }
      })
    }} />
    <TestCase label="Test Cases: " setTestCases={setTestCases} testcase={testCase} onClick={() => {
      setTestCases(x => [...x, { input: "", output: "" }])
    }}
    />
    <TestCase label="Basic Test Cases: " setTestCases={setBasicTestCase} testcase={basictestCase} onClick={() => {
      setBasicTestCase(x => [...x, { input: "", output: "" }])
    }}
    />

    <div className="flex gap-x-2 p-2 items-center">
      <label className="text-md font-semibold">Difficulty</label>
      <Select onValueChange={(value: any) => {
        setAddProblem(x => {
          return {
            ...x,
            difficulty: value
          }
        })
      }}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Difficulty" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="EASY">EASY</SelectItem>
          <SelectItem value="MEDIUM">MEDIUM</SelectItem>
          <SelectItem value="HARD">HARD</SelectItem>
        </SelectContent>
      </Select>
    </div>


    <Button onClick={async () => {
      console.log(addProblem);
      try {
        const res = await axios.post("http://localhost:3001/addProblem", {
          password: addProblem.password,
          title: addProblem.title,
          descriptionTop: addProblem.descriptionTop,
          descriptionBottom: addProblem.descriptionBottom,
          cpuTimeLimit: addProblem.cpuTimelimit,
          memoryLimit: addProblem.memoryTimelimit,
          basicTestCases: basictestCase,
          testcases: testCase,
          difficulty: addProblem.difficulty
        }, {});
        console.log(res);

      } catch (err) {
        console.log(err);
      }

    }} className="p-2 " size="lg">Submit</Button>

  </div>
}
