"use client";
import { Button } from "@repo/ui/shad/ui/button";
import { Input } from "@repo/ui/shad/ui/input";

export default function TestCase({ setTestCases, testcase, label, onClick }: any) {

  const handleChange = (index: number, field: "input" | "output", value: string) => {
    const updated = [...testcase];
    updated[index][field] = value;
    setTestCases(updated);
  }

  return <div className="flex gap-x-2 p-2 items-center">
    <label className="text-md font-semibold">{label}</label>
    {testcase.map((tc: any, index: any) => (
      <div key={index} className="flex flex-col gap-2 items-center">
        <Input
          className="max-w-md"
          type="text"
          placeholder="input"
          value={tc.input}
          onChange={(e) => handleChange(index, "input", e.target.value)}
        />
        <Input
          className="max-w-md"
          type="text"
          placeholder="output"
          value={tc.output}
          onChange={(e) => handleChange(index, "output", e.target.value)}
        />
      </div>

    ))}
    <Button onClick={onClick} variant="secondary">Add
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </Button>
  </div>
}
