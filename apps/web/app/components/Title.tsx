export default function Title({ title, timeLimit, memoryLimit }: any) {
  return <div className="flex flex-col items-center gap-y-1 mt-4">
    <div className="font-bold text-2xl">{title}</div>
    <div>time limit per test: {timeLimit} second</div>
    <div>memory limit per test: {memoryLimit} megabytes</div>
  </div>
}
