/**
 * Имеется изображение, представленное матрицей NxN; каждый пиксел представлен
4 байтами. Напишите метод для поворота изображения на 90 градусов.
У дастся ли вам выполнить эту операцию «На месте»?
 */

function imageRotate(matrix: number[][]) {

 const rotated = []
 const size = matrix.length - 1;
 
 for (let i = 0; i <= size; i++) {
   rotated[i] = []
  const element = matrix[i];
  for (let j = 0; j <= size; j++) {
   const element = matrix[i][j];
    rotated[i][j] = matrix[size - j][i]
  }
  
 }
 console.log(rotated)
}



export default imageRotate;