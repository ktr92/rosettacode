/**
 *  *  Пространственную сложность можно сократить до О(1), используя первую строку
как замену для  mapRows, а первый столбец - как замену для  mapCols.
 */

function setZeroes(matrix: number[][]) {
  const mapRows = new Set();
  const mapCols = new Set();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
       mapRows.add(i)
       mapCols.add(j)
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (mapRows.has(i) || mapCols.has(j)) {
       matrix[i][j] = 0;
      }
    }
  }
}

export default setZeroes;
