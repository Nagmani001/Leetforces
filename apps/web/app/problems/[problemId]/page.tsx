
import Appbar from "@/app/components/AppBar";
import MainPanel from "@/app/components/Panel";

export default async function Problems({ params }: { params: Promise<{ problemId: string }> }) {
  const { problemId } = await params;

  return <div className="flex flex-col h-screen w-screen">
    <Appbar />
    <div className="flex-1 overflow-auto">
      <MainPanel />
    </div>
  </div>
}
