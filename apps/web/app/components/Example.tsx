import ExampleTableInput from "./TableInput";
import ExampleTableOutput from "./TableOutput";

export default function Example({ input, output }: any) {
  return <div>
    <ExampleTableInput input={`${input}`} />
    <ExampleTableOutput output={`${output}`} />
  </div>
}
