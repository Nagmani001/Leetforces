"use client";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import Description from "./Description";
import RightPanel from "./RightPanel";
import { useSetAtom } from "jotai";
import { mainTestCase } from "@/store/atoms";

export default function MainPanel({ problem }: any) {
  const setMainTestCase = useSetAtom(mainTestCase);
  setMainTestCase(problem.testcases);


  return <div className="h-full w-full">
    <PanelGroup autoSaveId="example" direction="horizontal">
      <Panel defaultSize={50}>
        <Description problem={problem} />
      </Panel>
      <PanelResizeHandle className="w-2 h-full bg-slate-200" />
      <Panel defaultSize={50}>
        <RightPanel />
      </Panel>
    </PanelGroup>
  </div>

}
