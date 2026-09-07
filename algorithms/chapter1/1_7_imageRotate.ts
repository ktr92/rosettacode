/**
 * Имеется изображение, представленное матрицей NxN; каждый пиксел представлен
4 байтами. Напишите метод для поворота изображения на 90 градусов.
У дастся ли вам выполнить эту операцию «На месте»?
 */

function imageRotate(matrix: number[][]) {
  const size = matrix.length - 1;

  for (let i = 0; i <= 2; i++) {

    let end = size - 1

    for (let j = 0; j <= end; j++) {
      
  
      const tmp = matrix[i][j];

      // bottomleft -> topleft
      matrix[i][j] = matrix[size - j][i];

      // bottomright -> bottomleft
      matrix[size - j][i] = matrix[size - j][size - i]

      // topright -> bottomright
      matrix[size - j][size - i] =  matrix[i][size - j]

      // topleft -> topright
      matrix[i][size - j] = tmp
    }
  }


  
  console.log(matrix);
}

export default imageRotate;
