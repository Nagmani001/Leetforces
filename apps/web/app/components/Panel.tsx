"use client";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import Description from "./Description";
import RightPanel from "./RightPanel";

export default function MainPanel({ problem }: any) {
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
