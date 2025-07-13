import { randomTestCaseInput } from "@/store/atoms";
import { Textarea } from "@repo/ui/shad/ui/textarea";
import { useAtom } from "jotai";

export default function LeftInput() {
  const [randomInput, setRandomInput] = useAtom(randomTestCaseInput);
  return <div className="h-full w-[50%]">
    <Textarea
      onChange={(e) => {
        setRandomInput(e.target.value);
      }}
      value={randomInput}
      placeholder="Input here..." className="h-full" />
  </div>
}
