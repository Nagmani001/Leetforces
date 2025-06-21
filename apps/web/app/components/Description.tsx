"use client"

import DesciptionTop from "./DescriptionTop"
import ExampleTableInput from "./TableInput"
import ExampleTableOutput from "./TableOutput"
import Title from "./Title"

export default function Description() {

  return <div>
    <Title />
    <DesciptionTop />
    <div className="font-semibold">Examples:</div>
    <div className="flex flex-col p-4">
      <ExampleTableInput />
      <ExampleTableOutput />
    </div>

  </div>

}
