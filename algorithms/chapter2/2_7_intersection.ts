import {
  createSinglyLinkedList,
  SinglyListNode,
} from "../../structures/linkedList_simple";

function isIntersect(head1: SinglyListNode<number>, head2: SinglyListNode<number>): boolean {
 const visitedNodes = new Set<SinglyListNode<number>>();
 while (head1) {
  visitedNodes.add(head1) 
  head1 = head1.next  
 }
 while (head2) {
  if (visitedNodes.has(head2)) return true;
  head2 = head2.next  
 }
  return false;
}

const commonPart = createSinglyLinkedList([3, 4]); // Общая часть

const head1 = createSinglyLinkedList([1, 2]);
head1!.next!.next = commonPart; // Привязываем общую часть к первому списку

const head2 = new SinglyListNode(5);
head2.next = commonPart; // Привязываем ТУ ЖЕ САМУЮ общую часть ко второму списку

console.log("Тест 1 (Пересекаются):", isIntersect(head1!, head2) === true ? "✅ ПРОЙДЕН" : "❌ ОШИБКА (Должно быть true)");


// --- Тест 2: НЕ пересекаются, но значения СОВПАДАЮТ ---
// Список 3: 1 -> 2 -> 3 -> null
// Список 4: 1 -> 2 -> 3 -> null (абсолютно другие объекты в памяти)
const head3 = createSinglyLinkedList([1, 2, 3]);
const head4 = createSinglyLinkedList([1, 2, 3]);

console.log("Тест 2 (Одинаковые значения, разные ссылки):", isIntersect(head3!, head4!) === false ? "✅ ПРОЙДЕН" : "❌ ОШИБКА (Должно быть false)");


// --- Тест 3: Один список полностью является частью другого ---
// Список 5: 1 -> 2 -> 3 -> null
// Список 6:      2 -> 3 -> null (начинается со второго узла Списка 5)
const head5 = createSinglyLinkedList([1, 2, 3]);
const head6 = head5!.next!; // Ссылка прямо внутрь первого списка

console.log("Тест 3 (Один внутри другого):", isIntersect(head5!, head6) === true ? "✅ ПРОЙДЕН" : "❌ ОШИБКА (Должно быть true)");


// --- Тест 4: Полностью независимые разные списки ---
const head7 = createSinglyLinkedList([1, 2]);
const head8 = createSinglyLinkedList([9, 10, 11]);

console.log("Тест 4 (Разные списки):", isIntersect(head7!, head8!) === false ? "✅ ПРОЙДЕН" : "❌ ОШИБКА (Должно быть false)");

export default isIntersect;
