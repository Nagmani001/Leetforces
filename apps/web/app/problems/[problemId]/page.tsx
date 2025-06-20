export default async function Problems({ params }: { params: Promise<{ problemId: string }> }) {
  const { problemId } = await params;

  return <div>
    {
      problemId
    }</div>
}
