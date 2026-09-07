
import imageRotate from "../../algorithms/chapter1/1_7_imageRotate";

type Matrix = number[][];

describe('imageRotate 90 degrees clockwise (in place)', () => {
  test('1x1 матрица', () => {
    const mat: Matrix = [[5]];
    // imageRotate должно менять матрицу на месте
    imageRotate(mat);
    expect(mat).toEqual([[5]]);
  });

  test('2x2 матрица', () => {
    const mat: Matrix = [
      [1, 2],
      [3, 4],
    ];
    imageRotate(mat);
    // после поворота: 3 1 / 4 2
    expect(mat).toEqual([
      [3, 1],
      [4, 2],
    ]);
  });

  test('3x3 матрица', () => {
    const mat: Matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    imageRotate(mat);
    // после поворота: 7 4 1 / 8 5 2 / 9 6 3
    expect(mat).toEqual([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]);
  });



  test('проверка на месте на большем квадрате (4x4)', () => {
    const mat: Matrix = [
      [ 1,  2,  3,  4],
      [ 5,  6,  7,  8],
      [ 9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    imageRotate(mat);
    expect(mat).toEqual([
      [13, 9, 5, 1],
      [14,10, 6, 2],
      [15,11, 7, 3],
      [16,12, 8, 4],
    ]);
  });
});