import { Button } from "@repo/ui/shad/ui/button";
import LeftInput from "./LeftInput";
import Output from "./output";

export default function BottomPanel() {
  return <div className="flex flex-col gap-y-4 h-full w-full ">
    <div className="flex mx-auto mt-2">
      <Button variant="success">Run</Button>
    </div>
    <div className="flex gap-x-4 h-full w-full m-4">
      <LeftInput />
      <Output />
    </div>
  </div>
}
