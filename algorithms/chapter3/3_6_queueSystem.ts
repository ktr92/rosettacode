/**
 * В приюте для животных есть только собаки и кошки, а работа осуществляется в порядке очереди. Люди должны каждый раз забирать «самое старое»
(по времени пребывания в питомнике) животное, но могут выбрать кошку
или собаку (животное в любом случае будет «самым старым»). Нельзя выбрать любое понравившееся животное. Создайте структуру данных, которая
обеспечивает функционирование этой системы и реализует операции enqueue,
dequeueAny, dequeueDog и dequeuecat. Разрешается использование встроенной
структуры данных Linkedlist.
 */
import Queue from "../../structures/Queue";

abstract class Animal {
  static counter: number = 0;
  public order: number = 0;
  public name: string = "";
  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal {}
class Cat extends Animal {}
export class AnimalQueue {
  public catsQueue: Queue<Animal> = new Queue();
  public dogsQueue: Queue<Animal> = new Queue();

  enqueue(animal: Animal) {
    animal.order = Animal.counter;
    Animal.counter++;
    if (animal instanceof Dog) {
      this.dogsQueue.enqueue(animal);
    }
    if (animal instanceof Cat) {
      this.catsQueue.enqueue(animal);
    }
  }

  dequeueAny() {
    const cat = this.catsQueue.peek();
    const dog = this.dogsQueue.peek();

    if (!cat && !dog) return undefined; 

    if (!cat) return this.dequeueDog();
    if (!dog) return this.dequeueCat();

    if (cat.order < dog.order) {
      return this.dequeueCat();
    } else {
      return this.dequeueDog();
    }
  }
  dequeueCat() {
    return this.catsQueue.dequeue();
  }
  dequeueDog() {
    return this.dogsQueue.dequeue();
  }
}

/* const cat1 = new Cat('cat1')
const cat2 = new Cat('cat2')
const dog1 = new Dog('dog1')

console.log(cat1.order)
console.log(cat2.order)
console.log(dog1.order) */
