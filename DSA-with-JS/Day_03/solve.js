board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

let possOut = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

let newArr = board.map((item, index) => {
  let notesNum = item.filter((i, _) => i !== ".");

  let res = item.map((Citem) => {
    let get = 0;
    if (Citem === ".") {
      for (let i = 0; i < possOut.length; i++) {
        if (!notesNum.includes(possOut[i])) {
          notesNum.push(possOut[i]);
          return possOut[i];
        }
      }
    }
    return Citem;
  });
  return res;
});

console.log(newArr);
