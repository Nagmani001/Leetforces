import { Button } from "@repo/ui/shad/ui/button";

export default function Appbar() {
  return <div className="flex justify-between p-4 ">
    <div className="flex justify-center gap-x-2 font-bold text-xl">
      <img height="20px" width="40px" src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" />
      <div>LeetForces</div>
    </div>
    <div>
      <Button variant="success">Submit</Button>
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
