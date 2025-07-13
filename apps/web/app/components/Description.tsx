import DesciptionBottom from "./DescriptionBottom"
import DesciptionTop from "./DescriptionTop"
import Example from "./Example"
import Title from "./Title"

export default function Description({ problem }: any) {

  return <div className="h-full overflow-y-auto">
    <Title title={problem.title} timeLimit={problem.cpuTimeLimit} memoryLimit={problem.memoryLimit} />
    <div className="p-4 pt-8 ">
      <DesciptionTop descriptionTop={problem.DescriptionTop} />
    </div>
    <div className="font-semibold pl-4">Examples:</div>
    <div className="flex flex-col p-4">
      <div className="flex flex-col gap-y-4">
        {problem.basicTestCases.map((test: any) => {
          return <Example key={test.id} input={test.input} output={test.output} />
        })}
      </div>
    </div>
    <div className="p-4 pt-8 ">
      <DesciptionBottom descriptionBottom={problem.DescriptionBottom} />
    </div>

  </div>

}
