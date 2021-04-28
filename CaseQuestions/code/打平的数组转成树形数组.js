const arr = [
  { id: 1, parentId: null },
  { id: 2, parentId: 1 },
  { id: 3, parentId: 2 },
  { id: 5, parentId: 3 },
  { id: 6, parentId: 3 },
];

const arr1 = {
  id: 1,
  parentId: null,
  children: [
    {
      id: 2,
      parentId: 1,
      children: [
        {
          id: 3,
          parentId: 2,
          children: [
            { id: 5, parentId: 3, children: [] },
            { id: 6, parentId: 3, children: [] },
          ],
        },
      ],
    },
  ],
};

// function arrToTree(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const cur = arr[i];
//     cur.children = arr.filter((item) => item.parentId === cur.id);
//   }

//   console.log(JSON.stringify(arr[0]));
// }

function treeToArr(tree) {
  const arr = [];
  setArrItem(arr, [tree]);
  function setArrItem(arr, treeArr, parentId = null) {
    treeArr.forEach((tree) => {
      arr.push({ id: tree.id, parentId });
      if (Array.isArray(tree.children) && tree.children.length > 0) {
        setArrItem(arr, tree.children, tree.id);
      }
    });
  }

  return arr;
}

console.log(treeToArr(arr1));
