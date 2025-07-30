/*Create a Superhero class with 
properties like name, power, and level. 
Add a method fight(enemy) that returns 
the winner based on their levels. 
Then create at least two superheroes 
and simulate a fight.*/

class Superhero{
    constructor(name,power,level){
        this.name = name;
        this.power = power;
        this.level = level;
    }
    fight(enemy){
        if(this.level > enemy.level){
            return `In a fight ${this.name} defeats ${enemy.name}`;
        }
        else if (this.level < enemy.level){
            return `In a fight ${enemy.name} defeats ${this.name}`;
        }
        else{
            return `There would be a draw between ${enemy.name} and ${this.name}`;
        }
    }
}

const hero1 = new Superhero("The Flash","Speed",80);
const hero2 = new Superhero("Superman","Strength",99);
console.log(hero1.fight(hero2))