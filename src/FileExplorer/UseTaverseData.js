const useTraverseData = () => {
  // Add a file or folder in tree
  // Can be optimised using Dynamic Programming
  const insertNode = function (tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder: isFolder,
        items: [],
      });

      return tree;
    }

    let latestNode = [];
    latestNode = tree.items.map((ob) => {
      return insertNode(ob, folderId, item, isFolder);
    });

    return { ...tree, items: latestNode };
  };

  const deleteNode = function (tree, nodeId) {
    if (tree.id === nodeId) {
      return null;
    }

    const updatedItems = tree.items
      .map((item) => deleteNode(item, nodeId))
      .filter((item) => item !== null);

    return { ...tree, items: updatedItems };
  };

  const renameNode = (tree, folderId, item, isFolder) => {
    console.log(folderId, item, isFolder);
    if (tree.id === folderId) {
      return { ...tree, name: item };
    }

    const updatedItems = tree.items.map((node) =>
      renameNode(node, folderId, item, isFolder)
    );

    return { ...tree, items: updatedItems };
  };

  return { insertNode, deleteNode, renameNode };
};

export default useTraverseData;
