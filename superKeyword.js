class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed} mph`)
    }
}

class Rabbit extends Animal{
    constructor(name,age,runSpeed){
        super(name,age);
        this.runSpeed = runSpeed;
    }
    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}

class Fish extends Animal{
    constructor(name,age,swimSpeed){
        super(name,age);
        this.swimSpeed = swimSpeed;
    }

    swim(){
        console.log(`This ${this.name} can swim`)
        super.move(this.swimSpeed);
    }
}

class Hawk extends Animal{
    constructor(name,age,flySpeed){
        super(name,age);
        this.flySpeed = flySpeed;
    }

    fly(){
        
        console.log(`This ${this.name} can fly`)
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("rabbit", 10, 35);
const fish = new Fish("Fish",4,12);
const hawk = new Hawk("Hawk",9,30);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);

rabbit.run();
hawk.fly();
fish.swim();