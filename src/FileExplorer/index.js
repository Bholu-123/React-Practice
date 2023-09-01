import { useState } from "react";
import Folder from "./Components/Folder";
import explorer from "./Data/Data";
import useTraverseData from "./UseTaverseData";
import "./index.css";

export default function FileExplorer() {
  const [explorerData, setExplorerData] = useState(explorer);

  const { insertNode } = useTraverseData();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  return (
    <div className="App">
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
}

// fix connect script in latest video
