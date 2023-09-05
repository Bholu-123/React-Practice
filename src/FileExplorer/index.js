import { useState } from "react";
import Folder from "./Components/Folder";
import explorer from "./Data/Data";
import useTraverseData from "./UseTaverseData";
import "./index.css";

export default function FileExplorer() {
  const [explorerData, setExplorerData] = useState(explorer);

  const { insertNode, deleteNode, renameNode } = useTraverseData();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  const handleDeleteNode = (folderId) => {
    const finalTree = deleteNode(explorerData, folderId);
    setExplorerData(finalTree);
  };

  const handleRenameNode = (folderId, item, isFolder) => {
    const finalTree = renameNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  return (
    <div className="App">
      <Folder
        handleInsertNode={handleInsertNode}
        explorer={explorerData}
        handleDeleteNode={handleDeleteNode}
        handleRenameNode={handleRenameNode}
      />
    </div>
  );
}
