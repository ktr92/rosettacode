/**
 * Имеется изображение, представленное матрицей NxN; каждый пиксел представлен
4 байтами. Напишите метод для поворота изображения на 90 градусов.
У дастся ли вам выполнить эту операцию «На месте»?
 */

function imageRotate(matrix: number[][]) {
  const size = matrix.length - 1;

  for (let i = 0; i <= 0; i++) {

    let end = size - 1
    // j начинается i чтобы сдвинуться с ранее замененных
    for (let j = i; j < size; j++) {

      // надо вернуться на 0 строку
      let row_index = 0;
      let offset = size - j;

      const tmp = matrix[0][j];
      
      // topleft = bottomleft
      matrix[0][j] = matrix[offset][0];

      // bottomleft = bottomright
      matrix[offset][0] = matrix[size][offset]

      // bottomright = topright
      matrix[size][offset] =  matrix[j][size]

      // topright = topleft
      matrix[j][size] = tmp
    }
  }


  
  console.log(matrix);
}

export default imageRotate;
