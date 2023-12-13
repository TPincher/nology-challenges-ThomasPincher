class Dog {
    constructor (name, breed) {
        this.name = name;
        this.breed = breed;
        this.walks = [];
        this.totalDistance = 0;
        }

        walk(distance) {
            this.walks.push(distance)
            console.log(`${this.name} goes on a ${distance}km walk`)
            this.totalDistance += (distance)
        }
        

        totalWalkDistance() {
            return `This dog has walked ${this.totalDistance} km's`
        }

        averageWalkDistance() {
            const average = this.totalDistance / this.walks.length;
            return `The average walk distance for this dog is between ${Math.floor(average)} and ${Math.ceil(average)} km's`;
        }

        walkSummary() {
            return `The walk lengths this dog has been on were ${this.walks.join(", ")} km's long`
        }
    
}


const labrador = new Dog ("Doggo", "Labrador")

labrador.walk(5);
labrador.walk(3);
labrador.walk(56);
console.log(labrador.totalWalkDistance())
console.log(labrador.averageWalkDistance())
console.log(labrador.walkSummary())
