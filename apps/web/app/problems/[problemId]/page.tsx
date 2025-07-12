import Appbar from "@/app/components/AppBar";
import MainPanel from "@/app/components/Panel";
import { BACKEND_URL } from "@repo/common/zod";
import axios from "axios";

export default async function Problems({ params }: { params: Promise<{ problemId: string }> }) {

  const { problemId } = await params;
  const problem = await axios.get(`${BACKEND_URL}/problem/${problemId}`);

  return <div className="flex flex-col h-screen w-screen">
    <Appbar />
    <div className="flex-1 overflow-auto">
      <MainPanel problem={problem.data.msg} />
    </div>
  </div>
}
