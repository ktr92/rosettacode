/**
 * Имеется изображение, представленное матрицей NxN; каждый пиксел представлен
4 байтами. Напишите метод для поворота изображения на 90 градусов.
выполнить эту операцию «На месте»
 */

function imageRotate(matrix: number[][]) {
  const size = matrix.length - 1;

  for (let i = 0; i <= size; i++) {
    // это смена слоя - сначала все элементы внешней "границы". 
    // Когда шаг увеличивается, мы заходим внутрь матрицы, 
    // и переставляем элементы внутри предыдущего слоя.  

    // нижняя граница слоя (верхняя это i)
    let last = size - i;

    for (let j = i; j < last; j++) {
      
    // перестановка внутрия слоя (периметр) 
    // j начинается от i чтобы сдвинуться с ранее замененных 

      let offset = size - j; 
      const tmp = matrix[i][j];

      // topleft = bottomleft
      matrix[i][j] = matrix[offset][i];

      // bottomleft = bottomright
      matrix[offset][i] = matrix[last][offset];

      // bottomright = topright
      matrix[last][offset] = matrix[j][last];

      // topright = topleft
      matrix[j][last] = tmp;
    }
  }
}

export default imageRotate;
