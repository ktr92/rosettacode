import { createLinkedList } from '../../structures/linkedList_simple';
import findEnd from './../../algorithms/chapter2/2_2_findEnd';

describe('removeDuplicates', () => {
  // Тест-хелпер для сокращения шаблонного кода
  

  test('должен возвращать null для пустого списка', () => {
    const head = null;
    expect(findEnd(head, 1)).toBeNull();
  });

  test('должен корректно находить элементы в списке из одного узла', () => {
    const head = createLinkedList([42]);
    
    // 1-й с конца в списке [42] — это сам элемент 42
    const result = findEnd(head, 1);
    expect(result).not.toBeNull();
    expect(result?.val).toBe(42);
  });


  test('должен возвращать null при некорректном k (например, k <= 0)', () => {
    const head = createLinkedList([1, 2, 3]);
    expect(findEnd(head, 0)).toBeNull();
    expect(findEnd(head, -1)).toBeNull();
  });

  test('должен находить последний элемент (k = 1)', () => {
    const head = createLinkedList([10, 20, 30, 40]);
    const result = findEnd(head, 1);
    expect(result).not.toBeNull();
    expect(result?.val).toBe(40);
  });

  test('должен находить первый элемент списка (k равняется длине списка)', () => {
    const head = createLinkedList([10, 20, 30, 40]);
    const result = findEnd(head, 4);
    expect(result).not.toBeNull();
    expect(result?.val).toBe(10);
  });

  test('должен находить элемент в середине списка', () => {
    const head = createLinkedList(['a', 'b', 'c', 'd', 'e']);
    
    // 3-й с конца в ['a', 'b', 'c', 'd', 'e'] -> это 'c'
    const result = findEnd(head, 3);
    expect(result).not.toBeNull();
    expect(result?.val).toBe('c');
  });

  test('должен корректно возвращать именно узел (ссылку), а не просто значение', () => {
    const head = createLinkedList([1, 2, 3]);
    // Получаем ожидаемый второй узел (значение 2) вручную через ссылки
    const expectedNode = head?.next; 
    
    // 2-й с конца в [1, 2, 3] — это узел со значением 2
    const result = findEnd(head, 2);
    expect(result).toBe(expectedNode);
  });
});