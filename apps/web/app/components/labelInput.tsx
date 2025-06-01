"use client"
import { Input } from "@repo/ui/shad/ui/input";

export default function LabelInput({ placeholder, onChange, label }: any) {
  return <div className="flex gap-x-2 p-2 items-center">
    <label className="text-md font-semibold">{label}</label>
    <Input className="max-w-md" type="text" placeholder={placeholder} onChange={onChange} />
  </div>
}
