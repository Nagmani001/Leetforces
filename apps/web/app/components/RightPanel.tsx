"use client";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import CodingArea from "./CodingArea";
import BottomPanel from "./BottomPanel";

export default function RightPanel() {
  return <div className="h-full" >
    <PanelGroup autoSaveId="second-example" direction="vertical" className="h-full">
      <Panel defaultSize={65}>
        <CodingArea />
      </Panel>
      <PanelResizeHandle className="bg-red-200 h-2" />
      <Panel defaultSize={35}>
        <BottomPanel />
      </Panel>
    </PanelGroup>
  </div>

}
