import setZeroes from "../../algorithms/chapter1/1_8_resetMatrix";
describe('setZeroes', () => {
  test('один нулевой элемент обнуляет соответствующую строку и столбец', () => {
    const mat = [
      [1, 2, 3],
      [4, 0, 6],
      [7, 8, 9],
    ];
    setZeroes(mat);
    expect(mat).toEqual([
      [1, 0, 3],
      [0, 0, 0],
      [7, 0, 9],
    ]);
  });

  test('нет нулей — матрица не изменяется', () => {
    const mat = [
      [1, 2],
      [3, 4],
    ];
    setZeroes(mat);
    expect(mat).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });

  test('несколько нулей — обнуление соответствующих строк и столбцов', () => {
    const mat = [
      [1, 2, 0],
      [4, 5, 6],
      [0, 8, 9],
    ];
    setZeroes(mat);
    expect(mat).toEqual([
      [0, 0, 0],
      [0, 5, 0],
      [0, 0, 0],
    ]);
  });

  test('квадратная матрица 1x1 с нулём', () => {
    const mat = [[0]];
    setZeroes(mat);
    expect(mat).toEqual([[0]]);
  });

  test('2x3 матрица без нулей — без изменений', () => {
    const mat = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    setZeroes(mat);
    expect(mat).toEqual([
      [1, 2, 3],
      [4, 5, 6],
    ]);
  });
});