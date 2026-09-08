import removeDublicates from "../../algorithms/chapter2/2_1_removeDublicate";
import { createLinkedList } from './../../structures/linkedList_simple';

describe('removeDuplicates', () => {
  // Тест-хелпер для сокращения шаблонного кода
  const runTest = (input: number[], expected: number[]) => {
    const list = createLinkedList(input);
    const updatedList = removeDuplicates(list);
    expect(linkedListToArray(updatedList)).toEqual(expected);
  };

  test('должен возвращать null для пустого списка', () => {
    runTest([], []);
  });

  test('должен оставлять список без изменений, если дубликатов нет', () => {
    runTest([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);
  });

  test('должен удалять дубликаты из несортированного списка', () => {
    runTest([4, 2, 1, 4, 3, 1, 2], [4, 2, 1, 3]);
  });

  test('должен корректно обрабатывать список, состоящий полностью из дубликатов', () => {
    runTest([2, 2, 2, 2, 2], [2]);
  });

  test('должен удалять дубликаты, стоящие подряд', () => {
    runTest([1, 1, 2, 3, 3, 4], [1, 2, 3, 4]);
  });

  test('должен корректно удалять дубликат в самом конце списка', () => {
    runTest([1, 2, 3, 1], [1, 2, 3]);
  });
});