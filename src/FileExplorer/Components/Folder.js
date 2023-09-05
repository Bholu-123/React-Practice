import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

function Folder({
  handleInsertNode = () => {},
  explorer,
  handleDeleteNode = () => {},
  handleRenameNode = () => {},
}) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
  });
  const [isEditing, setIsEditing] = useState({
    visible: false,
    isFolder: false,
    value: "",
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);

      setShowInput({ ...showInput, visible: false });
    }
  };

  const onEditFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleRenameNode(explorer.id, e.target.value, isEditing.isFolder);
      setIsEditing({ ...isEditing, visible: false });
    }
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    console.log(explorer.id);
    handleDeleteNode(explorer.id);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    console.log(explorer.isFolder);
    setExpand(true);
    setIsEditing({
      visible: true,
      isFolder: explorer.isFolder,
      value: explorer.name,
    });
  };

  if (explorer?.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div onClick={() => setExpand(!expand)} className="folder">
          {isEditing.visible ? (
            <input
              type="text"
              className="inputContainer__input"
              autoFocus
              value={isEditing.value}
              onKeyDown={onEditFolder}
              onBlur={() =>
                setIsEditing({
                  ...isEditing,
                  visible: false,
                })
              }
              onChange={(e) => {
                setIsEditing({
                  ...isEditing,
                  value: e.target.value,
                });
              }}
            />
          ) : (
            <span>📁 {explorer.name}</span>
          )}

          <div className="edit-delete">
            <AiFillEdit onClick={(e) => handleEdit(e)} />
            <AiFillDelete onClick={(e) => handleDelete(e)} />
          </div>
          <div>
            <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
            <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
          </div>
        </div>

        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                type="text"
                className="inputContainer__input"
                autoFocus
                onKeyDown={onAddFolder}
                onBlur={() => setShowInput({ ...showInput, visible: false })}
              />
            </div>
          )}

          {explorer.items.map((exp) => {
            return (
              <Folder
                handleInsertNode={handleInsertNode}
                handleDeleteNode={handleDeleteNode}
                handleRenameNode={handleRenameNode}
                key={exp.id}
                explorer={exp}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="file-container">
        {isEditing.visible ? (
          <input
            type="text"
            className="inputContainer__input"
            autoFocus
            value={isEditing.value}
            onKeyDown={onEditFolder}
            onBlur={() =>
              setIsEditing({
                ...isEditing,
                visible: false,
              })
            }
            onChange={(e) => {
              setIsEditing({
                ...isEditing,
                value: e.target.value,
              });
            }}
          />
        ) : (
          <span className="file">📄 {explorer.name}</span>
        )}

        <AiFillEdit onClick={(e) => handleEdit(e)} />
        <AiFillDelete onClick={(e) => handleDelete(e)} />
      </div>
    );
  }
}

export default Folder;
