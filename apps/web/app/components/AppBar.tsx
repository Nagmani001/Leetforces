import { Button } from "@repo/ui/shad/ui/button";

export default function Appbar() {
  return <div className="flex justify-between p-4 bg-red-50">
    <div>LeetForces</div>
    <div>
      <Button variant="default">Submit</Button>
    </div>
    <div className="flex gap-x-4">
      <div>Theme toggel</div>
      <div>User</div>
    </div>
  </div>
}
