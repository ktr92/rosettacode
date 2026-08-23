/**
 *  Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

  Each row must contain the digits 1-9 without repetition.
  Each column must contain the digits 1-9 without repetition.
  Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
  Note:

  A Sudoku board (partially filled) could be valid but is not necessarily solvable.
  Only the filled cells need to be validated according to the mentioned rules.
 
  [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ]

 */
function isValidSudoku(board: string[][]): boolean {
  const rowsMap = Array.from({ length: 9 }, () => new Set());
  const colsMap = Array.from({ length: 9 }, () => new Set());
  const boxMap = Array.from({ length: 9 }, () => new Set());

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const val = board[i][j];

      if (val === '.') continue;

      if (rowsMap[i].has(val)) {
        return false;
      }
     
      if (colsMap[i].has(val)) {
        return false;
      }
      
      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (boxMap[boxIndex].has(val)) {
        return false;
      }

      rowsMap[i].add(val)
      colsMap[j].add(val)
      boxMap[boxIndex].add(val);

    }
  }
  return true;
}

module.exports = isValidSudoku;
