import Queue from "../../structures/Queue";

export class AnimalQueue {
  public catsQueue: Queue<string> = new Queue();
  public dogsQueue: Queue<string> = new Queue();
  private counter: number = 0;

  enqueue(animal: Animal) {
    if (animal instanceof Dog) {
      this.dogsQueue.enqueue(animal);
    } 
    if (animal instanceof Cat) {
      this.catsQueue.enqueue(animal);
    } 
  }

  dequeueAny() {

  }
  dequeueCat() {}
  dequeueDog() {}
}

abstract class Animal {
 static order: number = 0;
 public name: string = '';
 constructor(name: string) {
  Animal.order++
  this.name = name;
 }
}

class Dog extends Animal {
 
}
class Cat extends Animal {
 
}

const cat1 = new Cat('cat1')
const cat2 = new Cat('cat2')
const dog1 = new Dog('dog1')

console.log(Animal.order)