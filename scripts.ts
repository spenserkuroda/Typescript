interface Person {
    name: string;
    age: number;
}

class Neighborhood {

    private people: Person[];
    constructor() {
        this.people = [{name: 'bill', age: 10}];
        console.log(JSON.stringify(this.people[0]));
    }

}
