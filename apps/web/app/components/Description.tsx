"use client"

import DesciptionTop from "./DescriptionTop"
import ExampleTable from "./Table"
import Title from "./Title"

export default function Description() {

  return <div>
    <Title />
    <DesciptionTop />
    <div className="font-semibold">Examples:</div>

    <ExampleTable />
  </div>

}
