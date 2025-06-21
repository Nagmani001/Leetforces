"use client"

import DesciptionBottom from "./DescriptionBottom"
import DesciptionTop from "./DescriptionTop"
import Example from "./Example"
import Title from "./Title"

export default function Description() {

  return <div className="h-full overflow-y-auto">
    <Title />
    <div className="p-4 pt-8 ">
      <DesciptionTop />
    </div>
    <div className="font-semibold pl-4">Examples:</div>
    <div className="flex flex-col p-4">
      <div className="flex flex-col gap-y-4">
        <Example />
        <Example />
      </div>
    </div>
    <div className="p-4 pt-8 ">
      <DesciptionBottom />
    </div>

  </div>

}
